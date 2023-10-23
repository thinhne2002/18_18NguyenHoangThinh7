import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function Detail() {
    const nav = useNavigation();
    const route = useRoute();
    const data = [
      {
        id:0,
        name:'Pinarello',
        price:1800,
        type:'MountainBike',
        url:require('../assets/1.png')
      },
      {
        id:1,
        name:'Pina Mountai',
        price:1700,
        type:'MountainBike',
        url:require('../assets/2.png')
      },
      {
        id:2,
        name:'Pina Bike',
        price:1500,
        type:'RoadBike',
        url:require('../assets/3.png')
      },
      {
        id:3,
        name:'Pinarello',
        price:1900,
        type:'Roadbike',
        url:require('../assets/4.png')
      },
      {
        id:4,
        name:'Pinarello',
        price:2700,
        type:'Roadbike',
        url:require('../assets/5.png')
      },
      {
        id:5,
        name:'Pinarello',
        price:1350,
        type:'MountainBike',
        url:require('../assets/6.png')
      },
  ]
  return (
    <View>
      <View style={{marginTop:10,marginLeft:15,width:359,height:388,backgroundColor:'rgba(232.77, 65.42, 65.42, 0.10)', borderRadius: 10}}>
        <Image source={route.params?.img == null ? data[img].url : route.params?.img} style={{width:297,height:340,resizeMode:'contain',marginTop:36,marginLeft:29}}/>
      </View>
      <Text style={{marginLeft:15,marginTop:18,width:187,height:44, color: 'black', fontSize: 31, fontFamily: 'Voltaire', fontWeight: '400', wordWrap: 'break-word'}}>
      {route?.params?.name}
      </Text>
      <View style={{marginLeft:15,width:350,height:31,flexDirection:'row'}}>
        <Text style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0.59)', fontSize: 25, fontFamily: 'Voltaire', fontWeight: '400', wordWrap: 'break-word'}}>15% OFF {route?.params?.price}:</Text>
        <Text style={{marginLeft:15,textAlign: 'center', color: 'black', fontSize: 25, fontFamily: 'Voltaire', fontWeight: '600', textDecoration: 'line-through', wordWrap: 'break-word',textDecorationLine:'line-through'}}>{route?.params?.price}</Text>
        <Text style={{marginLeft:15,textAlign: 'center', color: 'black', fontSize: 25, fontFamily: 'Voltaire', fontWeight: '600', wordWrap: 'break-word'}}>~</Text>
        <Text style={{marginLeft:15,textAlign: 'center', color: 'black', fontSize: 25, fontFamily: 'Voltaire', fontWeight: '600', wordWrap: 'break-word'}}>{route?.params?.price*(0.85)} $</Text>
      </View>
      <Text style={{marginLeft:14,marginTop:25,width:117,height:31,textAlign: 'center', color: 'black', fontSize: 25, fontFamily: 'Voltaire', fontWeight: '400', wordWrap: 'break-word'}}>
        Description 
      </Text>
      <Text style={{marginTop:31,marginLeft:14,width:335,height:104,color: 'rgba(0, 0, 0, 0.57)', fontSize: 22, fontFamily: 'Voltaire', fontWeight: '400', wordWrap: 'break-word'}}>
      It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.
      </Text>
      <View style={{marginTop:46,marginLeft:19,flexDirection:'row',width:360,height:54}}>
        <Image source={require('../assets/heart.png')} style={{marginTop:10,width:35,height:35}}/>
        <Pressable>
        <Text style={{marginLeft:31,paddingTop:12,width: 269, height: 54, background: '#E94141', borderRadius: 30,textAlign: 'center', color: '#FFFAFA', fontSize: 25, fontFamily: 'Voltaire', fontWeight: '400', wordWrap: 'break-word'}}>
            Add to card</Text>
        </Pressable>
      </View>
    </View>
  );
}