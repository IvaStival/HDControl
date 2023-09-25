import axios from "axios";

class AxiosHelper {
  constructor(url) {
    this.baseUrl = url;
    axios.defaults.withCredentials = true;
  }

  get(url, data, config) {
    return axios.get(this.baseUrl + url, data, config);
  }

  post(url, data, config) {
    return axios.post(this.baseUrl + url, data, { withCredentials: true });
  }

  put(url, data, config) {
    return axios.put(this.baseUrl + url, data, config);
  }

  _delete(url, data, config) {
    return axios.delete(this.baseUrl + url, data, config);
  }

  patch(url, data, config) {
    return axios.patch(this.baseUrl + url, data, config);
  }

  options(url, data, config) {
    return axios.options(this.baseUrl + url, data, config);
  }
}

export default AxiosHelper;
