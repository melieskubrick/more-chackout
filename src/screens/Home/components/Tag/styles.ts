import styled from 'styled-components/native';

export const Container = styled.View<{ isSelected?: boolean }>`
  padding: 6px 10px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : 'transparent'};
  border-radius: 8px;
  margin: 4px 14px 0 0;
`;

export const Title = styled.Text<{ isSelected?: boolean }>`
  font-size: 8px;
  font-family: ${({ theme }) => theme.typography.bold};
  padding: 6px 10px;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.white : theme.colors.gray};
`;
