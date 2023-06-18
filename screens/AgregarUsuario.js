import React from "react";
import { View, Text, ScrollView, TextInput, Button, StyleSheet } from "react-native";

const AgregarUsuario = () =>{
    return (
        <ScrollView style={Style.container}>
            <View styles={Style.inputGroup}>
                <TextInput placeholder="Nombre de Usuario"/>
            </View>
            <View styles={Style.inputGroup}>
                <TextInput placeholder="Correo Electronico"/>
            </View>
            <View styles={Style.inputGroup}>
                <TextInput placeholder="Numero Telefonico"/>
            </View>
            <View styles={Style.inputGroup}>
                <Button title="Guardar usuario"/>   
            </View>
        </ScrollView>
    )
}

const Style = StyleSheet.create({
    container:{
        flex:1,
        padding:25,
    }, 
    inputGroup:{
        flex:1,
        padding:10,
        marginBottom:15,
        borderBottomWidth:10,
        backgroundColor: '#cccccc'
    }
})


export default AgregarUsuario