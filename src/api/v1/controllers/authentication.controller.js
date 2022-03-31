const { errors, jwt } = require('../utils');
const { jwtSecrets, logger } = require('../../../config');

const users = [{
  id: '1',
  email: 'user@yopmail.com',
  password: 'Pass@123',
}];

const login = (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = users.find((el) => el.email === email);
    if (!user) throw new errors.BadInputError('No user found for that email!');
    if (user.password !== password) throw new errors.BadInputError('Wrong password!');
    res.json({
      token: jwt.sign({ id: user.id }, jwtSecrets.main),
    });
  } catch (error) {
    next(error);
  }
};

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const [err, decoded] = await jwt.verify(token, jwtSecrets.main);
    if (err) throw new errors.Unauthorized();
    req.user = decoded;
    next();
  } catch (error) {
    logger.info(error);
    next(error);
  }
};

module.exports = { login, isAuthenticated };
