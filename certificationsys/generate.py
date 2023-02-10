from PIL import Image , ImageFont , ImageDraw
import datetime


def create_cert(name,offset,activities):
    raw = Image.open("./raw.png")
    title_font = ImageFont.truetype("dacingscriptreg.ttf",165)
    sub_font = ImageFont.truetype("roboto.ttf",29)
    date_font = ImageFont.truetype("roboto.ttf",60)
    editable =  ImageDraw.Draw(raw)
    editable.text((720 - len(name) *16,520),name,(0,0,0),font= title_font)
    editable.text((1058 ,841),f"{offset} tons as of {datetime.date.today()}.",(40,40,40),font= sub_font)
    editable.text((1678 ,841),str(activities),(25,25,25),font= sub_font)
    editable.text((320 ,1020),f"{datetime.date.today()}",(25,25,25),font= date_font)
    raw.save("converted.png")
    
#
