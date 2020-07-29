import React from 'react'
import {Text, StyleSheet, View, _Text} from 'react-native'

export default ({num =0})=>{
    
        return(
            <View>
                <Text>O resultado é</Text>
             {num %2 ===0 
                    ? <Text style={style.text}>Par</Text>
                   :<Text style={style.text}>impar</Text>
                }
        
            
            </View>
        )
        
    
}




const style = StyleSheet.create({
text:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'

}

})