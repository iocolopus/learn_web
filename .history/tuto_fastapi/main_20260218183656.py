from fastapi import FastAPI

app = FastAPI()

@app.get("/main/{mensaje}")
def main(mensaje: str, devolver:bool|None = None):
    if devolver:
        saludo_de_vuelta =

    return {
        "message": mensaje
    }