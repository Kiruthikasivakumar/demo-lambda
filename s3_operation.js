import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({ region: "us-east-1" });

export const handler = async (event) => {
    const bucketName = 'cruddemo';
    const keyName = 'data/example2.json';
    
    const jsonObject = {
        name: 'Alice Chaplin',
        age: 25,
        occupation: 'Data Scientist',
    };

    const params = {
        Bucket: bucketName,
        Key: keyName,
        // Body: JSON.stringify(jsonObject),
        // ContentType: 'application/json',
    };

    try {


        const { Body } = await s3.send(new GetObjectCommand(params));
        const result = JSON.parse(await Body.transformToString());
        console.log("Retreive successful:", result);
        
        // const result = await s3.send(new PutObjectCommand(params));
        // console.log("Upload successful:", result);

        // const result = await s3.send(new DeleteObjectCommand(params));
        // console.log("Object deleted:", result);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'File uploaded/deleted successfully',
                data: result,
            }),
          //   body: JSON.stringify({
          //     message: 'File read successfully',
          //     data: JSON.parse(data),  
          // }),
        };
    } catch (err) {
        console.error("Error uploading to S3:", err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Error uploading file',
                error: err.message,
            }),
        };
    }
};

// const streamToString = (stream) => {
//   return new Promise((resolve, reject) => {
//       const chunks = [];
//       stream.on('data', chunk => chunks.push(chunk));
//       stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
//       stream.on('error', reject);
//   });
// };
