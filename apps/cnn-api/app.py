# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from flask import Flask, request, jsonify
from PIL import Image
import cv2
import numpy as np
from keras.models import model_from_json
import keras.utils as image

 
# Flask constructor takes the name of
# current module (__name__) as argument.
app = Flask(__name__)

bigdict = {}
@app.route('/', methods = ['POST', 'GET'])
def home():
    if request.method == 'POST':
        global bigdict
        img = Image.open(request.files['file'])
        img = np.array(img)

        model = model_from_json(open("fer2.json", "r").read())
        model.load_weights('fer2.h5')

        face_haar_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

        gray_img= cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        faces_detected = face_haar_cascade.detectMultiScale(gray_img, 1.32, 5)

        count = 0
        faces = []

        for (x,y,w,h) in faces_detected:
            #convert image to array
            #y=number of rows, x=number of columns
            roi_gray=gray_img[y:y+w,x:x+h]
            #resize image
            roi_gray=cv2.resize(roi_gray,(48,48))
            #true array
            img_pixels = image.img_to_array(roi_gray)
            #expand dimensions
            img_pixels = np.expand_dims(img_pixels, axis = 0)
            #normalize grayscale
            img_pixels /= 255
            
            predictions = model.predict(img_pixels)

            X = np.divide(predictions[0],np.sum(predictions))
            X = np.multiply(100, X)
            X = np.asarray(X, dtype = 'int')
            faces.append(X.tolist())
        
        if (len(faces) != 0): 
            bigdict["faces"] = faces
        return bigdict
    else:
        print(bigdict)
        return bigdict

if __name__ == "__main__":
    app.run(port=8000, debug=True)

