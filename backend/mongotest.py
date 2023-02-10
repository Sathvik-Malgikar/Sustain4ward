from flask import Flask , request , redirect ,Response, send_file
from pymongo import MongoClient
import base64,bson

app = Flask(__name__)

client = MongoClient( "mongodb://localhost:27017/")
db = client["sustain4ward"]
images = db["images"]

@app.route("/uploadproduct/" , methods=["POST" , "GET"] )
def uploadproduct():
    if request.method=="POST":
        file = request.files["img"]
        bencoded = bson.
    return send_file("../frontend/insertportal/insertportal.html")

@app.route("/img/<name>" ,  methods = [ "POST" , "GET"] )
def img(name):
    # Get the image from the database
    image = images.find_one({"_id": name})
    if image is None:
        # Return a 404 response if the image was not found
        return Response(status=404)

    # Convert the binary data to base64 encoding
    image_data = base64.b64encode(image["data"]).decode("utf-8")
    # Construct the response with the image data
    return Response(response="<img src='data:image/jpeg;base64,{}' />".format(image_data),
                    content_type="text/html")

if __name__ == "__main__":
    app.run(debug = True)