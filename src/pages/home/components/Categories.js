import React from 'react'
import { View, Text, StyleSheet } from "react-native";

export default function Categories() {
    return(
        <View style={styles.containerCategory}>
            <View style={styles.category}>
                <Text style={styles.categoryText}>Verão</Text>
            </View>

            <View style={styles.category}>
                <Text style={styles.categoryText}>Inverno</Text>
            </View>

            <View style={styles.category}>
                <Text style={styles.categoryText}>Sport</Text>
            </View>
            
            <View style={styles.category}>
                <Text style={styles.categoryText}>Social</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    containerCategory: {
        flexDirection: 'row',
        marginVertical: 35,
        justifyContent: 'center'
    },

    category: {
        backgroundColor: '#753CDD',
        width: 62,
        height: 62,
        marginHorizontal: 8,
        borderRadius: 4,
        justifyContent: 'center'
    },

    categoryText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 12,
        lineHeight: 14
    }
})