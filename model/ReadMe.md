This application consists of two machine learning models that is used for scanning urls and PE files.

URL Model

- Classification model used: Random Forest Classifier

- Datasets: Two public datasets were obtained from Kaggle and combined as one as named in the notebook as final_dataset.csv
- Malicious_n_Non-Malicious URL (Link: https://www.kaggle.com/datasets/antonyj453/urldataset/data)
- Malicious And Benign URLs (Link: https://www.kaggle.com/datasets/siddharthkumar25/malicious-and-benign-urls/)
          
- To download the model to a file: Check cell 31 in the notebook which used the joblib library to download the model to a .pkl file

File model

- Model used: Resnet

File model will be added soon
