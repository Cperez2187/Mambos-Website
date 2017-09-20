module.exports = function(sequelize, DataTypes) {

    let Menu = sequelize.define("Menu", {

            menuItem: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    len: [1]
                }
            },

            itemDescription: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    len: [1]
                }
            },
            
            itemPrice: {
                type: DataTypes.INTEGER(255),
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

    