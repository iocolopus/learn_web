from fastapi import FastAPI

app = FastAPI()

@app.get("/main/{men}")
def main():
    return {
        "message": "hola mundo"
    }