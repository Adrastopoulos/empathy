import cv2
import requests

cam = cv2.VideoCapture(0)

api = 'https://ea77-128-237-82-8.ngrok.io/'

while True:
    result, image = cam.read()
    data = cv2.imencode('.jpg', image)[1]
    print("picture taken")
    try:
        thing = requests.post(api, files={'file': ('thing.jpg', data, 'image/jpg', {'expires': '0'})})
    except Exception:
        print(f"there was a minor fucky wucky")
    print(thing.json())

    k = cv2.waitKey(1)
    if k != -1:
        break

result, image = cam.read()
print(type(cv2.imencode('.jpg', image)[1]))

data = cv2.imencode('.jpg', image)[1]
thing = requests.post(api, files={'file': ('thing.jpg', data, 'image/jpg', {'Expires': '0'})})
print(thing.json())

if result:
    cv2.imwrite('image.jpg', image)
else:
    print("there was a fucky wucky")

cam.release()

print(type(image))
