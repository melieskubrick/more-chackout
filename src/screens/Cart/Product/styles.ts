import { lighten } from 'polished';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => lighten(0.2, theme.colors.primary)};
  margin: 8px 20px;
  flex-direction: row;
  align-items: center;
`;

export const DeleteContainer = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;

export const Column = styled.View`
  flex: 1;
  flex-wrap: wrap;
`;

export const Image = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 12px;
  margin-right: 8px;
`;

export const Name = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.typography.bold};
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
`;

export const Price = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.typography.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

export const ActContainer = styled.TouchableOpacity<{ right?: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px;
  border-top-right-radius: ${({ right }) => (right ? 8 : 0)}px;
  border-bottom-right-radius: ${({ right }) => (right ? 8 : 0)}px;
  border-top-left-radius: ${({ right }) => (!right ? 8 : 0)}px;
  border-bottom-left-radius: ${({ right }) => (!right ? 8 : 0)}px;
  margin-right: 1px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

export const ActIcon = styled.Image``;
