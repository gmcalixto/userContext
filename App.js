import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


const ContextoMensagem = React.createContext()

//componente em primeiro nível para acesso do contexto
function MensagemComContexto(){
  return(
    <TextoComEstilo/>
  )
}

//contexto utilizado em segundo nível
class TextoComEstilo extends React.Component {
  
  static contextType = ContextoMensagem;
  
  render(){
    return <Text style={styles.paragraph}>{this.context}</Text>
  }
}


//passando dados com o uso de props
function MensagemComProps(props){
  return(
    <Text style={styles.paragraph}>
      {props.mensagem}
    </Text>
  )
}

//exeplo do uso de props e contexto através do Provider
class App extends React.Component {
  
  render(){
    return (
    <View style={styles.container}>

      <MensagemComProps mensagem='Minha mensagem'/>

      <ContextoMensagem.Provider value='Uso do contexto FIAP'>
        <MensagemComContexto/>
        <TextoComEstilo/>
      </ContextoMensagem.Provider>

    </View>
  );
  }
  
  
} export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
