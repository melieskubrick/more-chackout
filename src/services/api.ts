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

export const getProductsPerCategory = async (
  category: string,
): Promise<object[] | any> => {
  try {
    return await api.get(`/products/category/${category}`);
  } catch (error: any) {
    if (error.response) {
      return error.response;
    }
    return error;
  }
};

export const getAllProducts = async (
  category: string,
  limit?: number,
): Promise<object[] | any> => {
  try {
    return await api.get(`/products?limit=${limit}`);
  } catch (error: any) {
    if (error.response) {
      return error.response;
    }
    return error;
  }
};
