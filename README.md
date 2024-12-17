### ***Note: This project is mainly focused on bangalore city***
# Price Prediction Model

## Table of Contents

- Introduction

-Project Structure

- Features

- Data Preprocessing and Exploratory Data Analysis (EDA)

- Model Training

- Web Application

- Installation and Usage

- Results

- Future Scope

## Introduction


This project focuses on building a House Price Prediction Model using machine learning. The goal is to predict house prices based on various features such as location, size, total square footage, number of bathrooms, and more. The application is deployed as a web app using Flask.

## Project Structure
```
price-prediction-app/
├── app.py                  # Main Flask application
├── templates/
│   ├── index.html          # Frontend HTML file
│   └── result.html         # Result display page
├── static/
│   └── style.css           # Styling for the web app
├── model/
│   ├── model.pkl           # Trained machine learning model
│   └── scaler.pkl          # Scaler for feature normalization
├── data/
│   └── Bengaluru_House_Data.csv # Dataset used for training
├── README.md               # Project documentation
└── requirements.txt        # Required Python packages
```
## Features

- Predict House Prices: Based on user inputs like location, size, and other features.

- Web Interface: User-friendly web interface built using Flask.

- Visualization: Includes interactive data visualizations such as histograms and scatter plots.

- Data Preprocessing and Exploratory Data Analysis (EDA)

## Dataset

The dataset contains house listings with the following columns:

- area_type: Type of area (e.g., Super built-up, Plot).

- location: Location of the property.

- size: Size of the property (e.g., 2 BHK).

- total_sqft: Total square footage.

- bath: Number of bathrooms.

- balcony: Number of balconies.

- price: Price of the property in Lakhs INR.

## EDA Steps

- Distribution of House Prices: Histogram reveals a right-skewed distribution.

- Price per Square Foot (PPSF): Analyzed across top locations to identify premium areas.

- Impact of Location: Bar plot showing disparities in average prices by location.

- Relationship Between Size and Price: Scatter plot demonstrating positive correlation.

- Bedrooms and Price: Box plot highlighting dominant categories and price ranges.

- Correlation Analysis: Heatmap showing relationships between numerical features.

## Model Training

- Model: Trained using a Gradient Boosting Regressor for robust price predictions.

- Evaluation Metrics:

- Mean Absolute Error (MAE): 5.12

- Mean Squared Error (MSE): 45.78

- R² Score: 0.89

- Data Splitting: 70% training, 15% validation, and 15% testing.

## Web Application

- The Flask-based web application allows users to:

Enter property details (e.g., location, size, total square footage).

Get instant price predictions.

View relevant visualizations from the analysis.

## Key Files

- app.py: Contains routes and logic for the web application.

- templates/index.html: Input form for user data.

- templates/result.html: Displays the predicted price.

- model/model.pkl: Pre-trained model file.

## Installation and Usage

Prerequisites

- Python 3.7+

- Flask

- Pandas

- Scikit-learn

## Installation Steps

Clone the repository:
```
git clone https://github.com/your-repo/House-Price-Prediction.git
```

Navigate to the project directory:
```
cd House-Price-Prediction
```

Install dependencies:
```
pip install -r requirements.txt
```

Run the Flask app:
```
python app.py
```

Open a browser and navigate to ```http://127.0.0.1:5000/.```

## Results

- Web Application: Successfully predicts house prices with an intuitive interface.

- Model Accuracy: Achieved an R² score of 0.89 during testing.

- Visualization Insights:

Premium locations like Indiranagar show higher PPSF.

Larger properties show diminishing price returns.

## Future Scope

- Enhanced Features:

Include additional factors like proximity to amenities and age of the property.

Expand to other cities for broader applicability.

- Model Improvements:

Experiment with deep learning models for better accuracy.

Add explainability methods like SHAP or LIME.

- Deployment:

Deploy on cloud platforms like AWS or Heroku for broader access.

Feel free to contribute to this project by creating a pull request or raising an issue!
<br>
under guidance of [Dr Agughasi Victor Ikechukwu](https://github.com/Victor-Ikechukwu)

