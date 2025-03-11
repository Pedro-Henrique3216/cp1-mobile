import { Text, View } from "react-native";

export default function Result({nome, valorOriginal, novoValor, aumento, porcentagem}){
    return (
        <View>
            <Text>Nome do produto: {nome}</Text>
            <Text>Valor Original do produto: {valorOriginal}R$</Text>
            <Text>Novo valor do Produto: {novoValor}R$</Text>
            <Text>Quantidade do aumento do produto: {aumento}R$</Text>
            <Text>Porcentagem que foi aumentada o produto: {porcentagem}%</Text>
        </View>
    )
}