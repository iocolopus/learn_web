from fastapi import FastAPI
from fastapi.middleware import cors

app = FastAPI()
app.middleware(
    cors.CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/save")
def save(notes: list[str]):
    with open