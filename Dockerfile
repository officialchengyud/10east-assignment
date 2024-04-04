# Use an official Python runtime as a parent image
FROM python:3.12-slim-bookworm

# Set environment varibles
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
# Set work directory
WORKDIR /app
# Install dependencies
COPY requirements.txt requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt
# Copy project
COPY . .

CMD [ "python3", "manage.py", "runserver", "0.0.0.0:8000"]