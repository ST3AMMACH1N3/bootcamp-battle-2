const bcrypt = require("bcrypt");

const saltRounds = 10;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      token: {
        type: DataTypes.STRING
      },
      valid_until: {
        type: DataTypes.DATE
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "user"
      },
      confirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      underscored: true
    }
  );

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.beforeSave(user => {
    if (!user.changed("password")) return;
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(saltRounds),
      null
    );
  });

  return User;
};
