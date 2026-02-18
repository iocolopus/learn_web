from fastapi import FastAPI
from fastapi.middleware import cors



app = FastAPI()

app.middleware.

@app.get("/")
def main():
    return {"message": "Hello from fastapi"}