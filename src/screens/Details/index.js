import React from 'react'
import {View, Text, Image} from 'react-native'
import styles from './style';
import { useRoute } from '@react-navigation/native';

export default function Details(){

  const routes = useRoute();
    return (
            <View style={styles.container}>
          <Image style={styles.images} source ={require(`../../Img/${routes.params.imagem}`)}/> 
          <Text style={styles.title}> {routes.params.titulo} </Text>
            </View> 
    
        )


}