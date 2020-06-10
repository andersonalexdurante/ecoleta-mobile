import React from 'react'
import { View, TouchableOpacity, Text, ScrollView, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps'
import { SvgUri } from 'react-native-svg'
import styles from './styles'

const Points = () => {

    const navigation = useNavigation()

    function navigateBack() {
        navigation.goBack()
    }

    function handleNavigateToDetail() {
        navigation.navigate('Detail')
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
                <MapView
                style={styles.map} 
                initialRegion={{
                    latitude: -25.6955322, 
                    longitude: -48.473738, 
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.014
                }}>
                    <Marker 
                    onPress={handleNavigateToDetail}
                    style={styles.mapMarker}
                    coordinate={{
                        latitude: -25.6955322, 
                        longitude: -48.473738, 
                    }}
                    >
                        <View style={styles.mapMarkerContainer}>
                            <Image style={styles.mapMarkerImage} source={{uri: "https://images.unsplash.com/photo-1488928741225-2aaf732c96cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"}}/>
                            <Text style={styles.mapMarkerTitle}>IFPR</Text>
                        </View>
                    </Marker>

                </MapView>


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