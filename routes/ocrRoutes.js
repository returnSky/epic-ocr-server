const express = require("express");
const _ = require("lodash");

const { BAIDU_API_PARAMS } = require("#root/configs/index.js");
const { fetchAccessToken } = require("#root/apis/baiduApis.js");

const router = express.Router();

router.post("/fetchToken", (req, res) => {
  const resp = fetchAccessToken({
    payload: {
      grant_type: BAIDU_API_PARAMS.grant_type,
      client_id: BAIDU_API_PARAMS.client_id,
      client_secret: BAIDU_API_PARAMS.client_secret,
    },
  });

  resp
    .then((respData) => {
      const { access_token = "" } = respData;
      if (req.session.isNew) {
        _.set(req.session, 'access_token', access_token);
      }
      
      res.json(respData);
    })
    .catch((error) => {
      console.error("API Error: ", JSON.stringify(error));
      res.json({
        success: false,
        error: JSON.stringify(error)
      });
    });
});

module.exports = router;
