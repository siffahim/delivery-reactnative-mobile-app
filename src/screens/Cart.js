import { Entypo, EvilIcons, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Button from '../components/Button/Button'
import Text from '../components/Text/Text'
import { colors } from '../Theme/color'
import { spacings } from '../Theme/spacing'

export default function Cart() {

    const insets = useSafeAreaInsets();
    const navigate = useNavigation();

    return (
        <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
            <ScrollView>
                <View style={styles.imgContainer}>
                    <Image
                        source={require('../../assets/pic.jpg')}
                        resizeMode='contain'
                        style={{ width: 400, height: 300, marginTop: -20 }}
                    />
                    <Pressable
                        style={styles.backBtn}
                        onPress={() => navigate.goBack()}
                    >
                        <Entypo name="chevron-small-left" size={48} color="white" />
                    </Pressable>
                </View>
                <View style={styles.textContainer}>
                    <Text preset='h2' style={{ color: colors.blue, marginBottom: spacings[2] }}>Boston Lettuce</Text>

                    <View style={{ marginBottom: spacings[4] }}>
                        <Text preset='h2' style={{ color: colors.blue }}>1.10 $ / <Text preset='h3' style={{ color: colors.grey }}>price</Text></Text>

                        <Text preset='h3' style={{ color: colors.aqua }}> ~ 150 gr $ / <Text preset='h3' style={{ color: colors.grey }}>price</Text></Text>
                    </View>

                    <Text preset='h3' style={{ color: colors.blue, marginBottom: spacings[2] }}>Spain</Text>
                    <Text preset='small' style={{ color: colors.grey, marginBottom: spacings[7] }}>
                        Pallas he nepenthe whom ebony rapping metell name. Shall only stood decorum his flitting. But turning to crest lies the so such door said. Of nevermore plutonian its the of i terrors and shall. Adore core velvet dying and what a this surcease, stood methought sought more raven startled yore its, master silence fowl fiend bird, in the he evilprophet bust sorrowsorrow has hope thrilled i, all just i nights thy sad truly followed, nightly from was that and him was velvet fantastic doubtless.
                    </Text>

                    <View style={styles.btnHeartContiner}>
                        <View style={styles.heart}>
                            <EvilIcons name="heart" size={24} color="black" />
                        </View>
                        <Button
                            style={{ width: 240 }}
                        ><Ionicons name="ios-cart-outline" size={20} color="white" /> add to cart</Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'flex-start',
        paddingHorizontal: spacings[6],
        textAlign: 'center',
        borderRadius: 25,
        paddingTop: spacings[9],
        marginTop: -50
    },
    btnHeartContiner: {
        flexDirection: 'row'
    },
    heart: {
        borderWidth: 0.5,
        borderColor: colors.grey,
        padding: spacings[2],
        marginRight: spacings[3],
        borderRadius: 3
    },
    imgContainer: {
        position: 'relative'
    },
    backBtn: {
        position: 'absolute',
        top: 10,
        left: 0
    }
})