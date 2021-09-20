import { TextInput, View, StyleSheet } from 'react-native'
import React, { forwardRef } from 'react'
import Cores from "../assets/cores.json";

const Input = forwardRef(({ placeholderTextColor, style, ...props }, ref) => {

    return (
        <View>
            <TextInput
                style={[inputStyles.input, style]}
                placeholderTextColor={placeholderTextColor ? placeholderTextColor : Cores.preto}
                keyboardType={props.keyboardType}
                ref={ref}
                {...props}
            />
        </View>
    )
})
const inputStyles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        marginBottom: 5,
        color: Cores.preto,
        
    },
})

export default Input

