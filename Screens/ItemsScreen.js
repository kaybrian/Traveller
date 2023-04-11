import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5, FontAwesome, MaterialIcons } from '@expo/vector-icons'
const ItemsScreen = ({ route }) => {
    const navigation = useNavigation();

    const data = route?.params?.param;
    // console.log(data);

    return (
        <SafeAreaView className="flex-1 bg-white relative">
            <ScrollView className="flex-1 px-4 py-6">
                <View className="bg-white relative shadow-sm">
                    <Image

                        source={{
                            uri: data?.photo?.images?.large?.url ? data?.photo?.images?.large?.url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHF6OdT6iHrD5q_vDMKyBGwUaMjC6wDL_6b9ALsblDg&s",
                        }}
                        className="w-full h-72 object-cover rounded-lg"
                    />
                    <View className="absolute flex-row insert-x-2 top-5 items-center justify-between px-8">
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            className="w-10 h-10 rounded-md items-center justify-center bg-white">
                            <FontAwesome5 name="chevron-left" size={24} color="#0682BE" />
                        </TouchableOpacity>
                        <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#0682BE]">
                            <FontAwesome5 name="heartbeat" size={24} color="white" />

                        </TouchableOpacity>
                    </View>

                    <View className="absolute space-x-2 flex-row insert-x-2 bottom-5 items-center justify-between px-8">
                        <View className="flex-row space-x-2 items-center">
                            <Text className="text-[12px] font-bold text-gray-100">
                                {data?.price_level}
                            </Text>
                            <Text className="text-[18px] font-bold text-gray-100">
                                {data?.price}
                            </Text>
                        </View>

                        <View className="px-2 py-1 rounded-md bg-teal-500">
                            <Text className="text-white font-semibold">{data?.open_now_text}</Text>
                        </View>
                    </View>
                </View>

                {/* title section  */}
                <View className="mt-6">
                    <Text className="text-[#428288] text-[24px] font-bold">{data?.name}</Text>
                    <View className="flex-row items-center space-x-2 mt-2">
                        <FontAwesome name="map-marker" size={14} color="#8597A2" />
                        <Text className="text-[12px] font-bold text-[#428288]">
                            {data?.location_string}
                        </Text>
                    </View>
                </View>

                <View className="flex-row mb-4 items-center mt-2 justify-between">
                    {
                        data?.rating && (
                            <View className="flex-row space-x-2 items-center">
                                <View className="w-12 h-12 rounded-2xl bg-red-200 items-center justify-center shadow-md">
                                    <FontAwesome name="star" size={14} color="#D58574" />
                                </View>
                                <View>
                                    <Text className="text-[#515151]">{data?.rating}</Text>
                                    <Text className="text-[#515151]">Ratings</Text>
                                </View>
                            </View>
                        )
                    }

                    {/* pricing level  */}
                    {
                        data?.price_level && (
                            <View className="flex-row space-x-2 items-center">
                                <View className="w-12 h-12 rounded-2xl bg-red-200 items-center justify-center shadow-md">
                                    <MaterialIcons name="attach-money" size={14} color="#D58574" />
                                </View>
                                <View>
                                    <Text className="text-[#515151]">{data?.price_level}</Text>
                                    <Text className="text-[#515151]">Ratings</Text>
                                </View>
                            </View>
                        )
                    }

                    {/* bearing  */}
                    {
                        data?.bearing && (
                            <View className="flex-row space-x-2 items-center">
                                <View className="w-12 h-12 rounded-2xl bg-red-200 items-center justify-center shadow-md">
                                    <FontAwesome5 name="map-signs" size={14} color="#D58574" />
                                </View>
                                <View>
                                    <Text className="text-[#515151]">{data?.bearing}</Text>
                                </View>
                            </View>
                        )
                    }

                </View>

                {
                    data?.description && (
                        <View className="mt-6 mb-2">
                            <Text className="text-[#97A6AF] tracking-wide text-[16px] font-semibold">{data?.description}</Text>
                        </View>
                    )
                }

                {
                    data?.cuisine && (
                        <View className="mt-8 flex-row gap-2 items-center justify-start flex-wrap ">
                            {
                                data?.cuisine?.map((item) => (
                                    <TouchableOpacity key={item.key}
                                        className="px-2 py-1 rounded-md bg-emerald-400"
                                    >
                                        <Text className="text-white font-semibold">{item.name}</Text>

                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    )

                }


                <View className="mt-6 bg-gray-100 rounded-2xl px-4 py-2 space-y-3 p-5">
                    {
                        data?.phone && (
                            <View className="items-center flex-row space-x-2">
                                <FontAwesome name="phone" size={14} color="#8597A2" />
                                <Text className="text-[12px] font-bold text-[#8597A2]">{data?.phone}</Text>
                            </View>
                        )

                    }

                    {/* for the emails  */}
                    {
                        data?.email && (
                            <View className="items-center flex-row space-x-2">
                                <FontAwesome name="envelope" size={14} color="#8597A2" />
                                <Text className="text-[12px] font-bold text-[#8597A2]">{data?.email}</Text>
                            </View>
                        )

                    }

                    {/* adress */}
                    {
                        data?.address && (
                            <View className="items-center flex-row space-x-2">
                                <FontAwesome name="map-marker" size={14} color="#8597A2" />
                                <Text className="text-[12px] font-bold text-[#8597A2]">{data?.address}</Text>
                            </View>
                        )

                    }

                </View>


            </ScrollView>

        </SafeAreaView>

    )
}

export default ItemsScreen
