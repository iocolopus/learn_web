from fastapi import FastAPI
from fastapi.middleware import cors

app = FastAPI()
app.add_middleware(
    cors.CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def test():
    return {"message" : "Hola Mundo"}


@app.post("/save")
def save(notes: list[str]):
    with open("persistance.txt", "w", encoding="UTF-8") as file:
        file.writelines(notes)

def load():
    with open("persistance.txt", "r", encoding="UTF-8") as file:
        return 

load()