from fastapi import FastAPI

app = FastAPI()

@app.get("/main/{mensaje}")
def main(mensaje: str, de):
    return {
        "message": mensaje
    }