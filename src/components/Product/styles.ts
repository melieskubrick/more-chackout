import styled from 'styled-components/native';

interface IProduct {
  widthFull: boolean;
}

export const Container = styled.View`
  flex: 1;
  margin: 10px 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerAdd = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  border: 1px ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;
export const Add = styled.Image``;

export const ContainerImage = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
})``;

export const ProductImage = styled.Image<IProduct>`
  height: 180px;
  width: ${({ widthFull }) => (widthFull ? '100%' : '170px')};
  border-radius: 10px;
  margin-bottom: 8px;
`;

export const Category = styled.Text<IProduct>`
  font-family: ${({ theme }) => theme.typography.bold};
  font-size: 8px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2px;
  width: ${({ widthFull }) => (widthFull ? '100%' : '170px')};
`;

export const Product = styled.Text<IProduct>`
  font-family: ${({ theme }) => theme.typography.bold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 2px;
  width: ${({ widthFull }) => (widthFull ? '100%' : '170px')};
`;

export const ProductDescription = styled.Text<IProduct>`
  font-family: ${({ theme }) => theme.typography.bold};
  font-size: 10px;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 16px;
  width: 170px;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.typography.bold};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;
