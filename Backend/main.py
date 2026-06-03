from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import  BaseModel
import joblib
import numpy as np
import shap

import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model = joblib.load(os.path.join(BASE_DIR, './models/fraud_model.pkl'))
scaler = joblib.load(os.path.join(BASE_DIR, './models/scaler.pkl'))

# APP setup
app=FastAPI(title="Fraud Detection API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000",
                   "https://credit-card-fraud-detection-cvkm.vercel.app"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request Schema
class Transaction(BaseModel):
    amount:float
    time:float
    v_features:list[float]
@app.get("/")
def root():
    return ({"message":"Welcome to the Fraud Detection API"})

@app.post("/predict")
def predict(transaction:Transaction):
    # scale amount and time
    scaled_amount=scaler.transform([[transaction.amount]])[0][0]
    scaled_time=scaler.transform([[transaction.time]])[0][0]

    # Build feature array: v1=v28 +scaled_amount+scaled_time
    features=np.array(transaction.v_features+[scaled_amount,scaled_time]).reshape(1,-1)

    # predict probability
    prob=model.predict_proba(features)[0][1]
    prediction="FRAUD" if prob >0.5 else "NORMAL"

    # SHAP Expalantion
    explainer=shap.TreeExplainer(model)
    shap_values=explainer.shap_values(features)[0]
    feature_names=[f"V{i}" for i in range(1,29)]+["scaled_amount","scaled_time"]
    top_reasons=sorted(
        zip(feature_names, shap_values),
        key=lambda x: abs(x[1]),
        reverse=True)[:5]
    
    return{
        "prediction":prediction,
        "fraud_probability":round(float(prob),4),
        "risk_level":"HIGH" if prob >0.75 else "MEDIUM" if prob >0.5 else "LOW", 
        "top_reasons":[{"feature":f,"impact": round(float(v),4)}
                       for f,v in top_reasons
        ]
    }
