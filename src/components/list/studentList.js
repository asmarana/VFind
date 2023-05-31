import React from 'react';
import { Modal, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { black, grey, secondary, whiteplus } from '../../constants/colors';

const ModalStudentList = ({ visible, closeModal, studentList }) => {
  return (
    <Modal
      visible={visible}
      transparent={true} 
      animationType="fade" 
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Registered Students</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeIcon}>&times;</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={studentList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Text style={styles.studentName}>{item.name}</Text>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    elevation: 5,
    backgroundColor: whiteplus,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor:whiteplus,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: black,
  },
  closeIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: secondary,
  },
  studentName: {
    paddingVertical: 10,
    color: black,
  },
});

export default ModalStudentList;