from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import datetime

app = Flask(__name__)
# CORS is used to correct the CORS header problem
# https://www.treinaweb.com.br/blog/o-que-e-cors-e-como-resolver-os-principais-erros


cors = CORS(app, resources={r"/data": {"origins": "http://localhost:port"}})


@app.route('/data', methods=["GET"], strict_slashes=False)
@cross_origin(origin='localhost',headers=['Content-Type','Authorization'])
def data():
    x = datetime.datetime.now()
    response = jsonify({"result": f"Time sent using Flask Python: {x}"})
    return response

if __name__ == '__main__':
    app.run(debug=True)

