const axios = require('axios');
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