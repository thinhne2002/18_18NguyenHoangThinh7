import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Pressable, StyleSheet, Text, View, Image} from 'react-native';

export default function Home() {
    const nav = useNavigation();
return (
    
    <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={{paddingTop:10,textAlign:'center',width:351,height:87,color: 'black', fontSize: 26, fontFamily: 'VT323', fontWeight: '400', wordWrap: 'break-word'}}>
            A premium online store for sporter and their stylish choice
        </Text>
        <Text style={{textAlign:'center',width:359,height:388,borderRadius:50,marginTop:11,backgroundColor:'pink'}}>
            <Image source={require('../assets/Home.png')} style={{marginTop:60,width:292,height:270,resizeMode:'contain'}}/>
        </Text>
        <Text style={{marginTop:21,width:351,height:61,textAlign:'center',color: 'black', fontSize: 26, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
            POWER BIKE <br/>SHOP
        </Text>
        <Pressable onPress={() => nav.navigate('Menu')} style={{marginTop:10,width:340,height:61,backgroundColor:'#E94141',borderRadius:30,justifyContent:'center',alignItems:'center'}}>
            <Text style={{textAlign: 'center', color: '#FEFEFE', fontSize: 27, fontFamily: 'VT323', fontWeight: '400', wordWrap: 'break-word'}}>
                Get Started
            </Text>
        </Pressable>
    </View>
    
  );
}
