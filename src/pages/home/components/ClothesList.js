import React from 'react'
import {
    Dimensions,
    StyleSheet,
    View
} from 'react-native'
import { Title, Subheading, Text } from 'react-native-paper'
import { SvgXml } from 'react-native-svg'

const data = [
    {
        'id': 1,
        'title': 'Roupa',
        'brand': 'Moda 10',
        'image': ClotheIcon,
        'size' : 'G',
        'price': 'R$ 62,90'
    },

    {
        'id': 2,
        'title': 'Roupa',
        'brand': 'Moda 10',
        'image': ClotheIcon,
        'size' : 'G',
        'price': 'R$ 62,90'
    },

    {
        'id': 3,
        'title': 'Roupa',
        'brand': 'Moda 10',
        'image': ClotheIcon,
        'size' : 'G',
        'price': 'R$ 62,90'
    },

    {
        'id': 4,
        'title': 'Roupa',
        'brand': 'Moda 10',
        'image': ClotheIcon,
        'size' : 'G',
        'price': 'R$ 62,90'
    },

    {
        'id': 5,
        'title': 'Roupa',
        'brand': 'Moda 10',
        'image': ClotheIcon,
        'size' : 'G',
        'price': 'R$ 62,90'
    },

    {
        'id': 6,
        'title': 'Roupa',
        'brand': 'Moda 10',
        'image': ClotheIcon,
        'size' : 'G',
        'price': 'R$ 62,90'
    },

    {
        'id': 7,
        'title': 'Roupa',
        'brand': 'Moda 10',
        'image': ClotheIcon,
        'size' : 'G',
        'price': 'R$ 62,90'
    },
]

const width = Dimensions.get('window').width

const clotheIcon = `
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="50" height="52.1158" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0" transform="scale(0.00222717)"/>
</pattern>
<image id="image0" width="449" height="468" xlink:href="data:image/jpeg;base64,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"/>
</defs>
</svg>
`

const clotheSizeIcon = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="20" rx="5" fill="#753CDD"/>
</svg>
`

const ClotheIcon = () => <SvgXml xml={clotheIcon} />

const ClotheSizeIcon = () => <SvgXml xml={clotheSizeIcon} />

export default function ClothesList() {
    return(
        <View style={styles.clothesListContainer}>
            {
                data.map(clothe => (
                    <View style={styles.clhotheItem} key={clothe.id}>
                        <View style={styles.clotheAssets}>
                            <ClotheIcon />
                            {/* <ClotheSizeIcon /> */}
                            <View style={styles.sizeContainer}>
                                <Text style={styles.sizeText}>{clothe.size}</Text>
                            </View>
                        </View>
                        <View>
                            <Title style={styles.title}>{clothe.title}</Title>
                            <Subheading style={styles.brand}>{clothe.brand}</Subheading>
                            <Subheading style={styles.price}>{clothe.price}</Subheading>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    clothesListContainer: {
        alignItems: 'center',
        marginVertical: 30
    },

    clhotheItem: {
        flexDirection: 'row',
        width: width * 0.8,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 15,
        alignItems: 'center'
    },

    clotheAssets: {
        marginHorizontal: 15
    },

    title: {
        fontSize: 18,
        lineHeight: 21
    },

    brand: {
        fontSize: 15,
        lineHeight: 18
    },

    price: {
        color: '#248F24',
        fontSize: 15,
        lineHeight: 18,
        marginTop: 18
    },

    sizeContainer: {
        backgroundColor: '#753CDD',
        width: 20,
        height: 20,
        borderRadius: 5,
        marginTop: 5
    },

    sizeText: {
        textAlign: 'center',
        color: '#fff'
    }
})