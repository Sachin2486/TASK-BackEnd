const axios = require("axios");
axios.interceptors.request.use(
    function (config) {
        config.metadata = { startTime: new Date() };
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    function (response) {
        response.config.metadata.endTime = new Date();
        response.duration =
            (response.config.metadata.endTime - response.config.metadata.startTime) /
            1000;
        return response;
    },
    function (error) {
        error.config.metadata.endTime = new Date();
        error.duration =
            (error.config.metadata.endTime - error.config.metadata.startTime) / 1000;
        return Promise.reject(error);
    }
);

