import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const TextInputApp = ({placeholder, onChangeText, value, keyboardType}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      keyboardType={keyboardType}
      style={styles.textInputStyle}
    />
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    width: responsiveWidth(90),
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 5,
    paddingLeft: responsiveWidth(2.33),
    fontSize: responsiveFontSize(2),
    borderColor: '#DDD',
    marginVertical: responsiveHeight(3.3),
  },
});

export default TextInputApp;
