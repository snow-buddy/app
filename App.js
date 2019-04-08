/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, Alert, TouchableHighlight} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{width: 220, height: 158}}
                    source={require('./src/res/img/logo.png')}
                />
                <Text style={styles.welcome}>Welcome to Snow Buddy!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <View style={styles.button}>
                    <TouchableHighlight style={styles.buttonText}
                        onPress={this._onPressButton}
                        underlayColor="blue" >
                      <Text> Register </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.buttonText}
                                        onPress={this._onPressButton}
                                        underlayColor="blue" >
                        <Text> Login </Text>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

   button: {
       marginBottom: 30,
       width: 260,
       alignItems: 'center'

   },
   buttonText: {
       alignItems: 'center',
       backgroundColor: '#2196F3',
       width: 260,
       padding:20,
       marginBottom: 10

   }
});
