from fastapi import FastAPI

app = FastAPI()

@app.get("/api")
def hello_world():
    return {"message": "Hello World222"}

@app.get("/test")
def hello_world2():
    return {"message": "Hello dadadad"}