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
                allowNull: true,
                validate: {
                    len: [1]
                }
            },
           
            price: { // TODO create price table? for different size/options for a dish
                type: DataTypes.INTEGER(255),
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
            },

            size: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    len: [1]
                }
            }

    }); 

    // Schedule.associate = function(models) {
    //     Schedule.belongsTo(models.Employees, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Dish;
};

    