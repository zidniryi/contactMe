import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/Feather';

const HeaderApp = ({onAdd, onBack, title, isBack, isAdd}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.viewHeader}>
      {isBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#FFF" />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <View>
        <Text style={styles.textContact}> {title} </Text>
      </View>
      {isAdd ? (
        <TouchableOpacity onPress={onAdd}>
          <Icon name="plus-circle" size={30} color="#FFF" />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewHeader: {
    flexDirection: 'row',
    width: responsiveWidth(100),
    height: responsiveHeight(8.4),
    backgroundColor: '#3CA6E2',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(2.33),
  },
  textContact: {
    color: '#FFF',
    fontSize: responsiveFontSize(2.33),
    textTransform: 'uppercase',
    fontWeight: '700',
  },
});
export default HeaderApp;
