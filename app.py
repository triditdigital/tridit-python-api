from flask import Flask, request, jsonify
from generate import password

def tridit():
    app = Flask(__name__)
    app.register_blueprint(password, url_prefix='/')
    return app

app = tridit()
app.run(debug=True)