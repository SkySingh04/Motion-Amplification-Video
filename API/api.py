from fastapi import FastAPI
from fastapi.responses import FileResponse
from pydantic import BaseModel
import os

app = FastAPI()

class Parameter(BaseModel):
    exp_name: str
    video: str
    ampFact: float
    fl: float
    fh: float
    fs: float
    n_tap: int
    filter_type: str

@app.post("/send/")
async def run_script(json_params: Parameter):
    command = (
        f"python3 main.py --config_file=configs/{json_params.exp_name}.conf --phase=run_temporal --vid_dir=data/vids{json_params.video} --out_dir=data/output/{json_params.video} --amplification_factor={json_params.ampFact} --fl={json_params.fl} --fh={json_params.fh} --fs={json_params.fs} --n_filter_tap={json_params.n_tap} --filter_type={json_params.filter_type}"
    )
    os.system(command)
    return {"message": "success"}

@app.get("/download/")
async def download_file(exp_name: str):
    return FileResponse(f"data/vids/{exp_name}.mp4", media_type="video/mp4")

if __name__ == '__main__':
    print("Starting server...")
    os.system("uvicorn api:app --host 0.0.0.0 --port 8000")
