import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${getStatusBarHeight()}px;
`;

export const Icon = styled.Image``;

export const Column = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.bold};
  text-align: center;
  margin: 10px 0;
`;

export const Message = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.regular};
  text-align: center;
`;
