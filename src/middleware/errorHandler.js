const notFoundAPI = (req, res, next) => {
  res.status(404).json({ message: "not Found" });
};

module.exports = {notFoundAPI}