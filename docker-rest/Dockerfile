FROM debian:jessie

MAINTAINER Sridhar Vemula
RUN apt-get -y update
RUN apt-get install -y python wget nano

RUN cd /tmp/ && wget https://bootstrap.pypa.io/get-pip.py && python get-pip.py

RUN rm -rf /tmp/Python-2.7.5.tgz && rm -rf /tmp/get-pip.py

RUN pip install Flask

ADD ./hello.py /tmp/hello.py

ENV FLASK_APP=/tmp/hello.py

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]