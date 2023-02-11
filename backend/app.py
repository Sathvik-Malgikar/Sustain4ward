from flask import Flask , send_file,request,render_template,Response
from flask_cors import CORS
from pymongo import MongoClient
import json
import certifi
import random
from os import environ
from generatelink import get_shopping_results
ca = certifi.where()

d=dict()
d["heater"] ={ "val" : 7 ,"alt" : "https://sunearthinc.com/"  }
d["plastic cutlery"] = { "val" : 6 ,"alt" : "https://ediblepro.com/"  }
d["tissues"] = { "val" : 7 ,"alt" : "https://hankybook.com/eco-friendly-tissue-paper"  }
d["petrol"] = 9
d["gas"] = 5
d["furniture"] = 4
d["steel"] =3

hostprefix = environ.get("hostprefix")


app=Flask(__name__)
client = MongoClient("mongodb+srv://hemabhushan:Doraemon2003@cluster1.janrf2b.mongodb.net/Sustain?retryWrites=true&w=majority" )
db = client.Sustain
collection = db.hbproducts
collection2 = db.hbproductswi

CORS(app)
@app.route("/extapi/" , methods=["POST","GET"])
def extapi():
    pattern =""
    if request.method=="GET":
        return "access by post only"
    data = json.loads( request.data)
    # print(data)
    # mongo.db.hbproducts.create_index({"Product name (and functional unit)" : "text"})
    objs=[]
    # obj = mongo.db.hbproducts.find({ "Product name (and functional unit)" : {"$text" : "Cereal" } })
    trashlist = ["per","with" , "!" ,"." ," " ,"as" ,"100%" ,"in" ,"or" ,"the" ,"how","where","what","on","for","while","out","after","with","a","an","()","(",")",";",",","-","_","","of","and","to","will","in","is","that","this","by","come","i","you","me","our","not","it","isnt","be","or","from","at","all","more","less","can","if","else","mine","cannot","can't","cant","isn't","we","no","yes","they","their","may","upto","untill","today","tomorrow","yesterday","perhaps","per","/"]
    data = map(lambda a : a.replace("(","").replace(")",""),data)
    data = list(data)
    data = filter(lambda a : ((not a.isnumeric()) and len(a)!=1 and (a.lower() not in trashlist)),data)
    data = list(data)
    
    # print(data)
    # return "break"
    for word in data:
        
        wordobjs= list(collection.aggregate([
            {
                "$search" : {
                    "index" : "pi",
                    "text" :{
                        "query": word,
                        "path" : "Product name (and functional unit)"
                    }
                }
            }
        ]))
        print(len(wordobjs[0:2]))
        objs.extend(wordobjs[0:2])
        
    objs=list(objs)
    # print(len(objs))
    for item in objs:
        print(item["Product name (and functional unit)"],"\n\n")
    
    titles = list(map(lambda a:a["Product name (and functional unit)"] , objs))
    # print(titles)
    cfp = sum(list(map(lambda a:a["*Carbon intensity"] , objs)))/len(objs)
    cfp =round(cfp , 4)
    titles.append( cfp)
    return titles
    pass

@app.route("/webapi/" , methods=["POST","GET"])
def webapi():
    pattern =""
    if request.method=="GET":
        return "access by post only"
    data = json.loads( request.data)
    # print(data)
    # mongo.db.hbproducts.create_index({"Product name (and functional unit)" : "text"})
    objs=[]
    # obj = mongo.db.hbproducts.find({ "Product name (and functional unit)" : {"$text" : "Cereal" } })
    trashlist = ["per","with" , "!" ,"." ," " ,"as" ,"100%" ,"in" ,"or" ,"the" ,"how","where","what","on","for","while","out","after","with","a","an","()","(",")",";",",","-","_","","of","and","to","will","in","is","that","this","by","come","i","you","me","our","not","it","isnt","be","or","from","at","all","more","less","can","if","else","mine","cannot","can't","cant","isn't","we","no","yes","they","their","may","upto","untill","today","tomorrow","yesterday","perhaps","per","/"]
    data = map(lambda a : a.replace("(","").replace(")",""),data)
    data = list(data)
    data = filter(lambda a : ((not a.isnumeric()) and len(a)!=1 and (a.lower() not in trashlist)),data)
    data = list(data)
    
    # print(data)
    # return "break"
    for word in data:
        
        wordobjs= list(collection2.aggregate([
            {
                "$search" : {
                    "index" : "piwi",
                    "text" :{
                        "query": word,
                        "path" : "Product name (and functional unit)"
                    }
                }
            }
        ]))
        print(len(wordobjs[0:2]))
        objs.extend(wordobjs[0:2])
        
    objs=list(objs)
    
    # print(len(objs))
    # for item in objs:
    #     print(item["Product name (and functional unit)"],"\n\n")
    print(objs[0])
    # return "ERh"
    titles = list(map(lambda a:a["Product name (and functional unit)"] , objs))
    
    def checker(a):
        
        if "imgurl" not in a:
            return ""
        else:
            return a["imgurl"]
        
    
    imgs = list(map( checker , objs))
    # print(titles)
    # cfp = sum(list(map(lambda a:a["*Carbon intensity"] , objs)))/len(objs)
    # cfp =round(cfp , 4)
    ecoval =[ (random.random()+1) *5 for x in titles]
    towebapp = [ {"prodname" : x, "imgurl" :y , "ecoval" :z} for x in titles for y in imgs for z in ecoval  ]
    return towebapp
    



@app.route("/getlink/<title>")
def getlink(title):
   
    # print(title)
    # return "Er"
    returnobj= get_shopping_results(title)
    if not returnobj:
        return Response(status=404)
    link  = returnobj[0]["link"]
    # print(type(link))
    return {"link":link}
    pass


@app.route("/api/")
def api():
    category= request.args.get("product")
    return render_template("colour.html" , link = d[category]["alt"] , num=d[category]["val"])
    pass

@app.route('/signin/', methods=['POST'])
def post_sign_in():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        user = Users.find_one({'email': email, 'password': password})
        if user:
            res = Response(response=json.dumps(
                {'email': email, 'score': user['score']}), mimetype="application/json", status=200)
            res.headers['Access-Control-Allow-Origin'] = '*'
            return res
        else:
            reserr = Response(
                response={'message': 'User with given credentials not found. Please sign up'}, status=404)
            return reserr


@app.route('/signup/', methods=['POST'])
def post_sign_up():
    # if request.method == 'POST':
    name = request.form['name']
    password = request.form['password']
    email = request.form['email']
    existinguser = Users.find_one({'email': email, 'password': password})
    print(existinguser)
    if existinguser:
        resp = Response(json.dumps(
            {'message': 'User already exist please sign in'}), response=400, mimetype="application/json")
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp
    Users.insert_one({'email': email, 'password': password, 'score': 0})
    resp2 = Response(json.dumps(
        {'email': email, 'name': name, 'score': 0}), response=200, mimetype="application/json")
    return resp2

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