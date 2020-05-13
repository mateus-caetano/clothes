import React from 'react'
import { ScrollView, View, Dimensions, StyleSheet } from 'react-native'
import { Title } from 'react-native-paper'

import Header from "./components/Header";
import Categories from "./components/Categories";
import Stores from "./components/Stores";
import ClothesList from './components/ClothesList'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Home() {

    return (
        <ScrollView>
            <Header />
            <View key='body'>
                <Categories />

                <Title style={styles.title}>Lojas melhores avaliadas</Title>

                <Stores />

                <Title style={styles.title}>Roupas</Title>
                <ClothesList />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        marginLeft: width * 0.1
    }
})