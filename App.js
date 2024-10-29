// L3 Testing Code
// import { StatusBar } from 'expo-status-bar';
// import {StyleSheet, Text, View, TextInput, Button, Alert, ToastAndroid, TouchableOpacity} from 'react-native'; // Added TextInput
// import RNPickerSelect from 'react-native-picker-select';
//
// export default function App() {
//   return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//
//         <TextInput style={{ borderWidth: 1 }} />
//
//         <RNPickerSelect
//             onValueChange={(value) => console.log(value)}
//             items={[
//               { label: 'Football', value: 'football' },
//               { label: 'Baseball', value: 'baseball' },
//               { label: 'Rugby', value: 'rugby' },
//               { label: 'Hockey', value: 'hockey' },
//             ]}
//         />
//           <TouchableOpacity onPress={() => Alert.alert("Welcome")}>
//               <Text>Log In</Text>
//           </TouchableOpacity>
//
//         <Button
//             onPress={() => {Alert.alert("Hello World")}} title="Press Me"
//           />
//
//         <Button
//             onPress={() => {ToastAndroid.show("Hello World", ToastAndroid.SHORT)}} title="Press Me"
//         />
//
//         <StatusBar style="auto" />
//       </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// Exercise 1A-G
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function App() {
  const [userType, setUserType] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Display a welcome message based on User Type and User Name
    const message = `Welcome ${userType} ${userName}`;
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
      <View style={styles.container}>
        <Text>User Type:</Text>
        <RNPickerSelect
            onValueChange={(value) => setUserType(value)}
            items={[
              { label: 'Admin', value: 'Admin' },
              { label: 'Guest', value: 'Guest' }
            ]}
            style={{
              inputAndroid: {
                color: 'black',
                borderBottomWidth: 1,
                marginBottom: 20
              }
            }}
        />

        <Text>User Name:</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your name"
            onChangeText={(text) => setUserName(text)}
        />

        <Text>Password:</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginText}>LOG IN</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20
  },
  loginButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
