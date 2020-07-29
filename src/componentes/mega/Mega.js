import React , {Component} from 'react'
import {Text, TextInput, Button,View} from 'react-native'
import MegaNumero from './Numero'


export default class Mega extends Component {

    state= {
        qtdNumeros: this.props.qtdNumeros, 
        numeros: []
    }
    
    exibirNumeros = () =>{
      const nums = this.state.numeros
      return nums.map(num=>{
        return <MegaNumero key={num} num={num}/>
      })

    }


    alterarQtdNumero(qtd){
        this.setState({qtdNumeros: +qtd})
    }

    gerarNumerosContidos = nums => {
        const novo = parseInt(Math.random()*60)+1
        return nums.includes(novo) ? this.gerarNumerosContidos(nums):novo
    }

    gerarNumeros = ()=>{
        const numeros = Array(this.state.qtdNumeros)
          .fill()
          .reduce(n => [...n, this.gerarNumerosContidos(n)], [])
          .sort((a,b)=>a-b)
          this.setState({numeros});
    }


    
    render (){
            
        return (
          <>
            <Text
              style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>
              Gerador de Mega Sena
            </Text>
            <TextInput
              style={{borderBottomWidth: 1}}
              keyboardType={'numeric'}
              placeholder="quantidade de numeros"
              Value={`${this.state.qtdNumeros}`}
              onChangeText={(qtd) => this.alterarQtdNumero(qtd)}
            />
            <Button title="gerar" onPress={this.gerarNumeros} />

            <View
            style={{
              flexDirection:'row',
              flexWrap:"wrap",
              marginTop:25,
            
              justifyContent:'center',
              alignItems:'center'

            }}
            
            >{this.exibirNumeros()}</View>
          </>
        );
    }



}