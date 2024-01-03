import aws from "aws-sdk";

const region = "";
const accessKeyId = "";
const secretAccessKey = "";
const signatureVersion = "v4";

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion,
});

const generateSignedUrl = () => {};
