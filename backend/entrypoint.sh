#!/bin/bash

set -e
pip install --upgrade pip
pip install gunicorn
wait-for-it db:5432 --timeout=30 -- gunicorn config.wsgi:application --bind 0.0.0.0:8000
