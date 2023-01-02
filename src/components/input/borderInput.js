import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { windowHeight, windowWidth } from '../../../utils/dimensions';
import { grey, primary, primaryLight, red, secondaryLight, white } from '../../constants/colors';

const BorderInput = ({
    label,
    iconName,
    error,
    password,
    onFocus = () => { },
    ...props
}) => {
    const [hidePassword, setHidePassword] = React.useState(password);
    const [isFocused, setIsFocused] = React.useState(false);
    return (
        <View style={{ marginBottom: 20 }}>
            <Text style={style.label}>{label}</Text>
            <View
                style={[
                    style.inputContainer,
                    {
                         borderColor: error
                            ? red
                            : isFocused
                                ? primary
                                : grey,
                        alignItems: 'center',
                    },
                ]}>
                <Icon
                    name={iconName}
                    style={{ color: primary, fontSize: 22, marginRight: 10 }}
                />
                <TextInput
                    autoCorrect={false}
                    placeholderTextColor = {grey}
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={() => setIsFocused(false)}
                    secureTextEntry={hidePassword}
                    style={{ color: primaryLight, flex: 1 }}
                    {...props}
                />
                {password && (
                    <Icon
                        onPress={() => setHidePassword(!hidePassword)}
                        name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                        style={{ color: primaryLight, fontSize: 22 }}
                    />
                )}
            </View>
            {error && (
                <Text style={{ marginTop: 7, color: red, fontSize: 12 }}>
                    {error}
                </Text>
            )}
        </View>
    );
};

const style = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,
        color: primaryLight,
    },
    inputContainer: {
        height: windowHeight/12.5,
        width : windowWidth/1.13,
        backgroundColor: white,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.9,
        borderRadius : 2.9,

    },
});

export default BorderInput;