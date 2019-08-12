import styled from 'styled-components/native';

import logo from '../../assets/logo.png';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})``;

export const LoginInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  margin-top: 20px;
  height: 48px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 20px;
  font-size: 16px;
  color: #666;
  align-self: stretch;
`;

export const LoginButton = styled.TouchableOpacity`
  margin-top: 10px;
  border-radius: 4px;
  background: #df4723;
  height: 48px;
  align-self: stretch;

  justify-content: center;
  align-items: center;
`;

export const LoginButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: '#df4723',
  size: 50,
})``;
