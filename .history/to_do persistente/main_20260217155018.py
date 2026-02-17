from fastapi import FastAPI
from fastapi.middleware import cors

app = FastAPI()
app.middleware(
    cors.CORSMiddleware,
    

)

@app.get("/save")
def save(notes: list[str]):
    with open("persistance.txt", "w", encoding="UTF-8") as file:
        file.writelines(notes)