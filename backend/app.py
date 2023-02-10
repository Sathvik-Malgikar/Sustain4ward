from flask import Flask 
import flask_cors

d=dict()
d["heat"] ={ "val" : 7 ,"alt" : "https://sunearthinc.com/"  }
d["petrol"] = 9
d["gas"] = 5
d["plastic"] = 6
d["furniture"] = 4
d["steel"] =3
d["tissue"] = 7




app=Flask(__name__)

@app.route("/api/<category>")
def home(category):
    
    return d[category]
    pass

if __name__ == "__main__":
    app.run(debug = True)