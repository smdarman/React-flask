import time
from flask import Flask
import requests
from flask import jsonify
import ssl
import pandas as pd
from flask import request

from dotenv import load_dotenv

from pymongo import MongoClient
import os
from flask_cors import CORS
import json

project_folder = os.path.expanduser('~/React-flask')  # adjust as appropriate
load_dotenv(os.path.join(project_folder, '.env'))

SECRET_KEY = os.environ.get('SECRET_KEY')

#env from computer variables stored in file
API = os.environ.get('API_KEY')

# app = Flask(__name__)

# set the project root directory as the static folder, you can set others.
# app = Flask(__name__,
#             static_url_path='',
#             static_folder='client/build')

app = Flask(__name__, static_folder='client/build', static_url_path='')
CORS(app)
app.config['DEBUG'] = True

@app.route('/')
def index():
    return app.send_static_file('index.html')
    

# local = MongoClient('localhost:27017')
client = MongoClient(os.getenv('DATABASE_URL'),
                      ssl=True, ssl_cert_reqs=ssl.CERT_NONE)
db2 = client.twitterdb #twitterdb is the name of db
star = db2.mytest2_search
#to change to dataframe
df = pd.DataFrame(list(star.find()))
print(df.sentiment.head())



@app.route('/tweet', methods=['GET'])
def get_all_tweets():
  #mytest2_search is the name of collection in twitter db
  star = db2.result2_search
  positive = 0

  negative = 0

  neutral = 0
  output = []
  for s in star.find():
    sentiment = s['sentiment']
    if (sentiment == 0):  # adding reaction of how people are reacting to find average later
        neutral += 1
    
    elif (sentiment > 0.1 and sentiment <= 0.9):
        positive += 1
    
    elif (sentiment > -0.9 and sentiment <= -0.1):
        negative += 1
    
  output.append({'neutral' : neutral, 'positive' : positive, 'negative': negative})
  print('output is',output)
  return jsonify({'result' : output})

# @app.route('/tweet', methods=['GET'])
# def get_all_tweets():
#   #mytest2_search is the name of collection in twitter db
#   star = db2.mytest2_search
#   output = []
#   for s in star.find():
#     output.append({'tweet' : s['text'], 'sentiment' : s['sentiment']})
#   return jsonify({'result' : output})


client = MongoClient(os.getenv('DATABASE_URL'),
                      ssl=True, ssl_cert_reqs=ssl.CERT_NONE)
db = client.test


@app.route('/star', methods=['GET'])
def get_all_stars():
  #posts is the name of collection in poster db
  star = db.registrations
  
  output = []
  for s in star.find():
    output.append({'title' : s['name'], 'name' : s['email']})
  return jsonify({'result' : output})

# db = client.poster #poster is the name of db
#
# @app.route('/star', methods=['GET'])
# def get_all_stars():
#   #posts is the name of collection in poster db
#   star = db.posts
#   output = []
#   for s in star.find():
#     output.append({'title' : s['text'], 'name' : s['author']})
#   return jsonify({'result' : output})

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
    output = []
    for i in list:
      output.append({'direction' : i['name'], 'polarity' : i['charge']})
    return jsonify({'list' : output})


@app.route('/api/getNews', methods=['GET', 'POST'])
def get_news():
 
  
  
  # # print('myterm', term)
  # if request.method == 'POST':
  #   print('post app')
  #   req = request.json
  #   print(req)
  #   # term = request.form['term']

  #   #getting the value of name from the json
  #   term = req['value'] + term
   
  #   print(term)
  #term1 = request.form['term']
  # try:
  req = request.json
  print(req)
  term1= req['value']
    # print(f"main term is {term1}")
  term_1 = f"{term1}"
  print(f"term is {term_1}")
  # except:
  #   term = ''
  # print('after', term)
  # term = ''
  # req = request.json

  # term = 'health'


  # if request.method == 'POST':
  #   req = request.json
  #   print(req)
  #   term= req['value']
  #   print('first term is',term)

     

    
    
    # print('term is',term)
  api = API
      # print(term)



            # urls = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey="



  urls = "https://newsapi.org/v2/top-headlines?country=au&category="



  bit = "&apiKey="

  main_url = urls + term1 + bit + api

        # fetching data in json format
  data = requests.get(main_url).json()
  # a_dic['data'] = data








  return {'data': data}



@app.route('/api/covid', methods=['GET'])
def get_covid():
   

    # urls = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey="

    urls = "https://api.thevirustracker.com/free-api?countryTotal=AU"

   

    # fetching data in json format
    data = requests.get(urls).json()

    return {'data': data}



if __name__ == '__main__':
    app.run(debug=True)