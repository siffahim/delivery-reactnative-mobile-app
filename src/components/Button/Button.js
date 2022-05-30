import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { colors } from '../../Theme/color'
import { spacings } from '../../Theme/spacing'
import Text from '../Text/Text'

export default function Button({ children, navigate, style }) {
    const navigation = useNavigation()

    const onPressLink = (link) => {
        navigation.navigate(link)
    }

    return (
        <Pressable
            onPress={() => onPressLink(navigate)}
            style={[styles.btn, style]}>
            <Text preset='h3' style={{ color: colors.white, textAlign: 'center', textTransform: 'uppercase' }}>{children}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        textAlign: 'center',
        backgroundColor: colors.aqua,
        paddingHorizontal: spacings[6],
        paddingVertical: spacings[2],
        borderRadius: 3,
        textTransform: 'uppercase'
    }
})