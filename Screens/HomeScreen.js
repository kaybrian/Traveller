import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'



const HomeScreen = () => {
    return (
        <SafeAreaView className="bg-white relative flex-1 mt-4">
            {/* first sections  */}
            <View className="flex-row px-6 mt-14 items-center space-x-2">
                <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                    <Text className="text-[#00BCC9] text-3xl font-semibold">GO</Text>
                </View>

                <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
            </View>

            {/* second section of the app */}
            <View className="px-6 mt-8 space-y-1">
                <Text className="text-[#3C6072] text-[42px]">
                    Experience travel
                </Text>
                <Text className="text-[#00BCC9] font-bold text-[34px]">
                    like never before.
                </Text>
                <Text className="text-[#3C6072] text-md">Ready for a journey of a lifetime? Our tour app has got you covered. Discover new horizons</Text>
            </View>

            {/* third section */}
            <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
            <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-24 -left-36"></View>

            {/* image container */}
            <View className="flex-1 relative items-center justify-center">
                <Image
                    source={require('../assets/hero.png')}
                    className="h-100 w-full"
                    resizeMode="contain"
                />
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen
