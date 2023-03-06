import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './Logo'
import tw from 'twrnc'

export default function Header() {
  return (
    <View style={tw`flex-row justify-between items-center mb-4`}>
      <Logo />
      <View style={tw`flex-row items-center gap-5 justify-center`}>
        <Image 
            style={{
                width: 23,
                height: 23
            }}
            source={require("../assets/notification-bell.png")}
        />
        <Image 
            style={{
                width: 24,
                height: 24
            }}
            source={require("../assets/user.png")}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})