import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Button = ({onPress, textButton, isDisable}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={isDisable}>
      <View
        style={[
          styles.viewButton,
          {backgroundColor: isDisable ? '#DDDDDD' : '#3CA6E2'},
        ]}>
        <Text style={[styles.textButton, {color: isDisable ? '#555' : '#FFF'}]}>
          {textButton}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  viewButton: {
    width: responsiveWidth(90),
    marginVertical: responsiveHeight(1.3),
    height: responsiveHeight(8),
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderBottomEndRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomStartRadius: 20,
  },
  textButton: {
    fontSize: responsiveFontSize(2.2),
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Button;
