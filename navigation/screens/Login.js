import React from "react";
import { Button, TextInput, View,Image } from "react-native";
import { StyleSheet } from "react-native";

function Login() {
return (
    <View style={styles.input}>
    <Image 
    source={require('../imgs/fadev.jpg')} 
    style={{width: 350, height: 350,marginBottom:30,borderColor: '#999'}}
    />

        <TextInput
        style={styles.txt}
        placeholder='Ingresa tu Número de Control'
        
        />
    <TextInput
        style={styles.txt}
        placeholder='Ingresa tu Contraseña'
        /> 
        <Button
        style={styles.input}
        title='Ingresar'
        />
    </View>

);
}
const styles = StyleSheet.create({
    txt: {
        height: 40,
        width: 300,
        fontSize:17,
        margin: 12,
        borderWidth: .4,
        borderRadius: 5,
        overflow: "hidden",
        padding: 10,
        alignContent: "center",
        justifyContent: "center"
    },
    input: {
        padding: 20,
        alignContent: "center",
        justifyContent: "center",
        marginTop:70,
        marginBottom:20,
    }

});

export default Login;
 