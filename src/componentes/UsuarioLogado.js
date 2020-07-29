import React from 'react'
import {Text} from 'react-native'
import If from './If'



export default ({usuario = {}})=>{

    return(
    <>
    <If test={true}>    
    <Text>
        Usuario logado: 
        {usuario.nome} - {usuario.email}
    </Text>
    </If>
 </>
    )
    
}