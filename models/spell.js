module.exports = (sequelize, DataTypes) => {
  const Spell = sequelize.define(
    "Spell",
    {
      name: {
        type: DataTypes.STRING
      },
      mp: {
        type: DataTypes.INTEGER
      }
    },
    {
      underscored: true
    }
  );

  Spell.associate = models => {
    models.Spell.hasMany(models.Effect);
  };

  return Spell;
};
