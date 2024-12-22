from flask import Flask, render_template
import sqlite3
from flask import g

DATABASE = 'test.db'

app = Flask(__name__)

@app.route('/hello')
def hello():
    return 'Hello, World'

@app.route('/projects/')
def projects():
    return 'The project page'

@app.route('/about')
def about():
    return 'The about page'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory = sqlite3.Row
    return db

def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv

@app.route('/')
def index():
    print ("Hello Index")
    cur = get_db().cursor()
    for questions in query_db('select * from terms'):
        print(questions['questions'])
        ret = questions['questions']
    return render_template('index.html', pasta = ret)

@app.teardown_appcontext
def close_connection(execution):
        db = getattr(g, '_database', None)
        if db is not None:
            db.close()
