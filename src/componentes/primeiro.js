import React from 'react'
import {Text, StyleSheet} from 'react-native'

export default () =>{

    return(
    
            <Text style = {styles.text}>
                Primeiro Componente
            </Text>
        

    )


}
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'arial',
        letterSpacing:2

    }

})