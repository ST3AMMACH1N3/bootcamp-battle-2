module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define(
    "Character",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 1
      },
      hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 10
      },
      mp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 10
      },
      attack: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 5
      },
      defense: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 5
      }
    },
    {
      underscored: true
    }
  );

  Character.associate = models => {
    models.Character.belongsTo(models.User);
    models.Character.hasMany(models.Item, { through: "Inventory" });
    models.Character.hasMany(models.Spell, { through: "Spellbook" });
  };

  return Character;
};
