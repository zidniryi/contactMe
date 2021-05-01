import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Title = ({title}) => {
  return (
    <View>
      <Text style={styles.textTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    color: '#555',
    marginLeft: responsiveWidth(5.33),
    marginTop: responsiveHeight(2.33),
  },
});

export default Title;
