from fastapi import FastAPI

app = FastAPI()

@app.get("/main/")
def main():
    return {
        "message": "hola mundo"
    }