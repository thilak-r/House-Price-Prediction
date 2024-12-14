from flask import Flask, render_template, request, jsonify
import numpy as np
import pickle

app = Flask(__name__)

# Load model and column data
model = pickle.load(open('Banglore_home_prices_model_pickle', 'rb'))  # Replace with your model path
columns = pickle.load(open('columns.pkl', 'rb'))  # Replace with your column headers path

# Load city names from the text file
with open('column_headers.txt', 'r') as file:  # Ensure the file is in the same directory
    locations = [line.strip() for line in file.readlines()]

@app.route('/')
def home():
    return render_template('index.html', locations=locations)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Retrieve and sanitize inputs
        location = request.form.get('location').strip()
        sqft = request.form.get('sqft')
        bath = request.form.get('bath')
        bhk = request.form.get('bhk')

        # Input validation
        errors = []
        if not sqft or float(sqft) <= 0:
            errors.append("Square feet value must be greater than 0.")
        if not bath or int(bath) < 1:
            errors.append("Number of bathrooms must be at least 1.")
        if not bhk:  # Bedroom can be empty or zero for studio apartments
            bhk = 0
        elif int(bhk) < 0:
            errors.append("Number of bedrooms cannot be negative.")
        if location not in locations:
            errors.append("Invalid location selected.")

        if errors:
            return render_template(
                'index.html',
                locations=locations,
                prediction_text="Error: " + " ".join(errors)
            )

        # Convert inputs to numerical values
        sqft = float(sqft)
        bath = int(bath)
        bhk = int(bhk)

        # Prepare input for prediction
        x = np.zeros(len(columns))
        x[0] = sqft
        x[1] = bath
        x[2] = bhk
        if location in columns:
            loc_index = columns.index(location)
            x[loc_index] = 1

        # Predict price
        predicted_price = model.predict([x])[0]
        predicted_price=predicted_price+35.75

        # Handle negative predictions
        if predicted_price < 0:
            prediction_text = "The predicted price is invalid. Please check the input values."
        else:
            price_in_lakhs = predicted_price / 1e5
            prediction_text = f"Predicted Price: Rs {predicted_price:,.2f} Lakhs"

        # Render template with all required parameters
        return render_template('index.html', locations=locations, prediction_text=prediction_text)

    except ValueError:
        return render_template(
            'index.html',
            locations=locations,
            prediction_text="Error: Please ensure all inputs are valid numbers."
        )
    except Exception as e:
        return render_template(
            'index.html',
            locations=locations,
            prediction_text=f"An unexpected error occurred: {str(e)}"
        )


if __name__ == "__main__":
    app.run(debug=True)
