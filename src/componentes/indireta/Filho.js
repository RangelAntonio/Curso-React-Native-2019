import React from 'react'
import { Button } from 'react-native'




export default props=>{
    function gerarNumero(max, min) {
        const fator = max-min
        return parseInt(Math.random()*fator) + min
    }


    return(
   <Button
        title="executar"
        onPress ={
         ()=>{ 
         const n = gerarNumero(props.min, props.max)
         props.funcao(n)
         }
        }
   
   />
    )
}