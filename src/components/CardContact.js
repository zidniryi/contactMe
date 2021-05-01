import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/Feather';

export const CardContact = ({avatar, name, onClick, onDelete, onUpdate}) => {
  return (
    <View style={styles.viewCard}>
      <TouchableOpacity onPress={onClick}>
        <View>
          <Image source={avatar} style={styles.imageAvatar} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClick}>
        <View>
          <Text style={styles.textName}>{name}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.viewFlex}>
        <TouchableOpacity activeOpacity={0.5} onClick={onUpdate}>
          <View style={[styles.buttonCircle, {backgroundColor: '#2ecc71'}]}>
            <Icon name="edit" size={25} color="#FFF" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onClick={onDelete}>
          <View
            style={[
              styles.buttonCircle,
              {backgroundColor: '#c0392b', marginRight: responsiveWidth(3.3)},
            ]}>
            <Icon name="trash" size={25} color="#FFF" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  viewCard: {
    width: responsiveWidth(100),
    height: responsiveHeight(15),
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageAvatar: {
    width: 60,
    height: 60,
    marginLeft: responsiveWidth(5.33),
    borderRadius: 30,
  },
  textName: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    color: '#555555',
    marginLeft: responsiveWidth(-11.33),
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    marginHorizontal: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  viewFlex: {
    flexDirection: 'row',
  },
});
