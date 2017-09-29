module.exports = function(sequelize, DataTypes) {

    let Admin = sequelize.define("Admin", {

        // Determine employee admin access
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'Oops. Looks like this username has been taken. Please choose another one.',
                fields: [sequelize.fn('lower', sequelize.col('username'))]
            },
            validate: {
                max: {
                    args: 15,
                    msg: 'The username you entered is invalid or more than 20 characters.'
                }
            }
        },
        password: {
            type: DataTypes.STRING, // Maybe DATATYPE.BINARY
            allowNull: false,
            validate: {
                len: {
                    args: [8,100],
                    msq: 'The password you entered needs to be at least 8 characters.'
                }
            }
        }
    }); 

    return Admin;
};
    
        