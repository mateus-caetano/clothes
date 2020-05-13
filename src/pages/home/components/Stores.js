import React from "react";
import { ScrollView, Text, StyleSheet, Dimensions } from "react-native";
import { Surface } from 'react-native-paper'

const data = [ 
    {
        'id': 1,
        'store': 'loja 1',
    },

    {
        'id': 2,
        'store': 'loja 2'
    },

    {
        'id': 3,
        'store': 'loja 3'
    },

    {
        'id': 4,
        'store': 'loja 4'
    },

    {
        'id': 5,
        'store': 'loja 5'
    },

    {
        'id': 6,
        'store': 'loja 6'
    }
]

const width = Dimensions.get('window').width

export default function Stores() {
    return(
        <ScrollView
            style={{ marginVertical: 35, marginLeft: width * 0.1 }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {
                data.map(store => (
                    <Surface style={styles.store} key={store.id.toString()}>
                        <Text style={styles.storeTitle}>{store.store}</Text>
                    </Surface>
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    store: {
        width: 220,
        height: 145,
        backgroundColor: 'rgba(162, 123, 232, 0.5);',
        marginRight: 20,
        borderRadius: 10,
        justifyContent: 'center'
    },

    storeTitle: {
        textAlign:'center',
        color: '#fff',
        textTransform: 'capitalize',
        fontSize: 30,
        lineHeight: 35,
    }
})