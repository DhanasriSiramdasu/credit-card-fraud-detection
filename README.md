💳 Credit Card Fraud Detection System

A full-stack Machine Learning application that detects potentially fraudulent credit card transactions in real time using an XGBoost classification model and provides transparent AI explanations through SHAP feature attribution.

The system combines Machine Learning, Explainable AI, FastAPI, React, and Cloud Deployment into a complete end-to-end solution capable of analyzing transaction patterns and visualizing the factors influencing fraud predictions.

🚀 Live Demo

Frontend: (Add your Vercel URL)

Backend API: (Add your Render URL)

GitHub Repository:
Credit Card Fraud Detection Repository

📌 Project Overview

Credit card fraud causes billions of dollars in financial losses every year. Traditional rule-based systems often struggle to identify sophisticated fraud patterns.

This project uses a Machine Learning approach to analyze transaction characteristics and predict the likelihood of fraud. To make predictions understandable, the application integrates SHAP (SHapley Additive Explanations), allowing users to see which features most strongly influenced the model's decision.

The application provides:

Real-time fraud prediction
Fraud probability estimation
Risk categorization
Explainable AI insights
Interactive visualization dashboard
Cloud-hosted frontend and backend
🏗 System Architecture
User Input Transaction
          │
          ▼
React Frontend (V1–V28 Features)
          │
          ▼
FastAPI REST API
          │
          ▼
Feature Scaling
(Time & Amount)
          │
          ▼
XGBoost Model
          │
          ▼
Fraud Probability
          │
          ▼
SHAP Explainability
          │
          ▼
Interactive Dashboard
✨ Key Features
🔍 Real-Time Fraud Detection
Predicts whether a transaction is fraudulent or legitimate
Returns probability scores rather than simple binary classification
Processes transactions instantly through FastAPI
📊 Risk Assessment

Transactions are categorized into:

Risk Level	Condition
LOW	Probability ≤ 50%
MEDIUM	Probability > 50%
HIGH	Probability > 75%
🧠 Explainable AI with SHAP

Unlike traditional black-box models, this system explains:

Which features influenced the prediction
Whether a feature pushed the transaction toward fraud or normal behavior
Relative impact of each feature

Top 5 SHAP features are displayed visually within the dashboard.

📈 Interactive Dashboard

The React frontend provides:

Transaction input interface
Fraud probability visualization
Risk-level indicators
SHAP explanation charts
Recent prediction history
Sample transaction scenarios
🧪 Built-in Testing Scenarios

Preloaded examples include:

High Risk Transaction
Medium Risk Transaction
Low Risk Transaction
Normal Transaction

This allows quick demonstration without requiring manual data entry.

⚙️ Machine Learning Pipeline
Input Features

The model utilizes:

V1 – V28 anonymized PCA-transformed transaction features
Transaction Amount
Transaction Time
Preprocessing
Amount scaling
Time scaling
Feature vector construction
Model

The prediction engine uses:

XGBoost Classifier

chosen for:

High accuracy on tabular datasets
Strong handling of non-linear patterns
Robust performance on imbalanced fraud datasets
🛠 Technology Stack
Frontend
React.js
JavaScript
CSS
Backend
FastAPI
Python
Machine Learning
XGBoost
Scikit-learn
SHAP
NumPy
Pandas
Deployment
Render (Backend)
Vercel (Frontend)
GitHub (Version Control)
📡 API Endpoint
Predict Transaction
Request
POST /predict

Example:

{
  "amount": 149.62,
  "time": 406,
  "v_features": [
    -1.359807,
    -0.072781,
    ...
  ]
}
Response
{
  "prediction": "NORMAL",
  "fraud_probability": 0.0012,
  "risk_level": "LOW",
  "top_reasons": [
    {
      "feature": "V14",
      "impact": -0.2154
    }
  ]
}
🎯 Challenges Solved
Fraud Detection

Built a production-style ML pipeline capable of evaluating transaction risk in real time.

Model Explainability

Integrated SHAP to overcome the black-box nature of machine learning models.

Full-Stack Integration

Connected a React frontend with a FastAPI backend using REST APIs.

Cloud Deployment

Successfully deployed:

Frontend on Vercel
Backend on Render

with environment variable management and CORS configuration.

📸 Screenshots

Add screenshots here:

Dashboard

(Insert screenshot)

High-Risk Prediction

(Insert screenshot)

SHAP Explanation Visualization

(Insert screenshot)

👨‍💻 Author

Dhanasri Siramdasu

Aspiring Software Engineer & Machine Learning Engineer passionate about building end-to-end AI applications that combine predictive analytics, explainable AI, and modern web technologies.
