module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    email: {
      type: Sequelize.STRING
    },
  });

  return Tutorial;
};
