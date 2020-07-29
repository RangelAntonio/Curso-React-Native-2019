import React from 'react'
import {View, StyleSheet} from 'react-native'
// import Primeiro from './componentes/primeiro'
// // import Botao from './componentes/Botao'
// // import MinMax from './componentes/MinMax'
// import Contador from './componentes/Contador'
// import Pai from './componentes/direta/Pai'
// import Pai from './componentes/indireta/Pai'
// import ParImpar from './componentes/ParImpar'
// import Familia from './componentes/relacao/Familia'
// import Membro from './componentes/relacao/Membro'
// import UsuarioLogado from './componentes/UsuarioLogado'
// import If from './componentes/If'
// import ListaProdutos from './componentes/proutos/ListaProdutos'
// import ListaProdutosV2 from './componentes/proutos/ListaProdutosV2'
// import Digite from './componentes/DgiteSeuNome'
// import Container from './componentes/flexbox/Container'
import Mega from './componentes/mega/Mega'




export default () =>{
    
return (
  <View style={styles.container}>
     <Mega qtdNumeros={10}/> 
    {/* <Container/> */}
    {/* <Digite/> */}
    {/* <ListaProdutosV2/>    */}
    {/* <UsuarioLogado  usuario = {{nome:' gui', email:'guiBicha@gmail'}}/> */}
    {/* <Primeiro/>
   	<MinMax/>
    <Botao/>    */}
    {/* <Contador inicial={100} passo={13}/> */}
    {/* <Pai/> */}
    {/* <ParImpar num={3} /> */}
    {/* <Familia>
        <Membro nome="Ulisses" sobrenome="Holanda" />
        <Membro nome="Carlos" sobrenome="Genivaldo" />
    </Familia>
    <Familia>
        <Membro nome="Jurandir" sobrenome="Regis" />
        <Membro nome="Evandro" sobrenome="Silva" />s
    </Familia> */}
  </View>
);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center', 
        margin:20,
        
    }
  

})


