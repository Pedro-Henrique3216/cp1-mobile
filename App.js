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
      <div style={styles.campos}>
        <Text>Nome do Produto</Text>
        <TextInput
            value={name}
            style={styles.input}
            placeholder="Digite seu nome"
            onChangeText={name => setName(name)}
            autoCapitalize='words'
            maxLength={30}
            inputMode='text'
          />
      </div>
      <div style={styles.campos}>
        <Text>Valor original do produto</Text>
        <TextInput 
          style={styles.input}
          placeholder='Digite o Valor original do produto'
          value={valor}
          onChangeText= {valor => setValor(valor)}
          inputMode='numeric'
        />
      </div>
      <div style={styles.campos}>
        <Text>Porcentagem</Text>
        <TextInput
            style={styles.input}
            value={porcentagem}
            placeholder="Digite a porcentagem"
            onChangeText={porcentagem => setPorcentagem(porcentagem)}
            inputMode='numeric'
          />
      </div>
      
        <Button 
          style={styles.button}
          title='Click'
          onPress={
          () => {
            calculo = CalcularAumento(valor, porcentagem)
            setNovoValor(calculo)
            setClick(true)
            if(name === ""){
              setErro(true)
              setCampo("Campo nome invalido")
            }
            if(valor === 0){
              setErro(true)
              setCampo("Campo valor invalido")
            }
            if(porcentagem === 0){
              setErro(true)
              setCampo("Campo porcentagem invalido")
            }
            
          }
          }
        />
        
        {click & error === false ? 
        <Result 
          nome={name} 
          valorOriginal={Number(valor) * 1} 
          novoValor={novoValor} 
          aumento={novoValor - valor} 
          porcentagem={porcentagem}
          /> : <Text style={styles.error}>{campo}</Text>
        }

      <Button 
        styles={styles.button}
        title='Limpar'
        onPress={ () => {

          limpar()
          setErro(false)
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
  },
  error: {
      color: "red",
      fontWeight: "bold",
      fontSize: "20px"
  },
  campos:  {
    display: "flex",
    gap: "10px",
    margin: "10px"
  },
  input: {
    justifyContent: "center",
    alignItems: "stretch",
    borderWidth: "1px",
    borderColor: "black",
    paddingLeft: "10px"
  },
  button: {
    marginBottom: "10px"
  }
});
