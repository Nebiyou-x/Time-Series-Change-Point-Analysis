from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
import json

app = Flask(__name__)
CORS(app)

# Load datasets
prices_df = pd.read_csv("data/brent_oil_prices.csv")
prices_df["Date"] = pd.to_datetime(prices_df["Date"], format="mixed", dayfirst=True)

events_df = pd.read_csv("data/oil_market_events.csv")
events_df["Date"] = pd.to_datetime(events_df["Date"])

with open("data/change_point_results.json") as f:
    change_points = json.load(f)
