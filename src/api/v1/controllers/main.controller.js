const home = (req, res, next) => {
  try {
    res.status(200).send('Hello there!');
  } catch (error) {
    next(error);
  }
};

module.exports = { home };
