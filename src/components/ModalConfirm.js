import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Modal from 'react-native-modal';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

// import { Container } from './styles';

const ModalConfirm = ({onCancel, onDelete, isVisible}) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalShadow}>
        <View style={styles.modalContent}>
          <Image
            source={require('assets/delete.png')}
            style={styles.imageModal}
            resizeMode="contain"
          />
          <Text style={styles.textTitle}>Peringatan!</Text>
          <Text>Apakah ingin menghapus data?</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={onDelete}>
              <View style={[styles.buttonModal, {backgroundColor: '#c0392b'}]}>
                <Text style={styles.textButton}>HAPUS</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCancel}>
              <View style={[styles.buttonModal, {backgroundColor: '#3CA6E2'}]}>
                <Text style={styles.textButton}>BATAL</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalShadow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: responsiveHeight(50.08),
    width: responsiveWidth(65.13),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  imageModal: {
    width: 124,
    height: 90,
    alignSelf: 'center',
    marginLeft: responsiveWidth(1.12),
    marginBottom: responsiveHeight(2.33),
  },

  textTitle: {
    fontSize: responsiveFontSize(1.8),
    color: '#555555',
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonModal: {
    width: responsiveWidth(27),
    height: responsiveHeight(7),
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: responsiveWidth(2),
    marginTop: responsiveHeight(8.33),
  },
  textButton: {
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default ModalConfirm;
