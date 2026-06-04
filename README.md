# 💳 Credit Card Fraud Detection System

## 🚀 Overview

A full-stack Machine Learning application that detects potentially fraudulent credit card transactions in real time using an **XGBoost classification model** and provides transparent AI explanations through **SHAP (SHapley Additive Explanations)**.

The system combines **Machine Learning, Explainable AI, FastAPI, React.js, and Cloud Deployment** into a complete end-to-end solution capable of analyzing transaction patterns and visualizing the factors influencing fraud predictions.

---

## 🔗 Live Demo

**Frontend:**https://credit-card-fraud-detection-weld.vercel.app

**Backend API:** https://credit-card-fraud-detection-4nsk.onrender.com

---

## 📌 Problem Statement

Credit card fraud results in billions of dollars in losses annually. Traditional rule-based systems often struggle to identify evolving fraud patterns and provide little insight into why a transaction is flagged.

This project addresses those challenges by:

* Detecting fraudulent transactions using Machine Learning
* Providing fraud probability scores
* Categorizing transaction risk levels
* Explaining predictions through SHAP feature attribution
* Delivering results through an interactive web dashboard

---

## 🏗️ System Architecture

```text
User Transaction Input
          │
          ▼
React Frontend
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
```

---

## ✨ Features

### 🔍 Real-Time Fraud Detection

* Predicts whether a transaction is fraudulent or legitimate
* Returns fraud probability scores
* Provides instant API responses through FastAPI
* Supports custom transaction inputs

### 📊 Risk Assessment

| Risk Level | Condition         |
| ---------- | ----------------- |
| LOW        | Probability ≤ 50% |
| MEDIUM     | Probability > 50% |
| HIGH       | Probability > 75% |

### 🧠 Explainable AI (SHAP)

Unlike traditional black-box models, the system explains:

* Which features influenced the prediction
* Whether a feature pushed the transaction toward fraud or normal behavior
* Relative importance of each feature

The dashboard displays the **Top 5 SHAP Features** contributing to the prediction.

### 📈 Interactive Dashboard

The React frontend includes:

* Transaction input form
* Fraud probability visualization
* Risk-level indicators
* SHAP explanation charts
* Prediction history tracking
* Sample transaction scenarios

### 🧪 Built-in Demo Scenarios

The application provides preloaded examples for quick testing:

* 🔴 High Risk Transaction
* 🟡 Medium Risk Transaction
* 🟠 Low Risk Transaction
* ✅ Normal Transaction

---

## ⚙️ Machine Learning Pipeline

### Input Features

The model uses:

* V1–V28 anonymized PCA-transformed transaction features
* Transaction Amount
* Transaction Time

### Preprocessing

* Scaling of transaction amount
* Scaling of transaction time
* Feature vector construction
* Model-ready feature transformation

### Model

**XGBoost Classifier**

Selected because of:

* Strong performance on tabular datasets
* High predictive accuracy
* Ability to model complex non-linear relationships
* Robust handling of fraud detection datasets

---

## 📡 API Endpoints

### Health Check

```http
GET /
```

Response:

```json
{
  "message": "Welcome to the Fraud Detection API"
}
```

---

### Predict Transaction

```http
POST /predict
```

Request:

```json
{
  "amount": 149.62,
  "time": 406,
  "v_features": [
    -1.359807,
    -0.072781,
    ...
  ]
}
```

Response:

```json
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
```

---

## 📊 Explainability Dashboard

The application visualizes SHAP feature contributions:

* 🔴 Red bars indicate features pushing the prediction toward **Fraud**
* 🔵 Blue bars indicate features pushing the prediction toward **Normal**
* Feature importance is ranked by SHAP impact magnitude

This makes model decisions interpretable and transparent.

---

## 🛠️ Technology Stack

### Frontend

* React.js
* JavaScript
* CSS3

### Backend

* FastAPI
* Python

### Machine Learning

* XGBoost
* Scikit-Learn
* SHAP
* NumPy
* Pandas

### Deployment

* Render (Backend Hosting)
* Vercel (Frontend Hosting)
* GitHub (Version Control)

---

## 🎯 Key Challenges Solved

### Fraud Detection Pipeline

Built a production-style machine learning workflow capable of evaluating transaction risk in real time.

### Explainable AI Integration

Implemented SHAP explanations to improve model transparency and user trust.

### Full-Stack Integration

Connected a React frontend with a FastAPI backend through REST APIs and JSON communication.

### Cloud Deployment

Successfully deployed:

* Frontend on Vercel
* Backend on Render

Including:

* Environment variable configuration
* API integration
* CORS management
* Production deployment workflow

---

## 📸 Application Screenshots

### Dashboard

<img width="1092" height="776" alt="image" src="https://github.com/user-attachments/assets/281c61ad-439c-4f2d-addd-fb03dab98166" />


### High Risk Prediction

<img width="838" height="428" alt="image" src="https://github.com/user-attachments/assets/49c2afec-084e-4819-a581-6724f8585946" />


### SHAP Explanation Visualization

<img width="846" height="475" alt="image" src="https://github.com/user-attachments/assets/b79671f5-22a2-4534-b8f6-1d24f738538c" />


---

## 📈 Future Enhancements

* Transaction data storage and analytics
* Batch transaction fraud analysis
* Real-time streaming predictions
* Advanced fraud monitoring dashboard
* Model retraining pipeline using MLOps

---

## 👨‍💻 Author

**Dhanasri Siramdasu**

Aspiring Software Engineer and Machine Learning Engineer passionate about building end-to-end AI applications that combine predictive analytics, explainable AI, and modern web technologies.
