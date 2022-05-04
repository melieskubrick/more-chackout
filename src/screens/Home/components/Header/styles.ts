import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: ${getStatusBarHeight()}px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const MarginHorizontal = styled.View`
  margin: 0 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.typography.bold};
  color: ${({ theme }) => theme.colors.black};
`;

export const ContainerIcon = styled.TouchableOpacity``;

export const Icon = styled.Image``;

export const List = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 20 },
  paddingBottom: 8
})``;

export const Filter = styled.Text`
  font-size: 8px;
  font-family: ${({ theme }) => theme.typography.bold};
  color: ${({ theme }) => theme.colors.gray_dark};
  text-transform: uppercase;
  margin-top: 12px;
`;
