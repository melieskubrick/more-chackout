import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.typography.semi_bold};
  color: ${({ theme }) => theme.colors.black};
`;
