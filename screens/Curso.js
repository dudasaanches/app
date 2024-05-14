import { StyleSheet, View, Text, TextInput, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Curso() {
  return(
    <View style={css.container}>
      <SafeAreaView style={css.header}>
        <Image source={require('../assets/logo.png')} />
        <MaterialCommunityIcons
              name="cog"
              size={30}
              color="white"
            />
      </SafeAreaView>

      <View style={css.card}>      
        <Image source={require('../assets/curso.png')} />
        <View>
          <Text style={css.titulo}>Técnico em eletromecânica</Text>
          <Text style={css.topicos}>• Duração: 1200h</Text>
          <Text style={css.topicos}>• 2 Aulas semanais (ter e qui)</Text>
          <Text style={css.topicos}>• Professor: Fernando</Text>
          <Text style={css.topicos}>• Inicio: 07/05/2024</Text>
          <Text style={css.topicos}>• Termino: 02/07/2026</Text>
        </View>
        <View style={css.desc}>
          <Text style={css.titulo}>Descrição do curso:</Text>
          <Text style={css.topicos}>Curso bem legal e bacana,
          oferecido pelo SENAI, nele você a prenderá
            a ser um tecnico em eletromecanica completo 
            dublado em pt-br free 2025.</Text>
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
    justifyContent: 'space-between',
    padding: 15
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  topicos: {
    fontSize: 22,
  },
  card:{
    height: 660,
    width: 350,
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
    gap: 15,
    margin: 30, 
    backgroundColor: '#fff',
    top: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
  },
  desc: {
    width: 260
  }
});
