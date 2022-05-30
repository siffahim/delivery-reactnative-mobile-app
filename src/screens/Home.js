import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Button from '../components/Button/Button'
import Text from '../components/Text/Text'
import { colors } from '../Theme/color'
import { spacings } from '../Theme/spacing'

export default function Home({ navigation }) {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
            <View style={styles.logo}>
                <Text preset='h1' style={{ color: colors.violet }}>D</Text>
            </View>
            <View style={styles.textContainer}>
                <View style={{ marginBottom: spacings[7] }}>
                    <AntDesign name="CodeSandbox" size={40} color={colors.blue} />
                </View>
                <Text preset='h1' style={{ color: colors.blue, padding: spacings[4], textAlign: 'center' }}>Non-Contact Deliveries</Text>
                <Text preset='small' style={{ color: colors.grey, textAlign: 'center', marginBottom: spacings[7] }}>
                    The purpose for a piece of writing identifies the reason you write a particular document. Basically, the purpose of a piece of writing answers the question “Why?” For example.
                </Text>
                <Button
                    navigate='Cart'
                    style={{ width: 300 }}
                >
                    order now</Button>

                <Text preset='h3' style={{ color: colors.grey, marginTop: spacings[6] }}>DISMISS</Text>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.violet
    },
    logo: {
        width: 50,
        height: 50,
        backgroundColor: colors.green,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: spacings[8],
        marginLeft: spacings[5],
    },
    textContainer: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: spacings[6],
        textAlign: 'center',
        marginTop: 140,
        borderRadius: 25
    }
})