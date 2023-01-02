import React from 'react'
import { View, Text ,TextInput} from 'react-native'
import { primary, secondary } from '../../constants/colors';

const Input = ({label,placeholderText,value,onChangeText}) => {
  return (
    <View style={{ paddingHorizontal: 20,marginVertical:10 }}>
                <Text style={{ fontSize: 16, color: '#383838', fontWeight: '600', marginBottom: 8 }}>
                    {label}
                </Text>
                <TextInput style={{
                    width: 320,
                    height: 54,
                    borderRadius: 4,
                    padding: 10,
                    fontSize:16,
                    backgroundColor: '#f5f5f5',
                    color:'black',
                    lineHeight: 14,
                    textAlign: 'left',
                    paddingLeft: 15,
                    borderColor: primary,
                    shadowColor: secondary,
                    shadowOffset: { width: 3, height: 3 },
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    fontFamily: 'Inter-Regular',
                    backgroundColor: `${secondary}10`,
                    color: secondary,
                }}
            
                    placeholder={placeholderText}
                    placeholderTextColor={'#c4c4c4'}
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>

  )
}

export default Input