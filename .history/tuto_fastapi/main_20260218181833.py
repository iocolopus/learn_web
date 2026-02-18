from fastapi import FastAPI

app = FastAPI()

@app
def main():
    return {
        "message": "hola mundo"
    }