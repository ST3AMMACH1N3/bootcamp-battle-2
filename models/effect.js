module.exports = (sequelize, DataTypes) => {
  const Effect = sequelize.define(
    "Effect",
    {
      hp: {
        type: DataTypes.INTEGER
      },
      mp: {
        type: DataTypes.INTEGER
      },
      attack: {
        type: DataTypes.INTEGER
      },
      defense: {
        type: DataTypes.INTEGER
      },
      affectSelf: {
        type: DataType.BOOLEAN
      },
      turns: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      underscored: true
    }
  );

  return Effect;
};
