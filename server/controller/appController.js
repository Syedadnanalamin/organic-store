
const getServerStatus = (req, res) => {
  res.status(200).send("server is running");
};

module.exports = {
  getServerStatus,
};
