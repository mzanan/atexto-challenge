import AWS from 'aws-sdk';
import fs from 'fs';

const s3 = new AWS.S3({
    accessKeyId: 'AKIAJRBDPG2RH4FJRLRA',
    secretAccessKey: '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'
});

export const uploadFile = ({name, fileName}, callback) => {
    fs.readFile(fileName, (err, data) => {
        if (err) throw err;

        const params = {
            Bucket: 'atexto-challenge', // pass your bucket name
            Key: name, // file will be saved as testBucket/contacts.csv
            Body: data,
            GrantFullControl: 'public'
        };
    
        return s3.upload(params, callback);
     });
}