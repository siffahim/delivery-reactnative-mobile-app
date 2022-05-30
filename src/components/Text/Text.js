import React from 'react'
import { StyleSheet, Text as RnText, View } from 'react-native'
import { presets } from './text.preset'

export default function Text({ children, preset = 'default', style }) {
    const textStyle = StyleSheet.compose(presets[preset], style)
    return (
        <View>
            <RnText style={textStyle}>{children}</RnText>
        </View>
    )
}