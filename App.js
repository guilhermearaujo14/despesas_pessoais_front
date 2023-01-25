import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import api from './services/api';



export default function App() {

  
  const [searchCPF, setSearchCPF] = useState('');
  const [searchSenha, setSearchSenha] = useState('');
  //const [pessoa, setPessoa] = useState({});


const teste = (CPF, Senha)=>{
  console.log(CPF)
  console.log(Senha)
}


  const login = async (CPF, Senha) =>{
    console.log(CPF)
    console.log(Senha)
    //const {data} = await api.get(`/pessoas/${searchCPF}`)
    //console.log(data)
    //setPessoa(data)
  }

  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.labelInput}></Text>

      <View style={styles.viewInputs}>
        <Text style={styles.labelInput}>CPF</Text>
      	<TextInput placeholder='informe seu CPF' keyboardType='numeric' style={styles.input} value={searchCPF}  onChangeText={text=>setSearchCPF(text)}/>
        <Text style={styles.labelInput}>Senha</Text>
        <TextInput secureTextEntry={true} placeholder='informe sua senha' style={styles.input} value={searchSenha} onChangeText={text=>setSearchSenha(text)}/>
        <TouchableOpacity style={styles.BtnLogin} onPress={()=>login(searchCPF,searchSenha)}>
          <Text style={styles.textBtnLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A1BA7',
    padding: 10,
  },
  viewInputs:{
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    marginLeft: '5%',
  },
  input:{
    width: '90%',
    height: 50,
    borderWidth: 1,
    paddingLeft: 15,
    marginBottom: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
  },
  labelInput:{
    width: '90%',
    marginLeft: 15,
    color: '#fff', 
    fontWeight: '600',
  }, 
  BtnLogin:{
    width: '90%',
    height: 40,
    backgroundColor: 'red',
    borderRadius: 15,
    justifyContent: 'center',
  },
  textBtnLogin:{
    textAlign: 'center',
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
  }
});
