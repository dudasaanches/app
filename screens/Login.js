import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const Main = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticatedMessage, setAuthenticatedMessage] = useState('');
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);
  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    checkBiometricSupport();
  }, []);

  const checkBiometricSupport = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!hasHardware) {
      setAuthenticatedMessage('Dispositivo não possui hardware de biometria.');
    } else if (!isEnrolled) {
      setAuthenticatedMessage('Biometria não está configurada neste dispositivo.');
    }
  };

  const handleLogin = async () => {
    console.log('Email:', email);
    console.log('Senha:', password);
    setAuthenticatedMessage('Login bem-sucedido!');
  };

  const handleBiometricRegister = async () => {
    const { success } = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Use a biometria para cadastrar',
      cancelLabel: 'Cancelar',
      fallbackLabel: 'Usar senha',
    });

    if (success) {
      setAuthenticatedMessage('Cadastro com biometria bem-sucedido!');
      setShowSuccessIcon(true); 
      animateSuccessIcon(); 
    }
  };

  const animateSuccessIcon = () => {
    Animated.sequence([
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.delay(1500),
      Animated.timing(animationValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setShowSuccessIcon(false); 
    });
  };

  const alertTranslateY = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-150, 0], 
  });

  const AnimatedAlert = () => {
    return (
      <Animated.View
        style={[styles.alertContainer, { transform: [{ translateY: alertTranslateY }] }]}
      >
        <Text style={styles.alertText}>{authenticatedMessage}</Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.main}>
     
      <Image
        source={require('../assets/planeje.png')}
        style={styles.image}
      />
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/Frame.png')}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Insira seu Email"
          placeholderTextColor="#A8A8A8"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/chave.png')}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Insira sua Senha"
          placeholderTextColor="#A8A8A8"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.biometryButton} onPress={handleBiometricRegister}>
        <Text style={styles.biometryText}>Cadastrar com Biometria</Text>
      </TouchableOpacity>
      {showSuccessIcon && (
        <Animated.Image
          source={require('../assets/correto.png')}
          style={[styles.successIcon, { opacity: animationValue }]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#800000',
    height: 100,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 60,
    marginRight: 10,
    top: 10,
  },
  main: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    height:800
  },
  image: {
    width: 250,
    height: 80,
    top: 10,
    marginBottom: 40
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    width: 280,
    height: 60,
    paddingHorizontal: 10,
    top: 0,
    marginBottom: 30,
    borderRadius: 10,
  },
  inputIcon: {
    width: 32,
    height: 30,
    marginRight: 10,
  },
  input: {
    height: '100%',
    fontSize: 18, 
  },
  loginButton: {
    backgroundColor: '#800000',
    width: 150,
    height: 55,
    top: 0,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#ffffff',
    fontSize: 18,
  },
  alertContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  alertText: {
    color: '#ffffff',
    fontSize: 16,
  },
  biometryButton: {
    marginTop: 0,
  },
  biometryText: {
    color: '#800000',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  successIcon: {
    width: 40,
    height: 40,
    marginTop: 100,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
    </View>
  );
};

export default App;