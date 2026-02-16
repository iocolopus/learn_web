from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Enfado(BaseModel):
    fecha: str | None
    lugar: str | None
    tipo: str
    motivo: str | None
    intensidad: int | None
    motivo_sn: bool
    insistir: bool
    pesimista: bool
    perdon: bool
    disculpa: str | None
    galleta: str | None

@app.post("/enfado")
async def recibir_enfado(datos: Enfado):

    with open("enfados.txt", "a", encoding="utf-8") as f:
        f.write("----- NUEVO ENFADO -----\n")
        f.write(f"Fecha: {datos.fecha}\n")
        f.write(f"Lugar: {datos.lugar}\n")
        f.write(f"Tipo: {datos.tipo}\n")
        f.write(f"Motivo: {datos.motivo}\n")
        f.write(f"Intensidad: {datos.intensidad}\n")
        f.write(f"Motivo proporcionado: {datos.motivo_sn}\n")
        f.write(f"Insistir: {datos.insistir}\n")
        f.write(f"Pesimista: {datos.pesimista}\n")
        f.write(f"Perdón: {datos.perdon}\n")
        f.write(f"Disculpa: {datos.disculpa}\n")
        f.write(f"Galleta: {datos.galleta}\n\n")

    return {"mensaje": "Enfado registrado correctamente"}

