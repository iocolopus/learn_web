import json
from pathlib import Path

from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


DATA_FILE = Path(__file__).parent / "data.json"
DEFAULT_DATA = {"message": ""}


class MessagePayload(BaseModel):
    message: str


def read_data() -> dict:
    if not DATA_FILE.exists():
        write_data(DEFAULT_DATA)
        return DEFAULT_DATA

    with DATA_FILE.open("r", encoding="utf-8") as file:
        return json.load(file)


def write_data(data: dict) -> None:
    with DATA_FILE.open("w", encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=False, indent=2)


@app.get("/")
def main():
    return {"message": "API lista"}


@app.get("/message")
def get_message():
    return read_data()


@app.post("/message")
def save_message(payload: MessagePayload):
    clean_message = payload.message.strip()
    data = {"message": clean_message}
    write_data(data)
    return {"ok": True, "saved": data}