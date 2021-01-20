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
    # get_data() la backend nhan request tu front end truyen xuong
    login_info = json.loads(request.get_data())

    username = login_info.get('username', '')
    password = login_info.get('password', '')

    if username and password:
        with open('users.csv') as csv_file:
            # assume column at 0 is username, column at 1 is password
            csv_reader = csv.reader(csv_file)
            for row in csv_reader:
                if row[1] == username and row[2] == password:
                    # if come into here, means user login successfully
                    data = {
                        'id': int(row[0]),
                        'token': 1234
                    }
                    return jsonify(data)

                    # driver.eidxecute_script("window.localStorage;")

    return Response('Unauthorized', status=403)


@app.route('/api/info', methods=['GET'])
def info():
    # print(f'==> {request.args}')

    # print(f'==> {json.loads(request.get_data())}')

    print(f'login INFO {request.args}')
    # get_data() la backend nhan request tu front end truyen xuong
    # info_user = json.loads(request.args())
    user_id = request.args.get('user_id')
    if user_id:
        with open('users.csv') as csv_file:
            # assume column at 0 is username, column at 1 is password
            csv_reader = csv.reader(csv_file)
            for row in csv_reader:
                if row[0] == user_id:
                    user_info = {
                        'display_name': row[3],
                    }
                    return jsonify(user_info)

    return Response('User Not Found', status=404)


if __name__ == '__main__':
    # print(f'==> {__name__}')
    # test.hello()
    app.run(host='localhost', port=8069)
