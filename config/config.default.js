'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1';

  // add your config here
  config.middleware = [];
  config.security ={
      csrf: {
          headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
      },
  };
  config.mongoose = {
      url: 'mongodb://127.0.0.1/blog',
      options: {}
  };

  return config;
};
