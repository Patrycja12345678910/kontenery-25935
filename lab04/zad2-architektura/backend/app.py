import os
from flask import Flask
import psycopg2

app = Flask(__name__)

@app.route("/")
def home():
    return "Backend Flask działa"

@app.route("/db")
def database():
    try:
        conn = psycopg2.connect(
            host=os.getenv("DB_HOST", "database"),
            dbname=os.getenv("DB_NAME", "myapp"),
            user=os.getenv("DB_USER", "postgres"),
            password=os.getenv("DB_PASSWORD")
        )

        cur = conn.cursor()
        cur.execute("SELECT version();")
        result = cur.fetchone()

        cur.close()
        conn.close()

        return f"Połączono z PostgreSQL {result[0]}"

    except Exception as e:
        return f"Błąd połączenia z bazą: {e}", 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
