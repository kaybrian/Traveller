import { View, Text, SafeAreaView, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_PLACES_API_KEY } from '../api_keys';
import MenuContainer from '../Components/MenuContainer';
import { FontAwesome } from '@expo/vector-icons';
import ItemComtainer from '../Components/ItemComtainer';
import * as Progress from 'react-native-progress';
import { getPlacesData } from '../api';


const HOTELS = require('../assets/hotel.png')
const RESTAURANTS = require('../assets/restaurants.png')
const ATTRACTIONS = require('../assets/attraction.png')

const DiscoverScreen = () => {
    const [type, setType] = useState("restaurants")
    const [isLoading, setIsLoading] = useState(false)
    const [mainData, setMainData] = useState([])
    const [bl_lat, setBl_lat] = useState(null)
    const [bl_long, setBl_long] = useState(null)
    const [tr_lat, setTr_lat] = useState(null)
    const [tr_long, setTr_long] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        getPlacesData(bl_lat, bl_long, tr_lat, tr_long, type).then(data => {
            setMainData(data)
            setInterval(() => {
                setIsLoading(false)
            }, 2000)
        })
    }, [bl_lat, bl_long, tr_lat, tr_long, type])

    return (
        <>
            <SafeAreaView className="bg-white relative flex-1 mt-4">
                <View className="flex-row items-center justify-between px-8">
                    <View >
                        <Text className="text-[40px] font-bold text-[#00BCC9]">Discover</Text>
                        <Text className="text-[#527873] text-[36px]">the beauty today</Text>
                    </View>

                    <View className="w-12 h-12 shadow-lg bg-gray-400 rounded-full items-center justify-center">
                        <Image
                            source={require('../assets/avatar.png')}
                            resizeMode='contain'
                            className="w-full h-full rounded-md object-cover"
                        />
                    </View>
                </View>

                <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
                    <GooglePlacesAutocomplete
                        GooglePlacesDetailsQuery={{ fields: "geometry" }}
                        fetchDetails={true}
                        placeholder='Search for a destination'
                        enablePoweredByContainer={false}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            // console.log(data, details);
                            // console.log(JSON.stringify(details?.geometry?.viewport?.southwest?.lat));
                            setBl_lat(details?.geometry?.viewport?.southwest?.lat)
                            setBl_long(details?.geometry?.viewport?.southwest?.lng)
                            setTr_lat(details?.geometry?.viewport?.northeast?.lat)
                            setTr_long(details?.geometry?.viewport?.northeast?.lng)
                            // console.log(bl_lat, bl_long, tr_lat, tr_long)
                        }}
                        query={{
                            key: GOOGLE_PLACES_API_KEY,
                            language: 'en',
                        }}
                    />
                </View>

                {/* Menu container */}

                {
                    isLoading ?
                        (
                            <View className="flex-1 items-center justify-center">
                                <Progress.Circle color='#00BCC9' size={50} indeterminate={true} />
                            </View>
                        )
                        :
                        (
                            <View>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View className="flex-row items-center justify-between px-8 mt-8">
                                        <MenuContainer
                                            key={"hotels"}
                                            title={"Hotels"}
                                            image={HOTELS}
                                            type={type}
                                            setType={setType}
                                        />
                                        <MenuContainer
                                            key={"attractions"}
                                            title={"Attractions"}
                                            image={ATTRACTIONS}
                                            type={type}
                                            setType={setType}
                                        />
                                        <MenuContainer
                                            key={"restaurants"}
                                            title={"Restaurants"}
                                            image={RESTAURANTS}
                                            type={type}
                                            setType={setType}
                                        />
                                    </View>

                                    <View>
                                        <View className="flex-row items-center justify-between px-4 mt-8">
                                            <Text className="text-[#2C7379] text-[28px] font-bold" >Top Tips</Text>
                                            <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                                                <Text className="text-[#A0C4C7] text-[20px] font-bold">Explore</Text>
                                                <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
                                        {
                                            mainData?.length > 0 ? (
                                                <>
                                                    {
                                                        mainData?.map((data, index) => (
                                                            <ItemComtainer
                                                                key={index}
                                                                imageSrc={
                                                                    data?.photo?.images?.medium?.url ? data?.photo?.images?.medium?.url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHF6OdT6iHrD5q_vDMKyBGwUaMjC6wDL_6b9ALsblDg&s"
                                                                }
                                                                title={data?.name}
                                                                location={data?.location_string}
                                                                data={data}
                                                            />
                                                        ))
                                                    }

                                                </>

                                            ) :
                                                <View className="w-full h-[400px] items-center justify-center flex-1 space-y-8">
                                                    <Image
                                                        source={require('../assets/NotFound.png')}
                                                        resizeMode='contain'
                                                        className="w-32 h-32 rounded-md object-cover"
                                                    />
                                                    <Text className="text-2xl text-[#428288] font-semibold">Ooops ...... No data Found</Text>
                                                </View>
                                        }
                                    </View>

                                </ScrollView>
                            </View>

                        )
                }

            </SafeAreaView >

            <StatusBar />
        </>
    )
}

export default DiscoverScreen
