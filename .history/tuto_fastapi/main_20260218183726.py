from fastapi import FastAPI

app = FastAPI()

@app.get("/main/{mensaje}")
def main(mensaje: str, devolver:bool|None = None):
    if devolver:
        saludo_api = "Comeme los huevos pedazo de hijo de la gran puta"

    return {
        "message": mensaje
        "saludo_api":saludo_api
    }