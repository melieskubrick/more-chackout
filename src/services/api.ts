import axios from 'axios';

// const baseURL: string = Config.API_BASE_URL

export const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export const getAllCategories = async (): Promise<string[] | any> => {
  try {
    return await api.get('/products/categories');
  } catch (error: any) {
    if (error.response) {
      return error.response;
    }
    return error;
  }
};
