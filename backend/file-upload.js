const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const config = require('./s3-config');

aws.config.update({
  secretAccessKey: config.AWS_SECRET_KEY,
  accessKeyId: config.AWS_ACCESS_KEY,
  region: 'us-west-2',
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'food-cart-images',
    metadata: function (req, file, callback) {
      callback(null, { fieldName: 'Testing metadata' });
    },
    key: function (req, file, callback) {
      callback(null, Date.now().toString());
    },
  }),
});

module.exports = upload;
