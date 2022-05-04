import React from 'react';

import * as S from './styles';

const Product = ({ item }: IProduct) => {
  return (
    <S.Container>
      <S.ContainerImage>
        <S.ProductImage source={{ uri: item.image }} />
      </S.ContainerImage>
      <S.Category>{item.category}</S.Category>
      <S.Product numberOfLines={2}>{item.title}</S.Product>
      <S.ProductDescription numberOfLines={3}>
        {item.description}
      </S.ProductDescription>
      <S.Row>
        <S.Price>{item.price}</S.Price>
        <S.ContainerAdd>
          <S.Add source={require('#/assets/images/icons/ADD.png')} />
        </S.ContainerAdd>
      </S.Row>
    </S.Container>
  );
};

export default Product;
