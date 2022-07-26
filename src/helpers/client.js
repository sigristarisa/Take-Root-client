import axios from "axios";

const host = "http://localhost:4000";

const client = {
  post: (path, data) => {
    const url = `${host}${path}`;
    return axios.post(url, data);
  },
};

export default client;
