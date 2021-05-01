import baseApi from '../services/services';

/**
 *
 * @returns response
 * Get contact api
 */
export const getContact = async () => {
  try {
    const response = await baseApi.get('contact');
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response);
  }
};
