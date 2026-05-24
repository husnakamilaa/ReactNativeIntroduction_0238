import { View, Text, Alert, TextInput, TouchableOpacity } from 'react-native'
import React, { use, useState } from 'react'
import { Button } from 'expo-router/build/react-navigation';
import{ StyleSheet } from 'react-native';

const div = () => {
    const [nama, setNama]=useState('');
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')

    const handleSubmit=()=>{
        if(!nama||!username||!password){
            Alert.alert('Error', 'Semua kolom harus diisi!')
            return;
        }
        Alert.alert('Sukses', 'Data berhasil dikirim!\n\nNama:${nama}\nUsername:${username}\nPassword:${password}')
    };
  return (
    <View style={styles.container}>
        <Text style={styles.title}> Ini Halaman Form</Text>
        <View style={styles.inputGroup}>
            <Text style={styles.label}>Nama Lengkap:</Text>
            <TextInput
                style={styles.input}
                placeholder="Masukkan nama lengkap"
                value={nama}
                onChangeText={(text)=>setNama(text)}
                secureTextEntry={false}
                autoCapitalize='none'
            />
        </View>
        <View style={styles.inputGroup}>
            <Text style={styles.label}>Username:</Text>
            <TextInput
                style={styles.input}
                placeholder="Masukkan username"
                value={username}
                onChangeText={(text)=>setUsername(text)}
                secureTextEntry={false}
                autoCapitalize='none'
            />
        </View>
        <View style={styles.inputGroup}>
            <Text style={styles.label}>Password:</Text>
            <TextInput
                style={styles.input}
                placeholder="Masukkan password"
                value={password}
                onChangeText={(text)=>setPassword(text)}
                secureTextEntry={true}
                autoCapitalize='none'
            />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#10062c',    
        justifyContent: 'center',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color:'#f5f1f1'
    },
    inputGroup:{
        marginBottom:20,
    },
    label:{
        fontSize: 16,
        marginBottom: 5,
        fontWeight: '500',
        color:'#555'
    },
    input:{
        backgroundColor:'#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 16,
    },
    button:{
        backgroundColor:'#007BFF',
        paddingVertical:14,
        borderRadius: 8,
        marginTop: 10,
        alignItems:'center',
    },
    buttonText:{
        color:'#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

}
);
export default div;