import os
from fastapi import FastAPI
from pydantic import BaseModel
import boto3
import botocore

app = FastAPI()

class inputParameters(BaseModel):
    amplification_factor: int
    fl: float
    fh: float
    fs: float
    n_filter_tap: int
    filter_type: str

@app.post("/send/")
async def run_script(json_params: Parameter):
    command = (
        f"python3 main.py --config_file=configs/{json_params.exp_name}.conf --phase=run_temporal --vid_dir=data/vids{json_params.video} --out_dir=data/output/{json_params.video} --amplification_factor={json_params.ampFact} --fl={json_params.fl} --fh={json_params.fh} --fs={json_params.fs} --n_filter_tap={json_params.n_tap} --filter_type={json_params.filter_type}"
    )
    os.system(command)
    upload_file_to_s3(f"model/data/output/{object}_o3f_hmhm2_bg_qnoise_mix4_nl_n_t_ds3/{object}_fl0.04_fh0.4_fs30.0_n2_differenceOfIIR_259002.mp4",BUCKET_NAME,f"{object}_output.mp4")
    return {"link": f"https://d175wanlbunlv0.cloudfront.net/{object}_output.mp4"}

if __name__ == '__main__':
    print("Starting server...")
    os.system("uvicorn model.api:app --host 0.0.0.0 --port 8000")
