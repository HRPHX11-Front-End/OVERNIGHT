const app = require('./app');

const port = process.env.PORT || 3005;

module.exports = () => {
  app.listen(port, () => { console.log(`server started on port ${port}`); });
};
