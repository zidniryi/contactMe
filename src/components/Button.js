import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Button = ({onPress, textButton}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.viewButton}>
        <Text style={styles.textButton}>{textButton}</Text>
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
    backgroundColor: '#3CA6E2',
    borderRadius: 10,
    justifyContent: 'center',
  },
  textButton: {
    fontSize: responsiveFontSize(2.2),
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Button;
