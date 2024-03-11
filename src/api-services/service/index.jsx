import axios from "axios";
import { api_configs } from "..";
import toast from "react-hot-toast";

export const apiRouterCall = async ({
  method,
  url,
  bodyData,
  paramsData,
  token,
}) => {
  try {
    return await axios({
      method: method,
      url: url,
      headers: {
        token: token ? token : window.localStorage.getItem("user_token"),
      },
      data: bodyData ? bodyData : null,
      params: paramsData ? paramsData : null,
    });
  } catch (error) {
    console.log(error?.response?.data);
    return error?.response;
  }
};

export const postDataHandler = async (endPoint, data) => {
  try {
    const res = await axios({
      method: "POST",
      url: api_configs[endPoint],
      data: data,
      headers: {
        token: window.localStorage.getItem("user_token"),
      },
    });

    if (res.data.responseCode === 200) {
      // toast.success(res.data.responseMessage);
      return res.data;
    } else {
      // toast.error(res.data.responseMessage);
      return res;
    }
  } catch (error) {
    if (error.response) {
      return error.response;
    } else {
      return error;
    }
  }
};
export const patchDataHandler = async (endPoint, data) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: api_configs[endPoint],
      data: data,
      headers: {
        token: window.localStorage.getItem("user_token"),
      },
    });

    if (res.data.responseCode === 200) {
      toast.success(res.data.responseMessage);
      return res.data;
    } else {
      // toast.error(res.data.responseMessage);
      return res;
    }
  } catch (error) {
    if (error.response) {
      return error.response;
    } else {
      return error;
    }
  }
};
export const getAPIHandler = async (endPoint) => {
  try {
    const res = await axios({
      method: "GET",
      url: api_configs[endPoint],

      headers: {
        token: window.localStorage.getItem("user_token"),
      },
    });

    if (res.data.responseCode === 200) {
      // toast.success(res.data.responseMessage);
      return res;
    } else {
      // toast.error(res.data.responseMessage);
      return res;
    }
  } catch (error) {
    if (error.response) {
      return error.response;
    } else {
      return error;
    }
  }
};

export const putAPIHandler = async (endPoint, data) => {
  try {
    const res = await axios({
      method: "PUT",
      url: api_configs[endPoint],
      data: data,
      headers: {
        token: window.localStorage.getItem("user_token"),
      },
    });

    if (res.data.responseCode === 200) {
      toast.success(res.data.responseMessage);
      return res.data;
    } else {
      // toast.error(res.data.responseMessage);
      return res;
    }
  } catch (error) {
    if (error.response) {
      return error.response;
    } else {
      return error;
    }
  }
};

export const getAPIHandlerInParams = async (endPoint, id) => {
  try {
    const res = await axios({
      method: "GET",
      url: api_configs[endPoint],

      headers: {
        token: window.localStorage.getItem("user_token"),
      },
      params: id,
    });

    if (res.data.responseCode === 200) {
      // toast.success(res.data.responseMessage);
      return res;
    } else {
      // toast.error(res.data.responseMessage);
      return res;
    }
  } catch (error) {
    if (error.response) {
      return error.response;
    } else {
      return error;
    }
  }
};
