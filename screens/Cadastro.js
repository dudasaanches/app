import { StyleSheet, View, Text, TextInput, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Curso({ navigation }) {
  return(
    <View style={css.container}>
      <SafeAreaView style={css.header}>
        <Image source={require('../assets/logo.png')} />
      </SafeAreaView>

      <View style={css.meio}>      
        <Text style={css.titulo}>C r i e   s u a   c o n t a</Text>
        
        <View style={css.linha}>
          <Image source={require('../assets/linha.png')} />
          <Text style={css.txt}>Planeje seus estudos</Text>
          <Image source={require('../assets/linha.png')} />
        </View>

        <View style={css.divInput}>
          <MaterialCommunityIcons name="account-outline" size={45} color="#A8A8A8"/>
          <TextInput style={css.input}  placeholder='Insira seu Nome'/>
        </View>
        <View style={css.divInput}>
          <MaterialCommunityIcons name="email-outline" size={40} color="#A8A8A8"/>
          <TextInput style={css.input}  placeholder='Insira seu Email'/>
        </View>
        <View style={css.divInput}>
          <MaterialCommunityIcons name="key-outline" size={40} color="#A8A8A8"/>
          <TextInput style={css.input}  placeholder='Insira sua Senha'/>
        </View>
        <View style={css.footer}>
          <Pressable style={css.btn}>
            <Text style={css.btnTXT}>Cadastrar</Text>
          </Pressable>
          <Image source={require('../assets/linha2.png')} />
          <View style={{flexDirection:'row', gap:10}}>
            <Text style={css.txt2}>Já possui conta?</Text>
            <Text style={css.login}>Login</Text>
          </View>
        </View>
      </View>
    </View>
  );
}


const css = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#800000',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  linha:{
    flexDirection: 'row',
  }, 
  titulo:{
    fontSize: 40,
    color: '#800000',
    textAlign: "center",
    padding: 15
  },
  txt:{
    fontSize: 20,
    marginTop: -10,
    paddingHorizontal: 5,
    color: '#C1C1C1'
  },
  divInput: {
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
  },
  input:{
    backgroundColor: '#E6E6E6',
    color: 'A8A8A8',
    width: 300,
    fontSize: 20,
    padding: 10,
    paddingLeft: 20,
    border: 'none'
  },
  meio:{
    gap: 25
  },
  btn:{
    backgroundColor:'#800000',
    width:200,
    height:60,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTXT:{
    fontSize: 25,
    color: 'white',
    
  },
  footer:{
    gap:20,
    alignItems: 'center'
  },
  txt2:{
    fontSize: 20
  },
  login: {
    fontSize: 20,
    color:'#FF4F4F',
    fontWeight: 'bold'
  }
});
