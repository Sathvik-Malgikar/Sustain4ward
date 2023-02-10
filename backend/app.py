from flask import Flask , send_file,request
import flask_cors

d=dict()
d["heater"] ={ "val" : 7 ,"alt" : "https://sunearthinc.com/"  }
d["plastic cutlery"] = { "val" : 6 ,"alt" : "https://ediblepro.com/"  }
d["tissues"] = { "val" : 7 ,"alt" : "https://hankybook.com/eco-friendly-tissue-paper"  }
d["petrol"] = 9
d["gas"] = 5
d["furniture"] = 4
d["steel"] =3




app=Flask(__name__)

@app.route("/api/")
def api():
    category= request.args.get("product")
    return d[category]
    pass

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