# Use the official Python image as the base image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the requirements file into the image
COPY requirements_prod.txt .
COPY script/JobPredictionAPI.py .
COPY script/JobPrediction.py .

COPY models/mlruns/826215840783647024/88dd333d1e6a46029a6910bef05c43f3/meta.yaml ./models/mlruns/826215840783647024/88dd333d1e6a46029a6910bef05c43f3/meta.yaml
COPY models/mlruns/826215840783647024/meta.yaml ./models/mlruns/826215840783647024/meta.yaml
COPY data/processed/feature_engineering/features_skills_clusters_description.yaml ./data/processed/feature_engineering/
COPY models/mlruns/826215840783647024/88dd333d1e6a46029a6910bef05c43f3/artifacts/model.pkl ./models/mlruns/826215840783647024/88dd333d1e6a46029a6910bef05c43f3/artifacts/
COPY models/mlruns/826215840783647024/88dd333d1e6a46029a6910bef05c43f3/artifacts/data.pkl ./models/mlruns/826215840783647024/88dd333d1e6a46029a6910bef05c43f3/artifacts/

# Install dependencies
RUN pip install --no-cache-dir -r ./requirements_prod.txt

# Expose the port the app runs on
EXPOSE 5000

# Command to run the Flask app
CMD ["python", "./JobPredictionAPI.py"]
