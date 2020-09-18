import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

//importando arquivo com o contexto
import {userContext} from './components/userContext'
import Main from './components/Main'


class App extends React.Component {
  
  //state para uso do contexto
  constructor(props){
    super(props)

    this.state = {
      user: 'bla',
    }

    this.logout = this.logout.bind(this);
  }
  
  //executando quando se deseja encerrar a sessão
  logout(){
    this.setState({user: 'logout'})
  }


  //executado quando se deseja realizar o login
  login(){
    this.setState({user: 'logged'})
  }
  
  render(){
    
    const loginValue = {
      user: this.state.user,
      logoutUser: this.logout
    }
    
    return (

      <userContext.Provider value={loginValue}>
        <View style={styles.container}>
          <Button title='Login' onPress={() => this.login()}/>
          <Main/>
        </View>
      </userContext.Provider>

    
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
});
