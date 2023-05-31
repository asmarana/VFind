import React, { useContext, useState } from 'react';
import { Text, Modal, View, StyleSheet } from 'react-native';
import { MessageContext } from './messageContext';

const PopupNotification = () => {
  const { message } = useContext(MessageContext);
  const [modalVisible, setModalVisible] = useState(!!message);

  // Close the modal when the user dismisses it
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      animationType="fade"
      transparent
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.messageText}>{JSON.stringify(message)}</Text>
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
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  messageText: {
    color: 'black',
  },
});

export default PopupNotification;