import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const MenuContainer = ({ title, image, type, setType }) => {
    return (
        <TouchableOpacity
            className="items-center justify-center space-y-2"
            onPress={() => setType(title.toLowerCase())}
        >
            <View
                className={`w-24 h-24 shadow-sm items-center justify-center rounded-full ${type === title.toLowerCase() ? "bg-gray-200 p-2" : ""}`}
            >
                <Image
                    source={image}
                    className="w-full h-full rounded-md object-cover"
                />
            </View>
            <Text className="text-[#00BCC9] text-sm font-semibold">{title}</Text>
        </TouchableOpacity>
    )
}

export default MenuContainer
