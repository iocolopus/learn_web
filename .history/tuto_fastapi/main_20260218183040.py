from fastapi import FastAPI

app = FastAPI()

@app.get("/main/{mensaje}")
def main():
    return {
        "message": "hola mundo"
    }