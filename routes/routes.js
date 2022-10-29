const router = require('express').Router();
const { createUserValidation, loginUserValidation } = require('../middlewares/validations');
const { createUser, loginUser } = require('../controllers/users');
const auth = require('../middlewares/auth');
const userRouter = require('./users');
const movieRouter = require('./movies');
const NotFoundError = require('../errors/NotFoundError');
const { pageNotFound } = require('../utils/constants');

router.post('/signup', createUserValidation, createUser);

router.post('/signin', loginUserValidation, loginUser);

router.use(auth);

router.use('/users', userRouter);

router.use('/movies', movieRouter);

router.all('*', (_req, _res, next) => {
  next(new NotFoundError(pageNotFound));
});
