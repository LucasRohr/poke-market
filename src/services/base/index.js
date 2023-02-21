import axios from "axios";

const httpClient = (resource) =>
  axios.create({
    timeout: 30000,
    headers: {
      "Content-type": "application/json",
    },
    baseURL: `${process.env.REACT_APP_API_URL}/v2/` + resource,
  });

export class BaseService {
  constructor(resource) {
    this.client = httpClient(resource);
  }

  async get(url, config) {
    const result = await this.client.get(url, config);
    return result.data;
  }

  async post(url, body, config) {
    const result = await this.client.post(url, body, config);
    return result.data;
  }

  async put(url, body, config) {
    const result = await this.client.put(url, body, config);
    return result.data;
  }
}
