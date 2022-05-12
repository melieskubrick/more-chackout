import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const List = styled.FlatList``;

export const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const EmptyIcon = styled.Image``;

export const EmptyText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.typography.bold};
  margin-bottom: 16px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 12px;
  flex-wrap: wrap;
  width: ${Dimensions.get('window').width / 2}px;
`;

export const BottomHeader = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 8,
  },
  shadowOpacity: 0.44,
  shadowRadius: 10.32,

  elevation: 16,
})`
  background-color: ${({ theme }) => theme.colors.white};
  height: ${getStatusBarHeight() + 100}px;
  padding: 20px;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
`;

export const TotalContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const TotalTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray_dark};
  font-family: ${({ theme }) => theme.typography.bold};
  margin-bottom: 16px;
`;

export const Total = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.bold};
  margin-bottom: 16px;
`;
