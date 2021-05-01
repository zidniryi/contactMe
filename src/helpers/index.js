export const regex = {
  name: /^[a-zA-Z ]{3,90}$/,
  age: /^\d{0,3}$/,
  urlPhoto: /^((https?|ftp):)?\/\/.*(jpeg|jpg|png|gif|bmp)$/,
};

export const validationForm = (firstName, lastName, age, photo) => {
  // Validation
  const validationForm =
    regex.name.test(firstName) &&
    firstName &&
    regex.name.test(lastName) &&
    lastName &&
    regex.name.test(age) &&
    age &&
    regex.urlPhoto.test(photo) &&
    photo
      ? false
      : true;
};
