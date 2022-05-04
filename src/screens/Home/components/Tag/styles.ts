import { theme } from '#/theme';
import styled from 'styled-components/native';

interface ITag {
  isSelected?: boolean;
}

export const Container = styled.TouchableOpacity<ITag>`
  padding: 3px 10px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : 'transparent'};
  border-radius: 8px;
  margin: 4px 14px 0 0;
  border-color: ${({ theme, isSelected }) =>
    !isSelected ? theme.colors.gray : 'transparent'};
  border-width: 1px;
`;

export const Title = styled.Text<ITag>`
  font-size: 8px;
  font-family: ${({ theme }) => theme.typography.bold};
  padding: 6px 10px;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.white : theme.colors.gray};
`;
