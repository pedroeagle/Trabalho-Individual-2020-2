FROM python:3.8-buster

WORKDIR /usr/src/app/api

RUN pip3 install virtualenv

RUN virtualenv env

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 8000