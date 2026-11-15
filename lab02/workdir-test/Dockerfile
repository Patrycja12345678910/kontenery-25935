FROM python:3.11-slim

WORKDIR /app

COPY src/ ./src/
COPY config/app.conf ./config/

ADD archive.tar.gz ./extracted/

RUN ls -la /app/ && ls -la /app/extracted/

CMD ["python", "src/main.py"]