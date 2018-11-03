const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'newsportal.cw3ffsqtf0hz.eu-west-1.rds.amazonaws.com',
    user: 'news_portal',
    password: 'transform',
    database: 'news_portal'
  });
}
