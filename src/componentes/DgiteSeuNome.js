import React, {useState} from 'react'
import {Text, TextInput} from 'react-native'



export default props=>{
    let [nome, setNome] = useState('complete seu nome: ')
    return (
      <>
        <Text>{nome}</Text>  
        <TextInput 
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={nome=> setNome(nome)}
       />
        
      </>
    );
}