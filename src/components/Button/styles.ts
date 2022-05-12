import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 50px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.bold};
`;
