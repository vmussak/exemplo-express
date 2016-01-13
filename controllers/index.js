module.exports = () => {
  
  var controller = {
    index: (req, res) => {
      res.status(200).json({status: 'API Ok!'});
    }
  };
  
  return controller;
};