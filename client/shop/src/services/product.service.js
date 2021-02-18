import axios from 'axios';

const API_URL = 'http://localhost:8080/api/product/';

class ProductService {
    get() {
        return axios.get(API_URL + '');
    }
    create() {
      return axios.post(API_URL + 'add');
  }
}

export default new ProductService();