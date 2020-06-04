import time
from flask import Flask
import requests
from flask import jsonify
# importing PyMongo client
from pymongo import MongoClient


import os

SECRET_KEY = os.environ.get('SECRET_KEY')

API = os.environ.get('API_KEY')

app = Flask(__name__)

# set the project root directory as the static folder, you can set others.
# app = Flask(__name__,
#             static_url_path='',
#             static_folder='')

app = Flask(__name__, static_folder='client/build', static_url_path='/')

# @app.route('/')
# def index():
#     return app.send_static_file('index.html')

client = MongoClient('localhost:27017')
db = client.poster #poster is the name of db

# ContactDB with Contacts collections

# @app.route("/get_all_posts", methods = ['GET'])
# def get_all_post():
#     # posts = db.posts.find()
#     # return {'posts' : posts}
#     star = db.posts
#     output = []
#     for s in star.find():
#         output.append({'name' : s['author'], 'distance' : s['text']})
#     return jsonify({'result' : output})

@app.route('/star', methods=['GET'])
def get_all_stars():
  #posts is the name of collection in poster db
  star = db.posts
  output = []
  for s in star.find():
    output.append({'name' : s['text'], 'distance' : s['author']})
  return jsonify({'result' : output})


@app.route('/time')
def get_current_time():
    return {'time': time.time()}

  


list = [{'name': 'up', 'charge': '+2/3'},
          {'name': 'down', 'charge': '-1/3'},
          {'name': 'charm', 'charge': '+2/3'},
          {'name': 'strange', 'charge': '-1/3'}]

@app.route('/api/getList', methods=['GET']) 
def get_list():
    # list = ["item1", "item2", "item3"]
    
    return jsonify({'list' : list})

@app.route('/api/getNews', methods=['GET'])
def get_news():
    api = API

    # urls = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey="

    urls = "https://newsapi.org/v2/top-headlines?country=au&category=health&apiKey="

    main_url = urls + api

    # fetching data in json format
    data = requests.get(main_url).json()

    # getting all articles in a string article
    # data = page["articles"]
    # desc = []
    # news = []
    # img = []
    # url = []
    # bl = []

    # for i in range(len(l)):
    #     f = l[i]
    #     news.append(f['title'])
    #     desc.append(f['description'])
    #     img.append(f['urlToImage'])
    #     url.append(f['url'])
    #     blob = TextBlob(f['title'])
    #     blob = blob.sentiment.polarity
    #     bl.append(blob)
    #     # print(blob.sentiment)
    # mylist= zip(news, desc, img, url, bl)
   


    

    return {'data': data}
