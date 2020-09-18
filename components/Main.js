import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

//importação do contexto do usuário
import {userContext} from './userContext'

export default class main extends React.Component{
  render(){
      return(
        <userContext.Consumer>
          {({user, logoutUser}) => (

            <View style={styles.container}>
              <Text style={styles.paragraph}>{user}</Text>
              <Button title='Logout' onPress={() => logoutUser()}/>
            </View>


          )}


        </userContext.Consumer>
      )
  }
}


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