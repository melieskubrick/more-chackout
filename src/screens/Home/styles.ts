import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const List = styled.FlatList``;

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
  height: ${getStatusBarHeight() + 60}px;
  padding: 20px;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
`;
