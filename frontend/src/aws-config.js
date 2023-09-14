import AWS from 'aws-sdk';

const accessKey = process.env.REACT_APP_ACCESS_KEY;
const secretKey = process.env.REACT_APP_SECRET_ACCESS_KEY;
AWS.config.update({
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
    region:  'ap-south-1'
  });

const s3 = new AWS.S3();

export default s3;