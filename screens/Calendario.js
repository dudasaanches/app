import { StyleSheet, View, Text, TextInput, Pressable, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import React, { useState } from 'react';
import { Card, Avatar } from 'react-native-paper';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};


export default function Curso() {
  const [items, setItems] = useState({});

  LocaleConfig.locales['br'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abril', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dec.'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    today: "Hoje"
  };
  LocaleConfig.defaultLocale = 'br';

  const loadItems = (day) => {
  
  };

  const renderItem = (item) => {
    return(
       <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="J" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    )
  }
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
        <View>
          <Text style={css.titulo}>Calendário de aulas</Text>
        </View>
        <View>
          <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          renderItem={renderItem}
          style={{width: 365}}
          />
        </View>
      </View>
    );
  
}


const css = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 35,
    color: '#800000',
    padding: 10
  },
});
