import styled from 'styled-components/native';

import logo from '../../assets/logo.png';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import itsamatch from '../../assets/itsamatch.png';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f5f5f5;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

export const LogoutButton = styled.TouchableOpacity``;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  margin-top: 30px;
`;

export const Avatar = styled.Image`
  flex: 1;
  height: 300px;
`;

export const CardContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  max-height: 500px;
`;

export const Card = styled.View`
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 8px;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const CardFooter = styled.View`
  background: #fff;
  padding: 15px 20px;
`;

export const DevName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const DevBio = styled.Text`
  font-size: 14px;
  color: #999;
  margin-top: 5px;
  line-height: 18px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  elevation: 2px;
`;

export const LikeImage = styled.Image.attrs({
  source: like,
})``;

export const DislikeImage = styled.Image.attrs({
  source: dislike,
})``;

export const EmptyText = styled.Text`
  align-self: center;
  color: #999;
  font-size: 24px;
  font-weight: bold;
`;

export const MatchContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
`;

export const ItsaMatchImage = styled.Image.attrs({
  source: itsamatch,
})`
  height: 60px;
  resize-mode: contain;
`;

export const MatchAvatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border-width: 5px;
  border-color: #fff;
  margin: 30px 0;
`;

export const MatchName = styled.Text`
  font-size: 26;
  font-weight: bold;
  color: #fff;
`;

export const MatchBio = styled.Text`
  margin-top: 10px;
  font-size: 16;
  color: rgba(255, 255, 255, 0.8);
  line-height: 24px;
  text-align: center;
  padding: 0 30px;
`;

export const MatchCloseButton = styled.TouchableOpacity``;

export const MatchCloseButtonText = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-top: 30px;
  font-weight: bold;
`;
