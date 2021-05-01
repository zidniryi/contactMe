export const regex = {
  name: /^[a-zA-Z ]{3,90}$/,
  age: /^\d{0,2}$/,
  urlPhoto: /^((https?|ftp):)?\/\/.*(jpeg|jpg|png|gif|bmp)$/,
};

// export const validationForm = async (firstName, lastName, age, photo) => {
//   // Validation
//   regex.name.test(firstName) &&
//   firstName &&
//   regex.name.test(lastName) &&
//   lastName &&
//   regex.age.test(age) &&
//   age &&
//   regex.urlPhoto.test(photo) &&
//   photo
//     ? false
//     : true;
// };
