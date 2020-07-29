import React, {useState} from 'react'
import {Text} from 'react-native'
import Filho from './Filho'



export default props=>{
    const [num, setNum] = useState(0)

    function exibirValor(numero) {
     setNum(numero);
        
    }
    
    return(
    <>
    <Text>{num}</Text>
    <Filho
        max={6}
        min={60}
        funcao={exibirValor}
    
    />
    </>
    )
}