import React, { useState, useEffect, useMemo } from 'react';
import AsyncStorate from '@react-native-community/async-storage';
import io from 'socket.io-client';

import api from '../../services/api';

import {
  Container,
  Logo,
  CardContainer,
  Card,
  Avatar,
  CardFooter,
  DevName,
  DevBio,
  ButtonsContainer,
  Button,
  LikeImage,
  DislikeImage,
  EmptyText,
  LogoutButton,
  MatchContainer,
  ItsaMatchImage,
  MatchAvatar,
  MatchName,
  MatchBio,
  MatchCloseButton,
  MatchCloseButtonText,
} from './styles';

export default function Main({ navigation }) {
  const id = navigation.getParam('user');
  const [devs, setDevs] = useState([]);
  const [matchDev, setMatchDev] = useState(null);
  const showDev = useMemo(() => devs[0], [devs]);

  useEffect(() => {
    async function loadDevs() {
      const apiResponse = await api.get(`/devs/`, {
        headers: {
          user: id,
        },
      });

      setDevs(apiResponse.data);
    }
    loadDevs();
  }, [id]);

  useEffect(() => {
    const socket = io('http://rvieceli-dell:3333', {
      query: { dev: id },
    });
    socket.on('match', dev => {
      setMatchDev(dev);
    });
  }, [id]);

  async function handleLike() {
    const [dev, ...rest] = devs;

    await api.post(`/devs/${dev._id}/likes`, null, {
      headers: {
        user: id,
      },
    });
    setDevs(rest);
  }

  async function handleDislike() {
    const [dev, ...rest] = devs;

    await api.post(`/devs/${dev._id}/dislikes`, null, {
      headers: {
        user: id,
      },
    });
    setDevs(rest);
  }

  async function handleLogout() {
    await AsyncStorate.clear();

    navigation.navigate('Login');
  }

  return (
    <Container>
      <LogoutButton onPress={handleLogout}>
        <Logo />
      </LogoutButton>

      <CardContainer>
        {devs.length > 0 ? (
          <Card>
            <Avatar
              source={{
                uri: showDev.avatar,
              }}
            />
            <CardFooter>
              <DevName>{showDev.name}</DevName>
              <DevBio numberOfLines={3}>{showDev.bio}</DevBio>
            </CardFooter>
          </Card>
        ) : (
          <EmptyText>Acabou :(</EmptyText>
        )}
      </CardContainer>

      {devs.length > 0 && (
        <ButtonsContainer>
          <Button onPress={handleDislike}>
            <DislikeImage />
          </Button>
          <Button onPress={handleLike}>
            <LikeImage />
          </Button>
        </ButtonsContainer>
      )}

      {matchDev && (
        <MatchContainer>
          <ItsaMatchImage />
          <MatchAvatar
            source={{
              uri: matchDev.avatar,
            }}
          />

          <MatchName>{matchDev.name}</MatchName>
          <MatchBio>{matchDev.bio}</MatchBio>

          <MatchCloseButton onPress={() => setMatchDev(null)}>
            <MatchCloseButtonText>FECHAR</MatchCloseButtonText>
          </MatchCloseButton>
        </MatchContainer>
      )}
    </Container>
  );
}
