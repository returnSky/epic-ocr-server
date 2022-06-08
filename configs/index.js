const BAIDU_API_PARAMS = {
  grant_type: process.env.BAIDU_API_PARAMS_GRANT_TYPE ?? "",
  client_id: process.env.BAIDU_API_PARAMS_CLIENT_ID ?? "",   //百度云应用的AK
  client_secret: process.env.BAIDU_API_PARAMS_CLIENT_SECRET ?? "", //百度云应用的SK
};

module.exports = {
  BAIDU_API_PARAMS,
};
