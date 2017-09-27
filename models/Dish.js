module.exports = function(sequelize, DataTypes) {

    let Dish = sequelize.define("Dish", {

            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },

            description: {
                type: DataTypes.STRING,
                allowNull: true
            },
           
            price: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            }, 

            category: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            }

    }); 

    return Dish;
};

    