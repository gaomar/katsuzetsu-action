const axios = require('axios');
const querystring = require('querystring');
require('dotenv').config();

module.exports.getMondai = async function getMondai() {
  return new Promise(function (resolve, reject) {
    axios.get(process.env.SPREADSHEET_URL)
    .then(res => {
      resolve(res.data);
    }).catch(error => {
      reject(error.response);
    });
  });
};

module.exports.sendNotify = async function sendNotify(message) {  
  // LINEに渡すパラメータ
  const jsonData = querystring.stringify(
  {
    "message": message
  });

  return new Promise(function (resolve, reject) {
    axios.post(process.env.NOTIFY_URL, jsonData, {
      headers: {
        Authorization: `Bearer ${process.env.NOTIFY_TOKEN}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      resolve(true);
    }).catch(error => {
      reject(error.response);
    });
  });
};