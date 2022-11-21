require('dotenv').config();

module.exports.corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

const { MONGO_URL = 'mongodb://localhost:27017/moviesdb' } = process.env;
module.exports = { PORT: 3001, MONGO_URL };

module.exports.secretKey = 'dev-secret';
