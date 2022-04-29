// Create and Save a new Tutorial
exports.gastro = (req, res) => {
  res.sendFile(process.cwd() + '/app/public/index.html');
};
exports.market = (req, res) => {
  res.sendFile(process.cwd() + '/app/public/market.html');
};
exports.thanks = (req, res) => {
  res.sendFile(process.cwd() + '/app/public/thanks.html');
};
exports.error = (req, res) => {
  res.sendFile(process.cwd() + '/app/public/error.html');
};
exports.reception = (req, res) => {
  res.sendFile(process.cwd() + '/app/public/recep.html');
};

