import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${getStatusBarHeight() + 40}px;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.typography.bold};
  margin-bottom: 16px;
`;

export const Back = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  position: absolute;
  left: 20px;
  bottom: 0px;
`;

export const IconBack = styled.Image``;
