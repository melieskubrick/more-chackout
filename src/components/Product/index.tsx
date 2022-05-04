import React from 'react';

import * as S from './styles';

interface IProps {
  widthFull: boolean;
  item: IProduct;
}

const Product = ({ item, widthFull }: IProps) => {
  return (
    <S.Container>
      <S.ContainerImage>
        <S.ProductImage widthFull={widthFull} source={{ uri: item.image }} />
      </S.ContainerImage>
      <S.Category widthFull={widthFull}>{item.category}</S.Category>
      <S.Product widthFull={widthFull} numberOfLines={2}>
        {item.title}
      </S.Product>
      <S.ProductDescription widthFull={widthFull} numberOfLines={3}>
        {item.description}
      </S.ProductDescription>
      <S.Row>
        <S.Price widthFull={widthFull}>${item.price}</S.Price>
        <S.ContainerAdd>
          <S.Add source={require('#/assets/images/icons/ADD.png')} />
        </S.ContainerAdd>
      </S.Row>
    </S.Container>
  );
};

export default Product;
