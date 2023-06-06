import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { windowHeight, windowWidth } from '../../../utils/dimensions';
import { grey, primary, primaryLight, red, secondaryLight, white } from '../../constants/colors';

const SelectableDropdown = ({
    label,
    iconName,
    error,
    password,
    onFocus = () => { },
    options = [],
    onChangeOptions = () => { },
    ...props
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleOptionPress = (option) => {
        const isSelected = selectedOptions.includes(option);
        let updatedOptions = [...selectedOptions];

        if (isSelected) {
            updatedOptions = updatedOptions.filter((item) => item !== option);
        } else {
            updatedOptions.push(option);
        }

        setSelectedOptions(updatedOptions);
        onChangeOptions(updatedOptions);
    };

    return (
        <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>{label}</Text>
            <View
                style={[
                    styles.inputContainer,
                    {
                        borderColor: error ? red : isFocused ? primary : grey,
                        alignItems: 'center',
                    },
                ]}>
                <Icon
                    name={iconName}
                    style={{ color: primary, fontSize: 22, marginRight: 10 }}
                />
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setShowModal(true)}
                    style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            editable={false}
                            value={selectedOptions.join(', ')} // Update value prop instead
                            placeholderTextColor={grey}
                            onFocus={() => {
                                onFocus();
                                setIsFocused(true);
                                setShowModal(true);
                            }}
                            onBlur={() => setIsFocused(false)}
                            style={{ color: primaryLight, flex: 1 }}
                            {...props}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            {error && (
                <Text style={{ marginTop: 7, color: red, fontSize: 12 }}>
                    {error}
                </Text>
            )}
            <Modal visible={showModal} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Options</Text>
                        <ScrollView>
                        <View style={styles.optionsContainer}>
                            {options.map((option) => (
                                <TouchableOpacity
                                    key={option}
                                    onPress={() => handleOptionPress(option)}
                                    style={[
                                        styles.option,
                                        selectedOptions.includes(option) && styles.selectedOption,
                                    ]}>
                                    <Text style={styles.optionText}>{option}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        </ScrollView>
                        <TouchableOpacity
                            onPress={() => setShowModal(false)}
                            style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,
        color: primaryLight,
    },
    inputContainer: {
        height: windowHeight / 12.5,
        width: windowWidth / 1.13,
        backgroundColor: white,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.9,
        borderRadius: 2.9,

    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8,
    },
    option: {
        backgroundColor: primaryLight,
        borderRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 12,
        margin: 4,
    },
    selectedOption: {
        backgroundColor: primary,
    },
    optionText: {
        color: white,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: white,
        borderRadius: 8,
        padding: 16,
        width: windowWidth * 0.8,
        maxHeight: windowHeight * 0.6,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: primaryLight,
    },
    closeButton: {
        backgroundColor: red,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignSelf: 'flex-end',
        marginTop: 16,
    },
    closeButtonText: {
        color: white,
        fontWeight: 'bold',
    },
});

export default SelectableDropdown;
