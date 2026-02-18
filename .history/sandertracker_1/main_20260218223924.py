from fastapi import FastAPI



app = FastAPI()

app.

@app.get("/")
def main():
    return {"message": "Hello from fastapi"}