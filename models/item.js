module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    "Item",
    {
      name: {
        type: DataTypes.STRING
      },
      cost: {
        type: DataTypes.INTEGER
      },
      equippable: {
        type: DataTypes.BOOLEAN
      },
      usable: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      underscored: true
    }
  );

  Item.associate = models => {
    models.Item.hasMany(models.Effect);
  };

  return Item;
};
