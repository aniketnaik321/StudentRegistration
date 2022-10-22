# using flask_restful
from flask import Flask, jsonify, render_template, render_template_string, request
from flask_restful import Resource, Api
from flask import send_from_directory
from flask_cors import CORS
import mysql.connector


  
# creating the flask app
app = Flask(__name__)
# creating an API object
api = Api(app)
CORS(app) # This will enable CORS for all routes  
# making a class for a particular resource
# the get, post methods correspond to get and post requests
# they are automatically mapped by flask_restful.
# other methods include put, delete, etc.


mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="abcd@1234",
  database="neetadm_db",
  connect_timeout=90,
  autocommit=True  
)




class QueryEvl():   

    @app.route('/GetQueryData/<QueryID>', methods=['GET'])
    def get(QueryID):
        thislist=[];
        mydb.connect(autocommit=True);        
        mycursor = mydb.cursor()
        mycursor.execute("call GetDataFromQuery("+QueryID+")")
        myresult = mycursor.fetchall()

        for x in range(len(myresult)):
            thislist.append(dict(zip([c[0] for c in mycursor.description], myresult[x])))        
        mydb.close()
        return jsonify(thislist)

  
# driver function
if __name__ == '__main__':  
    app.run()