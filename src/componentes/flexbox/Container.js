import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import Quadrado from './quadrado'



export default props=>{

    return (
      <View style={style.flexV1}>
        
        <Quadrado cor="#03A9F4" />
        <Quadrado cor="#9C27B0" />
        <Quadrado cor="#BDBDBD" />
        <Quadrado cor="#212121" />
        <Quadrado cor="#FFC107" />
      </View>
    );
}

const style = StyleSheet.create({

        flexV1:{
            flexDirection:"row",
            justifyContent:"space-evenly",
            alignItems:"center", 
            height:350,
            width:'100%',
            backgroundColor:'#000'

         
        }



})