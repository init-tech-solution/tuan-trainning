from flask import Flask, request, jsonify, Response
from flask_cors import CORS
import json
import csv

# import test
app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_flask():
    return 'Hello Flask'


@app.route('/api/login', methods=['POST'])
def login():
    # print(f'==> {request.args}')

    # print(f'==> {json.loads(request.get_data())}')
    
    print(f'==> {request.get_data()}')
    login_info = json.loads(request.get_data())
    
    username = login_info.get('username', '')
    password = login_info.get('password', '')
    if username and password:
        with open('users.csv') as csv_file:
            # assume column at 0 is username, column at 1 is password
            csv_reader = csv.reader(csv_file)
            for row in csv_reader:
                if row[0] == username and row[1] == password:
                    jwtToken = {'token': 12345}
                    return jsonify(jwtToken)
                    # driver.execute_script("window.localStorage;")

    return Response('Unauthorized', status=403)


if __name__ == '__main__':
    # print(f'==> {__name__}')
    # test.hello()
    app.run(host='localhost', port=8069)
