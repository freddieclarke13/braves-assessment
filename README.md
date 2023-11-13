# Frederick Clarke - Atlanta Braves Assessment

## Overview
This application allows for the provided batted ball data to be analyzed individually, in addition to producing graphs to visualize the overall trends within the data. A user can iterate through at bats, watch the video, and view the statistics. A simple k-Nearest Neighbors model is used to calculated a projected outcome for each at bat. The frontend is built with React using the MaterialUI and Axios libraries. The backend is built with Flask using the Pandas, Matplotlib, and SciKit-Learn libraries.

## Requirements
- Python3 (3.9.6 recommended)
- Node.js (20.8.1 recommended)

## Installing Dependencies
From project root:
- cd visualizer
- pip install flask matplotlib pandas scikit-learn Flask-Cors
- cd ..
- cd braves-frontend
- npm install react axios @mui/material @emotion/react @emotion/styled

## Running the Application
From project root:
- cd visualizer
- flask --app app run
- cd ..
- cd frontend
- npm start

- The Flask API will run on http://127.0.0.1:5000/
- The frontend will run on http://localhost:3000/
