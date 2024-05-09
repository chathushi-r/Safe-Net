from flask import Flask,request,jsonify
from urlFeatureExtraction import urlFeatureExtraction
from filePrediction import filePrediction
import numpy as np
import pandas as pd
import joblib
from tensorflow.keras.models import load_model
import os


app = Flask(__name__)

urlModel = joblib.load("url_model_final.pkl")
peFileModel_RGB = load_model('resnet_model_pe.h5')
peFileModel_GreyScale = load_model('resnet_model.h5')

def urlFeatures(url):
    scanfeatures = []
    urlCharacteristics = []
    urlFeatureExtractor = urlFeatureExtraction(url)

    urlLength =urlFeatureExtractor.getUrlLength()
    scanfeatures.append(urlLength)
    urlCharacteristics.append(urlLength)
    hostname,hostlength = urlFeatureExtractor.getHostnameLength()
    scanfeatures.append(hostlength)
    urlCharacteristics.append(hostname)
    path,pathlength =urlFeatureExtractor.getPathLength()
    scanfeatures.append(pathlength)
    urlCharacteristics.append(path)
    scanfeatures.append(urlFeatureExtractor.getTldLength())
    scanfeatures.append(urlFeatureExtractor.getNumOfHyphen())
    scanfeatures.append(urlFeatureExtractor.getNumOfAt())
    scanfeatures.append(urlFeatureExtractor.getNumOfQueMark())
    scanfeatures.append(urlFeatureExtractor.getNumOfPercMark())
    scanfeatures.append(urlFeatureExtractor.getNumOfSlash())
    scanfeatures.append(urlFeatureExtractor.getNumOfFullstop())
    scanfeatures.append(urlFeatureExtractor.getNumOfAmpersand())
    scanfeatures.append(urlFeatureExtractor.getNumOfUnderscore())
    scanfeatures.append(urlFeatureExtractor.getNumOfEqual())
    scanfeatures.append(urlFeatureExtractor.getNumOfExclamationMark())
    noOfDigits = urlFeatureExtractor.getNumOfDigits()
    scanfeatures.append(noOfDigits)
    urlCharacteristics.append(noOfDigits)
    noOfletters = urlFeatureExtractor.getNumOfLetters()
    scanfeatures.append(noOfletters)
    urlCharacteristics.append(noOfletters)
    scanfeatures.append(urlFeatureExtractor.getNumOfDirectories())
    scanfeatures.append(urlFeatureExtractor.hasIP())
    scanfeatures.append(urlFeatureExtractor.getEntropy())
    scanfeatures.append(urlFeatureExtractor.hashttp())
    scanfeatures.append(urlFeatureExtractor.hashttps())
    scanfeatures.append(urlFeatureExtractor.fdLength())
    scanfeatures.append(urlFeatureExtractor.numParameters())
    scanfeatures.append(urlFeatureExtractor.numSubDomains())

    return urlCharacteristics,scanfeatures

@app.route('/predicturl', methods=['POST'])
def predictUrl():
    featuresTest = []
    urlCharacteristics = []
  
    try:
        url = request.json
        urlCharacteristics,featuresTest = urlFeatures(url)
        with open("feature_names_X_train.txt", 'r') as file:
            feature_names_X_train = [line.strip() for line in file]
    
        reshapedFeatures = np.array(featuresTest).reshape((1, -1))
        reshapedFeatures_df = pd.DataFrame(reshapedFeatures,columns=feature_names_X_train)
        prediction = urlModel.predict(reshapedFeatures_df)
        if int(prediction[0]) == 0:
            status="Benign"
        elif int(prediction[0]) == 1:
            status="Malicious"
        
        resultData = {
            "url":url,
            "status": status,
            "urlLength":urlCharacteristics[0] ,
            "hostname": urlCharacteristics[1],
            "path": urlCharacteristics[2],
            "noOfDigits": urlCharacteristics[3],
            "noOfLetters": urlCharacteristics[4]
        }
        return jsonify(resultData)
    except Exception as e:
        print("Exception:", str(e))
        return jsonify({"error": str(e)})


@app.route('/predictPeFile', methods=['POST'])
def predictPeFile():
    
 #   if 'file' in request.files:
  #      interp = 'lanczos'
   #     dpi = 300
        
    #    #retrieve file
     #   received_file = request.files['file']

        # Read the file data and store it in a variable
      #  file_data = received_file.read()
       # fileName = received_file.filename
        #file_size = len(file_data)

        #rgb image prediction
        #imgFileName = filePrediction.exeToRGBImg(file_data)
        #folder_name = 'rgb_img' 
        #file_name = imgFileName 
        #current_directory = os.getcwd()
        #file_path = os.path.join(current_directory, folder_name, file_name)
        #className, preventionTip = filePrediction.predict_image_rgb(file_path,peFileModel_RGB)
        #print(className)
        #if className.lower() == 'malware':
            #greyscale image prediction
         #   imgFilePath = filePrediction.createGreyScaleImage(file_data,fileName)
          #  classname,preventiontip,resourcelink = filePrediction.predict_image_greyscale(imgFilePath,peFileModel_GreyScale)
           # resultData = {
            #"status": className,
            #"malwaretype":classname,
            #"filename": fileName,
            #"filesize": file_size,
            #"prevention":preventiontip,
            #"resourceLink": resourcelink,
            #}
        #elif className.lower() == 'benign':
         #   resultData = {
          #  "status": className,
           # "malwaretype":"-",
            #"filename": fileName,
            #"filesize": file_size,
            #"prevention":"-",
            #"resourceLink": "-"
            #}
        #return jsonify(resultData)  
   # else:
     #   msg ="no file received"
      #  return jsonify(msg)
        

if __name__ == '__main__':
    app.run(port=5000,debug=True)
