# Empathy

A Tartanhacks 2023 project by Aprille Xi, Gabriel Hall, and Spencer Li. This project is meant to implement assistive technology to allow people with visual impairments to "see" facial expressions of the people around them. A camera attached to an RPI takes in live stream of images, which is processed in a Flask server w/ AI algorithm that outputs a file storing the emotions vector. This is then processed by the visualization interface.

Install Dependencies: Flask, python 3, cv2, DeepFace, PIL, tensorflow

## Web:

How to run: ```yarn``` then ```yarn dev```

## Wearable:

How to run: ```python3 main.py```

## CNN-API:

How to run: ```flask run```  (For macOS Monterey, use ```flask run --port 8000```)

