import React from 'react'
import {Text, FlatList} from 'react-native'
import produtos from './Produtos'


export default props=>{

    return (
      <>
        <Text>Lista de produtos v2</Text>
        <FlatList
            data={produtos}
            keyExtractor={i=> `${i.id}`}
            renderItem={({item: p})=>{
                return(
                <Text>{p.id}) {p.name} custa apenas: {p.preco}</Text>
                )
            }}
        
        />

        
      </>
    );
}