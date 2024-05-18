from flask import Flask, request, jsonify
from generate import generate

app = Flask(__name__)

password = generate()

@app.route("/get-password")
def send():
    data = {
        "obj": [{
            "Password": password
        }]
    }

    return jsonify(data), 200

if __name__ == '__main__':
    app.run(debug=True)