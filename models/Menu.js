module.exports = function(sequelize, DataTypes) {

    let Menu = sequelize.define("Menu", {

            name: {
                type: DataTypes.STRING,
                allowNull: true,
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
                allowNull: true,
                validate: {
                    len: [1]
                }
            }, 

            category: {
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

    return Menu;
};

    