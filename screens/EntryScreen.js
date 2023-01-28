import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import { withNavigation } from 'react-navigation';
import { black } from 'react-native-paper/lib/typescript/styles/colors';

const EntryScreen = ({route,navigation}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(auth,email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }



  

  return (
    <KeyboardAvoidingView
    style= {styles.container}
    behavior="padding">
       {/* <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          // value={email}
          // onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          // value={password}
          // onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View> */}



      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {navigation.navigate('LoginScreen')}}
          style={styles.button}
          
        >
          <Text style={styles.buttonText}>Login</Text>
          
        </TouchableOpacity>


        <TouchableOpacity
           onPress={()=>navigation.navigate('RegisterScreen')}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>

        {/* TESTSCREEN BUTTON
        <TouchableOpacity
          onPress={() => {alert('Test Screen');navigation.navigate('Test')}}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Test Button</Text>
          
        </TouchableOpacity> */}
      </View>

    </KeyboardAvoidingView>
  )
}

export default EntryScreen




// const LoginScreen = () => {
  
//   const navigation = useNavigation()

  

//     return unsubscribe
//   }, [])

  
//   const handleLogin = () => {
//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then(userCredentials => {
//         const user = userCredentials.user;
//         console.log('Logged in with:', user.email);
//       })
//       .catch(error => alert(error.message))
//   }

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior="padding"
//     >
     
      
//     </KeyboardAvoidingView>
//   )
// }

// export default LoginScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    flex:1,
    flexDirection: "row",
    // justifyContent: 'center'
    color: 'black',
    // alignItems: 'center',
  },
  // inputContainer: {
  //   width: '80%'
    
  // },
  input: {
    backgroundColor: 'red',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    borderWidth: 2,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: 200,
    color: 'white',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    flex:1,
    justifyContent: 'center',
    elevation: null,
    width: '40%',
    height: 70,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
    
    
    
  },

  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    alignItems: 'center',
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
  buttonOutlineText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 20,
  },
})