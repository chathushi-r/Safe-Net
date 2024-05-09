SafeNet is a web application that acts as a malware detection tool for scanning URLS/PE files. Users are allowed to log in, register, and scan PE files or URLs. The system will then offer the user with a result 
indicating if the PE file/URL is malicious or safe. In this implementation, ML classification models are constructed to aid in the processing of the system's two key functionalities: URL scanning and PE file scanning.
The application is connected to a database at the backend that will store all the user details and scanned history of PE files/URLs.

This application will allow the user to signup and login as a client/admin. Thereafter, the user will be directed to a dashboard that will consist of user details, user history and the options to upload urls/PE files
for scanning.
After a PE file/url is uploaded for a scan, the system provides a result whether the it is malicious/benign.
If the PE file/url is malicious, the system provides the following details:
- Timestamp of the scan
- General safety recommendations on how to handle malicious files/urls
- General information resources for the user to gain some understanding on malicious files/urls.
If the PE file/url is benign:
- Timestamp of the scan
- For a safe url, a clickable link to direct to that uploaded safe url.
- PE file features and URL features

Technologies used:
- To build the front-end: HTML/CSS/JavaScript
- To build the web back-end: Nodejs, Express, Flask, Python
- To build the database: MySQL
- To build the ML models for scanning: Python 

IDEs used:
- Visual Studio Code
- Jupyter Notebook
- Google Colab
