import React from 'react'
import {Text, StyleSheet} from 'react-native'
import Membro from './Membro'



export default props=>{
    
    return(
    <>  
    <Text style={styles.bold}>Membros da familia</Text> 
   {props.children}
    </>
    )
}

const styles = StyleSheet.create({
    bold:{
        fontSize:16,
        fontWeight:'bold', 
        paddingTop:10

    }
})