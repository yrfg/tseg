import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    sequelize: {
      dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
      database: 'database',
      host: 'host',
      port: 3306,
      username: 'username',
      password: 'password',
      define: {
        freezeTableName: true,
        underscored: true,
        timestamps: false,
      },
    },
  };
  return config;
};
