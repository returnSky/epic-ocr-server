const request = require("#root/utils/request.js");
const qs = require('qs');

const BAIDU_API_ROOT = "https://aip.baidubce.com";

const fetchAccessToken = ({ method = "post", payload, config }) => {
  const queryParams = qs.stringify(payload);
  return request({
    url: `${BAIDU_API_ROOT}/oauth/2.0/token?${queryParams}`,
    method,
    config: { ...config },
  });
};

module.exports = { fetchAccessToken };
