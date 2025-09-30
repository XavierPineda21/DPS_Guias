import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Input } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

const PaginaRegistro = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const uri = 'https://apimarket-production-10e5.up.railway.app';

  const registrar = () => {
    if (!usuario || !correo || !contrasena) {
      Alert.alert('Aviso', 'Por favor completa todos los campos');
      return;
    }

    fetch(`${uri}/newusuarios`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: usuario,
        correo: correo,
        clave: contrasena
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        Alert.alert('Registro exitoso', 'Ahora puedes iniciar sesión');
        navigation.navigate('PantallaInicio');
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Error', 'Hubo un problema al registrar');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <Input
        placeholder="Nombre de usuario"
        onChangeText={setUsuario}
        rightIcon={<Icon name="user" size={24} color="black" />}
      />
      <Input
        placeholder="Correo electrónico"
        onChangeText={setCorreo}
        rightIcon={<Icon name="envelope" size={24} color="black" />}
      />
      <Input
        placeholder="Contraseña"
        onChangeText={setContrasena}
        secureTextEntry
        rightIcon={<Icon name="lock" size={24} color="black" />}
      />
      <TouchableOpacity style={styles.button} onPress={registrar}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 30,
    marginTop: 25,
    alignSelf: 'center',
  },
  button: {
    height: 50,
    backgroundColor: 'green',
    marginTop: 15,
    borderRadius: 5,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
});

export default PaginaRegistro;
