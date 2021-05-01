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
export const postContact = async ({firstName, lastName, age, photo}) => {
  return baseApi
    .post('contact', {
      firstName,
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

/**
 * Post contact api
 * @param {*fullName *lastName *age, *age} param0
 * @returns Promise
 */
export const deleteContact = async id => {
  return baseApi
    .delete(`contact/${id}`, {})
    .then(response => {
      return Promise.resolve(response.data);
    })
    .catch(error => {
      return Promise.reject(error);
    });
};
