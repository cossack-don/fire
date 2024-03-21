from fastapi import FastAPI

app = FastAPI()

@app.get("/api/v1/test")
def hello_world():
    return {"message": "Hello World222"}

@app.get("/api/v1/test2")
def hello_world2():
    return {"message": "Hello dadadad"}