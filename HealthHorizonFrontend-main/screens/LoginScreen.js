import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Image
        source={require('../assets/logo.png')}
        style={{width: '60%', resizeMode: 'contain', marginTop: -120, marginBottom: -50}}
      />
        <View style={styles.logocontainer}>
          <Text style={styles.logo}>Health</Text>
          <Text style={styles.logo1}>Horizon</Text>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Enter Email" 
            placeholderTextColor="#6D6A6A"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Enter Password" 
            placeholderTextColor="#6D6A6A"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Entry')}
        >
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>
        <Text style={{color:"black", marginTop: 10, marginBottom: -15, fontWeight: "bold"}}>OR</Text>
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logocontainer:{
    flexDirection: 'row',
    alignItems: 'center', 
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"black",
    marginBottom:40,
    position:"relative",
  },
  logo1:{
    fontWeight:"bold",
    fontSize:50,
    color:"#004A9F",
    marginBottom:40,
    position:"relative"
  },
  inputView:{
    width: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"#004A9F",
    fontSize:15,
    marginLeft: 210,
    marginTop: 10,
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#A4C1E2",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  signupBtn:{
    width:"80%",
    backgroundColor:"#FFFFFF",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"black",
    fontWeight: "400"
  },
  signupText:{
    color:"black",
    fontWeight: "400"
  }
});