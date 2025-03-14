import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

export default function Result({nome, valorOriginal, novoValor, aumento, porcentagem}){
    return (
        <View style={Style.model}>
            <Text style={Style.texto}>Nome do produto: {nome}</Text>
            <Text style={Style.texto}>Valor Original do produto: {valorOriginal}R$</Text>
            <Text style={Style.texto}>Novo valor do Produto: {novoValor}R$</Text>
            <Text style={Style.texto}>Quantidade do aumento do produto: {aumento}R$</Text>
            <Text style={Style.texto}>Porcentagem que foi aumentada o produto: {porcentagem}%</Text>
        </View>
    )
}

const Style = StyleSheet.create({
    model: {
        backgroundColor: 'green',
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    texto: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
})