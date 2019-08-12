import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

import {
  Container,
  Logo,
  LoginInput,
  LoginButton,
  LoginButtonText,
  Loading,
} from './styles';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('Main', { user });
      } else {
        setLoading(false);
      }
    });
  }, []);

  async function handleLogin() {
    const apiResponse = await api.post('devs', {
      username,
    });

    const { _id } = apiResponse.data;

    await AsyncStorage.setItem('user', _id);

    navigation.navigate('Main', { user: _id });
  }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Logo />
          <LoginInput
            placeholder="Digite seu usuário do github"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => {}}
            value={username}
            onChangeText={setUsername}
          />
          <LoginButton onPress={handleLogin}>
            <LoginButtonText>Entrar</LoginButtonText>
          </LoginButton>
        </>
      )}
    </Container>
  );
}
