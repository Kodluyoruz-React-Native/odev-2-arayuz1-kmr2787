import React, { Component } from 'react';
import { Text,StyleSheet,ImageBackground,TouchableOpacity,View,TextInput} from 'react-native';
const txtColor = '#B7BDD0';

class Tema extends Component {
  state = { page: '' };

  a1 = () => {
    this.setState({
      page: 'kayıtol',
    });
  };

  x = () => {
    this.setState({
      page: 'oturumac',
    });
  };

  y = () => {
    alert('Giriş Yapıldı');
  };
  z = () => {
    this.setState({
      page: '',
    });
  };

  introPage() {
    return (
      <ImageBackground style={styles.backgroundImage}>
        <Text style={styles.title}>Hoşgeldiniz</Text>
        <Text style={styles.description}> 2. Hafta Tema Odevi</Text>
        <TouchableOpacity onPress={this.a1} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }

  loginPage() {
    return (
      <View style={styles.loginCnt}>
        <View style={styles.test}>
          <Text style={styles.loginTitle}>Login</Text>
          <Text style={styles.loginDsc}>React Native Login Page</Text>
          <TextInput
            placeholderTextColor={txtColor}
            placeholder="Email address"
            style={styles.loginEmail}
          />
          <TextInput
            placeholderTextColor={txtColor}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.loginPassword}
          />
          <TouchableOpacity onPress={this.y} style={styles.loginBtn}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.z} style={styles.homeBtn}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </View>

        <ImageBackground style={styles.loginCnt}></ImageBackground>
      </View>
    );
  }

  signUpPage() {
    return (
      <View style={styles.loginCnt}>
        <View style={styles.test}>
          <Text style={styles.loginTitle}>Sign Up</Text>
          <Text style={styles.loginDsc}>Tema 2</Text>
          <TextInput
            placeholderTextColor={txtColor}
            placeholder="Email"
            style={styles.loginEmail}
          />
          <TextInput
            placeholderTextColor={txtColor}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.loginPassword}
          />
          <TextInput
            placeholderTextColor={txtColor}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.loginPassword}
          />
          <TouchableOpacity
            onPress={this.signUpOnPress}
            style={styles.loginBtn}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <ImageBackground style={styles.loginCnt}></ImageBackground>
      </View>
    );
  }

  render() {
    const { page } = this.state;
    return (
      <View style={styles.mainContainer}>
        {page === '' && this.introPage()}
        {page === 'kayıtol' && this.loginPage()}
        {page === 'oturumac' && this.signUpPage()}
        {page === 'GirişYapıld' && this.signUpPage()}
      </View>
    );
  }
}

export default Tema;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  mainContainer: {
    flex: 1,
  },
  title: {
    marginTop: 350,
    marginLeft: 50,
    color: '#26233A',
    fontSize: 30,
    fontWeight: 'bold',
  },
  description: {
    color: txtColor,
    justifyContent: 'center',
    marginLeft: 50,
    marginTop: 15,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    marginRight: 50,
    marginLeft: 50,
    alignItems: 'center',
    backgroundColor: '#5D6BA4',
    borderRadius: 30,

    height: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 8,
  },

  loginTitle: {
    marginTop: 100,
    marginLeft: 50,
    color: '#26233A',
    fontSize: 30,
    fontWeight: 'bold',
  },
  loginDsc: {
    marginLeft: 50,
    paddingTop: 10,
    color: txtColor,
    justifyContent: 'center',
    fontSize: 18,
  },
  loginPassword: {
    marginTop: 20,
    marginRight: 50,
    marginLeft: 50,
    height: 50,
    borderRadius: 30,
    fontSize: 15,
    backgroundColor: 'white',
  },
  loginEmail: {
    marginTop: 20,
    marginRight: 50,
    marginLeft: 50,
    height: 50,
    borderRadius: 30,
    fontSize: 15,
    backgroundColor: 'white',
  },
  loginCnt: {
    flex: 1,
    backgroundColor: '#F0F0F2',
  },
  homeBtn: {
    borderRadius: 30,
    marginRight: 50,
    marginLeft: 50,
    alignItems: 'center',
    backgroundColor: '#935B84',

    height: 50,
  },
  loginBtn: {
    borderRadius: 30,
    marginTop: 20,
    marginRight: 50,
    marginBottom: 20,
    marginLeft: 50,
    alignItems: 'center',
    backgroundColor: '#5D6BA4',
    height: 50,
  },
});
