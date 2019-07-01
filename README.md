# Simple file upload with node and multer

This is a basic file upload application using cloudinary as cdn provider. Its written in Javascript using nodejs,express and mongodb.  

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
1. Node v8+
2. MongoDB v3.6+
3. Docker installed

---

#### Step 1. Clone git repository
```
$ git clone https://github.com/PatrickNymark/file-upload-node.git
```

#### Step 2. Go into cloned folder
```
$ cd file-upload-node
```
#### Step 3. Create .env
```
$ touch .env
```
#### Step 4. Add enviroment variables
> To run without docker, change mongo uri to: mongodb://localhost:27017/file-upload-node
```
mongoURI = 'mongodb://mongo:27017/file-upload-node',
CLOUDINARY_CLOUD_NAME = 'your_cloud_name'
CLOUDINARY_API_KEY = 'your_api_key'
CLOUDINARY_API_SECRET = 'your_api_secret'
```
#### Step 5. Run with docker
> To run without docker, run npm install and then npm start
```
$ docker-compose up
```

## Author
**Patrick Nymark**

