import { View, Text, SafeAreaView, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_PLACES_API_KEY } from '../api_keys';
import MenuContainer from '../Components/MenuContainer';
import { FontAwesome } from '@expo/vector-icons';


const HOTELS = require('../assets/hotel.png')
const RESTAURANTS = require('../assets/restaurants.png')
const ATTRACTIONS = require('../assets/attraction.png')

const DiscoverScreen = () => {
    const [type, setType] = useState("restaurants")

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
                            console.log(data, details);
                            console.log(JSON.stringify(details?.geometry?.viewport));
                            console.warn(JSON.stringify(details?.geometry?.viewport));
                        }}
                        query={{
                            key: GOOGLE_PLACES_API_KEY,
                            language: 'en',
                        }}
                    />
                </View>

                {/* Menu container */}
                <View>
                    <ScrollView>
                        <View className="flex-row items-center justify-between px-8 mt-8">
                            <MenuContainer
                                key={"hotel"}
                                title={"Hotel"}
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

                        </View>


                    </ScrollView>

                </View>

            </SafeAreaView>

            <StatusBar />
        </>
    )
}

export default DiscoverScreen
