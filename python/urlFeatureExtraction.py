from urllib.parse import urlparse
from tld import get_tld, is_tld
import re
from scipy.stats import entropy
import math

class urlFeatureExtraction:
    def __init__(self,url):
        self.url = url
    
    def getUrlLength(self):
        return len(str(self.url))
    
    def getHostnameLength(self):
        parsedURL = urlparse(self.url)
        hostname = parsedURL.netloc
        return hostname,len(parsedURL.netloc)
    
    def getPathLength(self):
        return urlparse(self.url).path,len(urlparse(self.url).path)
    
    def getTldLength(self):
        try:
            tld = get_tld(self.url, fail_silently=True,fix_protocol=True)
            return len(tld)
        except:
            return 0
        
    def getNumOfHyphen(self):
        return self.url.count('-')
    
    def getNumOfAt(self):
        return self.url.count('@')
    
    def getNumOfQueMark(self):
        return self.url.count('?')
    
    def getNumOfPercMark(self):
        return self.url.count('%')
    
    def getNumOfFullstop(self):
        return self.url.count('.')
    
    def getNumOfAmpersand(self):
        return self.url.count('&')
    
    def getNumOfUnderscore(self):
        return self.url.count('_')
    
    def getNumOfHash(self):
        return self.url.count('#')
    
    def getNumOfEqual(self):
        return self.url.count('=')
    
    def getNumOfDollarSign(self):
        return self.url.count('$')
    
    def getNumOfAsterik(self):
        return self.url.count('*')
    
    def getNumOfExclamationMark(self):
        return self.url.count('!')
    
    def getNumOfSlash(self):
        return self.url.count('/')
    
    def getNumOfDigits(self):
        noOfDigits = 0
        noOfDigits = sum(num.isdigit() for num in self.url)
        return noOfDigits
    
    def getNumOfLetters(self):
        noOfLetters = 0
        noOfLetters = sum(letter.isalpha() for letter in self.url)
        return noOfLetters
    
    def getNumOfDirectories(self):
        path = urlparse(self.url).path
        noOfDirectories = 0
        noOfDirectories = path.count('/')
        return noOfDirectories
    
    def hasPort(self):
        port = urlparse(self.url).port
        if isinstance(port, int):
            return 1
        else:
            return 0
        
    def hasIP(self):
        checkIP = re.search('(([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.'
            '([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\/)|' 
            '((0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\/)'
            '(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}',self.url)
        if checkIP:
            return 1
        else:
            return 0
        
    def getEntropy(self):
        url = self.url.lower()
        uniqueCharacters = set(url) #extracts the unique characters of the url
        probs = (url.count(c) / len(url) for c in uniqueCharacters) #probabilities of each unique character are calculated by counting their occurrences and dividing by the total URL length.
        e = -sum([p * math.log(p) / math.log(2.0) for p in probs]) # Calculate entropy using the Shannon entropy formula
        return e

    def hashttp(self):
        if self.url.startswith('http://'):
            return 1
        else:
            return 0
    
    def hashttps(self):
        if self.url.startswith('https://'):
            return 1
        else:
            return 0
    
    def shorteningService(self):
        match = re.search('bit\.ly|goo\.gl|shorte\.st|go2l\.ink|x\.co|ow\.ly|t\.co|tinyurl|tr\.im|is\.gd|cli\.gs|'
                        'yfrog\.com|migre\.me|ff\.im|tiny\.cc|url4\.eu|twit\.ac|su\.pr|twurl\.nl|snipurl\.com|'
                        'short\.to|BudURL\.com|ping\.fm|post\.ly|Just\.as|bkite\.com|snipr\.com|fic\.kr|loopt\.us|'
                        'doiop\.com|short\.ie|kl\.am|wp\.me|rubyurl\.com|om\.ly|to\.ly|bit\.do|t\.co|lnkd\.in|'
                        'db\.tt|qr\.ae|adf\.ly|goo\.gl|bitly\.com|cur\.lv|tinyurl\.com|ow\.ly|bit\.ly|ity\.im|'
                        'q\.gs|is\.gd|po\.st|bc\.vc|twitthis\.com|u\.to|j\.mp|buzurl\.com|cutt\.us|u\.bb|yourls\.org|'
                        'x\.co|prettylinkpro\.com|scrnch\.me|filoops\.info|vzturl\.com|qr\.net|1url\.com|tweez\.me|v\.gd|'
                        'tr\.im|link\.zip\.net',self.url)
        if match:
            return 1
        else:
            return 0
    
    def fdLength(self):
        urlpath= urlparse(self.url).path
        try:
            return len(urlpath.split('/')[1])
        except:
            return 0
    
    def numParameters(self):
        params = self.url.split('&')
        return len(params) - 1
    
    def numSubDomains(self):
        subdomains = self.url.split('//')[-1].split('/')
        return len(subdomains)-1
    
