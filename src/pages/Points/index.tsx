import React from 'react'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import MapView from 'react-native-maps'
import { SvgUri } from 'react-native-svg'
import styles from './styles'

const Points = () => {

    const navigation = useNavigation()

    function navigateBack() {
        navigation.goBack()
    }

    return (
        <>
        <View style={styles.container}>
            <TouchableOpacity onPress={navigateBack}>
                <Feather name="arrow-left" size={20} color="#34cb79"/>
            </TouchableOpacity>

            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.description}>Selecione no mapa um ponto de coleta</Text>

            <View style={styles.mapContainer}>
                <MapView style={styles.map} />


            </View>
        </View>

        <View style={styles.itemsContainer}>
            <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 20}}
            >
                <TouchableOpacity style={styles.item} onPress={() => {}}>
                    <SvgUri width={42} height={42} uri="http://192.168.0.105:3333/uploads/lampadas.svg"/>
                    <Text style={styles.itemTitle}>Lâmpadas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => {}}>
                    <SvgUri width={42} height={42} uri="http://192.168.0.105:3333/uploads/lampadas.svg"/>
                    <Text style={styles.itemTitle}>Lâmpadas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => {}}>
                    <SvgUri width={42} height={42} uri="http://192.168.0.105:3333/uploads/lampadas.svg"/>
                    <Text style={styles.itemTitle}>Lâmpadas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => {}}>
                    <SvgUri width={42} height={42} uri="http://192.168.0.105:3333/uploads/lampadas.svg"/>
                    <Text style={styles.itemTitle}>Lâmpadas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => {}}>
                    <SvgUri width={42} height={42} uri="http://192.168.0.105:3333/uploads/lampadas.svg"/>
                    <Text style={styles.itemTitle}>Lâmpadas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => {}}>
                    <SvgUri width={42} height={42} uri="http://192.168.0.105:3333/uploads/lampadas.svg"/>
                    <Text style={styles.itemTitle}>Lâmpadas</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
        </>
    )
}

export default Points