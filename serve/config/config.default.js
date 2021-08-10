/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = appInfo => {
  const config = exports = {
    keys : appInfo.name + '_1624759965405_5154',
    sequelize : {
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      database: 'project.node.fx',
      password:'123456'
    },
    middleware : []
  };


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
