import React from 'react'
import {Text} from 'react-native'
import produtos from './Produtos'


export default props=>{
        function obterLista (){
            return produtos.map((p, ) => {
              return (
                <Text key={p.id}>{p.id}{p.nome} item tem o valor de: {p.preco}
                </Text>
              );
            });
        }

    return (
      <>
        <Text>Lista de produtos</Text>
        {obterLista()}
      </>
    );
}