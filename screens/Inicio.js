import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Inicio({navigation}) {

  const curso = () => {
    navigation.navigate('Curso');
  };

  const handleArrowPress = () => {
      console.log('Seta clicada');
      navigation.navigate('Calendario');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
        <TouchableOpacity onPress={() => console.log('Configurações clicadas')}>
          <MaterialCommunityIcons
            name="cog"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Image
          source={require('../assets/titulo.png')}
          style={styles.cardImage}
        />
        <View style={styles.subCardsContainer}>
          <TouchableOpacity style={styles.subCard} onPress={curso}>
            <Image
              source={require('../assets/card1.png')}
              style={styles.subCardIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.subCard} onPress={() => console.log('Subcard 2 clicado')}>
            <Image
              source={require('../assets/card2.png')}
              style={styles.subCardIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.extraCard}>
        <Image 
          source={require('../assets/titulo2.png')}
          style={styles.extraCardImage1}
        />
        <TouchableOpacity onPress={handleArrowPress} style={styles.arrowButton}>
          <Image 
            source={require('../assets/seta.png')}
            style={styles.extraCardImage2} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#800000',
  },
  logo: {
    width: 90,
    height: 60,
    top: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    height: 300,
    borderRadius: 30,
    margin: 20,
    top: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  extraCard: {
    backgroundColor: '#fff',
    padding: 20,
    height: 300,
    borderRadius: 30,
    margin: 20,
    top: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardImage: {
    width: 210,
    height: 30,
    marginBottom: 20,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  extraCardImage1: {
    width: 230,
    height: 80,
  },
  extraCardImage2: {
    width: 60,
    height: 40,
    top: 130,
    left: 250,
  },
  subCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subCard: {
    backgroundColor: '#fff',
    borderRadius: 30,
    width: 150,
    height: 160,
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
    alignItems: 'center',
  },
  subCardIcon: {
    width: 145,
    height: 120,
  },
  arrowButton: {
    position: 'absolute',
    top: 100,
    left: 20,
  },
});
