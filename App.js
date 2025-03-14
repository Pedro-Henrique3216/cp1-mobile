import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import CalcularAumento from './components/CalcularAumento';
import Result from './components/Result';


export default function App() {

  const [name, setName] = useState("")
  const [valor, setValor] = useState(0)
  const [porcentagem, setPorcentagem] = useState(0)
  const [novoValor, setNovoValor] = useState(0)
  const [click, setClick] = useState(false)
  const [error, setErro] = useState(false)
  const [campo, setCampo] = useState("")


  const limpar = () => {
    setName("")
    setValor(0)
    setPorcentagem(0)
    setNovoValor(0)
    setClick(false)
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/images.png')} 
        style={styles.image}
      />
      <View style={styles.campos}>
        <Text>Nome do Produto</Text>
        <TextInput
            value={name}
            style={styles.input}
            placeholder="Digite seu nome"
            onChangeText={name => setName(name)}
            autoCapitalize='words'
            maxLength={30}
            keyboardType='text'
          />
      </View>
      <View style={styles.campos}>
        <Text>Valor original do produto</Text>
        <TextInput 
          style={styles.input}
          placeholder='Digite o Valor original do produto'
          value={valor}
          onChangeText= {valor => setValor(valor)}
          keyboardType='numeric'
        />
      </View>
      <View style={styles.campos}>
        <Text>Porcentagem</Text>
        <TextInput
            style={styles.input}
            value={porcentagem}
            placeholder="Digite a porcentagem"
            onChangeText={porcentagem => setPorcentagem(porcentagem)}
            keyboardType='numeric'
          />
      </View>
      
        <Button 
          title='Click'
          onPress={
          () => {
            setErro(false)
            calculo = CalcularAumento(valor, porcentagem)
            setNovoValor(calculo)
            setClick(true)
            if(porcentagem == 0){
              setErro(true)
              setCampo("Campo porcentagem invalido")
            }
            if(valor == 0){
              setErro(true)
              setCampo("Campo valor invalido")
            }
            if(name == ""){
              setErro(true)
              setCampo("Campo nome invalido")
            }
            
          }
          }
        />
        {click && error === false ? 
        <Result 
          nome={name} 
          valorOriginal={Number(valor) * 1} 
          novoValor={novoValor} 
          aumento={novoValor - valor} 
          porcentagem={porcentagem}
          /> : <Text style={styles.error}>{campo}</Text>
        }

      <Button 
        title='Limpar'
        onPress={ () => {
          limpar()
          setErro(false)
          setCampo("")
        }
        }
      />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue'
  },
  error: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20
},
campos:  {
  display: "flex",
  flexDirection: "row",
  gap: 10,
  margin: 10,
  alignItems: "center",
  textTransform: "uppercase",
  fontWeight: "bold",
},
input: {
  justifyContent: "center",
  alignItems: "stretch",
  borderColor: "black",
  borderWidth: 1,
  width: 200,
  backgroundColor: "white", 
},

});
