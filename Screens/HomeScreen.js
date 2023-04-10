import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import * as Animatable from 'react-native-animatable';


const HomeScreen = () => {
    const navigation = useNavigation();


    return (
        <>
            <SafeAreaView className="bg-white relative flex-1 mt-2">
                {/* first sections  */}
                <View className="flex-row px-6 mt-2 items-center space-x-2">
                    <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                        <Text className="text-[#00BCC9] text-3xl font-semibold">GO</Text>
                    </View>

                    <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
                </View>

                {/* second section of the app */}
                <View className="px-6 mt-5 space-y-1 mb-3">
                    <Text className="text-[#3C6072] text-[42px]">
                        Experience travel
                    </Text>
                    <Text className="text-[#00BCC9] font-bold text-[34px]">
                        like never before
                    </Text>
                    <Text className="text-[#3C6072] text-md">Ready for a journey of a lifetime? Our tour app has got you covered. Discover new horizons</Text>
                </View>

                {/* third section */}
                <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
                <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-24 -left-36"></View>

                {/* image container */}
                <View className="flex-1 relative items-center justify-center">
                    <Animatable.Image
                        animation="fadeIn"
                        easing="ease-in-out"
                        iterationCount={1}
                        source={require('../assets/hero.png')}
                        className="h-ful w-full -bottom-10"
                        resizeMode="contain"
                    />


                    {/* go buttons  */}
                    <TouchableOpacity onPress={() => navigation.navigate("Discover")} className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9]
                        rounded-full items-center justify-center">
                        <Animatable.View
                            animation="pulse"
                            easing="ease-in-out"
                            iterationCount={"infinite"}
                            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9] ">
                            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
                        </Animatable.View>
                    </TouchableOpacity>
                </View>



            </SafeAreaView>

            <StatusBar />
        </>
    )
}

export default HomeScreen
