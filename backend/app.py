from flask import Flask , send_file,request,render_template
import flask_cors
from flask_pymongo import PyMongo

d=dict()
d["heater"] ={ "val" : 7 ,"alt" : "https://sunearthinc.com/"  }
d["plastic cutlery"] = { "val" : 6 ,"alt" : "https://ediblepro.com/"  }
d["tissues"] = { "val" : 7 ,"alt" : "https://hankybook.com/eco-friendly-tissue-paper"  }
d["petrol"] = 9
d["gas"] = 5
d["furniture"] = 4
d["steel"] =3




app=Flask(__name__)
app.config["MONGO_URI"]="mongodb://localhost:27017/sustain4ward"
mongo = PyMongo(app)

@app.route("/api/")
def api():
    category= request.args.get("product")
    return render_template("colour.html" , link = d[category]["alt"] , num=d[category]["val"])
    pass

@app.route("/extapi/" , methods=["POST"])
def api():
    category= request.args.get("product")
    return render_template("colour.html" , link = d[category]["alt"] , num=d[category]["val"])
    pass

@app.route("/uploadproduct/" , methods=["POST" , "GET"] )
def uploadproduct():
    if request.method=="POST":
        data = request.form
        # print(data)
        data = dict(data.copy())
        if "img" not in request.files:
            return "file not uploaded rpoperly, refresh and try again"
        img = request.files["img"]
        mongo.save_file(img.filename , img)
        # return mongo.send_file(img.filename)
        print("saved :",img.filename)
        data["img"] = img.filename
        mongo.db.get_collection("products").insert_one(data)
        return "uploaded!"
    return send_file("../frontend/insertportal/insertport.html")
    pass
@app.route("/getimage/<name>")
def getimage(name):
    print("asked for:",name)
    return mongo.send_file(name)

@app.route("/")
def home():
    
    return send_file("../frontend/index.html")
    pass

@app.route("/general/")
def general():
    
    return send_file("../frontend/general.html")
    pass

if __name__ == "__main__":
    app.run(debug = True)