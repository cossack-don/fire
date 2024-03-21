from fastapi import FastAPI

app = FastAPI()

@app.get("/api/test/")
def hello_world():
    return {"message": "Hello World222"}

@app.get("/api/test2/")
def hello_world2():
    return {"message": "Hello dadadad"}

