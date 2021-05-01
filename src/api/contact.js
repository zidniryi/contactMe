import baseApi from '../services/services';

/**
 * Get contact api
 * @returns response
 *
 */
export const getContact = async () => {
  try {
    const response = await baseApi.get('contact');
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response);
  }
};

/**
 * Post contact api
 * @param {*fullName *lastName *age, *age} param0
 * @returns Promise
 */
export const postContact = async ({fullName, lastName, age, photo}) => {
  return base
    .post('contact', {
      fullName,
      lastName,
      age,
      photo,
    })
    .then(response => {
      return Promise.resolve(response.data);
    })
    .catch(error => {
      return Promise.reject(error);
    });
};
