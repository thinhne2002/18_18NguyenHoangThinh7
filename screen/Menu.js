import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable } from 'react-native';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function Menu() {
    const [img, setimg] = useState(0);
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
        <Text style={{marginTop:47,marginBottom:45,marginLeft:15,width:255,height:29,textAlign: 'center', color: '#E94141', fontSize: 25, fontFamily: 'Ubuntu', fontWeight: '700', wordWrap: 'break-word'}}>
            The world’s Best Bike</Text>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <Pressable>
            <Text style={{paddingTop:3,borderRadius:5,border: '1px rgba(233, 65, 65, 0.53) solid',width: 99, height: 32, background: 'white',textAlign: 'center', color: '#BEB6B6', fontSize: 20, fontFamily: 'Voltaire', fontWeight: '400', wordWrap: 'break-word'}}>
                All</Text>
        </Pressable>
        <Pressable>
            <Text style={{paddingTop:3,borderRadius:5,border: '1px rgba(233, 65, 65, 0.53) solid',width: 99, height: 32, background: 'white',textAlign: 'center', color: '#BEB6B6', fontSize: 20, fontFamily: 'Voltaire', fontWeight: '400', wordWrap: 'break-word'}}>
                Roadbike</Text>
        </Pressable>
        <Pressable>
            <Text style={{paddingTop:3,borderRadius:5,border: '1px rgba(233, 65, 65, 0.53) solid',width: 99, height: 32, background: 'white',textAlign: 'center', color: '#BEB6B6', fontSize: 20, fontFamily: 'Voltaire', fontWeight: '400', wordWrap: 'break-word'}}>
                Mountain</Text>
        </Pressable>
        </View>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            {data.map((item, index) => (
            <Pressable onPress={() => nav.navigate('Detail',
                { img: item.url, name: item.name, price: item.price }
            )}>
            <View style={{ marginTop: 5, marginLeft: 5, width: 167, height: 200, backgroundColor: 'rgba(247, 186, 131, 0.15)', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <Image source={require('../assets/heart.png')} style={{width:25,height:25}}/>
                <Image style={{ width: 108, height: 124, resizeMode: 'contain' }} source={item.url} />
                <Text>{item.name}</Text>
                <Text><Text style={{ color: 'orange' }}>$</Text> {item.price}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}