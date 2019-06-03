module.exports = app => {

    const User = app.model.define('users', {
        id: {
            field: 'id',
            type: app.Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        created_at: {
            field: 'created_at',
            type: app.Sequelize.DATE,
            allowNull: false,
            defaultValue: app.Sequelize.NOW,
        },
        updated_at: {
            field: 'updated_at',
            type: app.Sequelize.DATE,
            allowNull: false,
            defaultValue: app.Sequelize.NOW,
        },
        available: {
            field: 'available',
            type: app.Sequelize.TINYINT(1),
            allowNull: false,
            defaultValue: 1,

        },
        username: {
            field: 'username',
            type: app.Sequelize.STRING(16),
            allowNull: false,
        },
        password: {
            field: 'password',
            type: app.Sequelize.STRING(32),
            allowNull: false,
        },
        email: {
            field: 'email',
            type: app.Sequelize.STRING(32),
            allowNull: false,
            defaultValue: '',
        },
        phone: {
            field: 'phone',
            type: app.Sequelize.STRING(16),
            allowNull: false,
            defaultValue: '',
        },
        gender: {
            field: 'gender',
            type: app.Sequelize.TINYINT(1),
            allowNull: false,
            defaultValue: 0,
        },
        privilege: {
            field: 'privilege',
            type: app.Sequelize.TINYINT(4),
            allowNull: false,
            defaultValue: 1,
        },
        nickname: {
            field: 'nickname',
            type: app.Sequelize.STRING(16),
            allowNull: false,
            defaultValue: '',
        }
    });

    return User;
};