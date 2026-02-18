from fastapi import FastAPI
from 



app = FastAPI()

app.

@app.get("/")
def main():
    return {"message": "Hello from fastapi"}