import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, CheckBox, TouchableOpacity } from 'react-native';

import tw from "tailwind-react-native-classnames";

export default function Report({ navigation }) {
    // const navigation = useNavigation()
    return (   
        
        <View style={tw`flex h-full justify-start items-center bg-purple-200`}>
            <View style={tw`flex w-full justify-start items-start ml-16`}>
                <Button onPress={() => navigation.goBack('Menu')} title="< ย้อนกลับ" />
            </View>
            <Text style={tw`font-semibold text-2xl mt-6`}>รายงาน</Text>

            <View style={tw`flex h-3/4 w-full justify-evenly items-center`}>
                <TouchableOpacity style={tw`h-12 w-1/3 bg-white rounded-md items-center justify-center border-2 border-gray-500`}>
                    <Text style={tw`text-lg text-black font-bold`}>สรุปนัดหมาย</Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`h-12 w-1/3 bg-white rounded-md items-center justify-center border-2 border-gray-500`}>
                    <Text style={tw`text-lg text-black font-bold`}>สรุปการให้บริการ</Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`h-12 w-1/3 bg-white rounded-md items-center justify-center border-2 border-gray-500`}>
                    <Text style={tw`text-lg text-black font-bold`}>รายละเอียดคนไข้</Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`h-12 w-1/3 bg-white rounded-md items-center justify-center border-2 border-gray-500`}>
                    <Text style={tw`text-lg text-black font-bold`}>สรุปรายปี</Text>
                </TouchableOpacity>
            </View>
        </View>

  
    );
}
