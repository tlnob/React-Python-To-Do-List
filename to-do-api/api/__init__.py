from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask import jsonify
from flask_cors import CORS

import json

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:password@localhost/ToDo"
db = SQLAlchemy(app)
CORS(app)

class Task(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	label = db.Column(db.String(40), unique=False)

	def __init__(self, label):
		self.label = label

	def serialize(self):
		return {
			'id': self.id,
			'label': self.label
		}

@app.route("/api/tasks")
def list():
	tasks = Task.query.all()
	return jsonify(results = [task.serialize() for task in tasks] )

@app.route("/api/task", methods=["POST"])
def add():
	data = json.loads(request.data.decode("utf-8"))
	task = Task(data['label'])
	db.session.add(task)
	db.session.commit()
	return jsonify(result = task.serialize())

@app.route("/api/task/<id>", methods=["DELETE"])
def delete(id):
	task = Task.query.filter_by(id=id).first()
	db.session.delete(task)
	db.session.commit()
	return jsonify(result = task.serialize())
