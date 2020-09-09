import time
from flask import Flask
import requests
from flask import jsonify
import ssl
import pandas as pd

from dotenv import load_dotenv

from pymongo import MongoClient
import os

project_folder = os.path.expanduser('~/React-flask')  # adjust as appropriate
load_dotenv(os.path.join(project_folder, '.env'))

SECRET_KEY = os.environ.get('SECRET_KEY')

API = os.environ.get('API_KEY')

# app = Flask(__name__)

# set the project root directory as the static folder, you can set others.
# app = Flask(__name__,
#             static_url_path='',
#             static_folder='client/build')

app = Flask(__name__, static_folder='client/build', static_url_path='/')

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
print('The mean is ' + df.sentiment.mean())

def percentage(self, part, whole):
        temp = 100 * float(part) / float(whole)
        return format(temp, '.2f')


@app.route('/tweet', methods=['GET'])
def get_all_tweets():
  #mytest2_search is the name of collection in twitter db
  star = db2.mytest2_search
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
  return jsonify({'result' : output[-1]})