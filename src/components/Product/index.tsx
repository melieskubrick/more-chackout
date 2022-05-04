import React from 'react';

import * as S from './styles';

interface IProps {
  widthFull?: boolean;
  addInner?: boolean;
  item: IProduct;
}

const Product = ({ item, widthFull, addInner }: IProps) => {
  return (
    <S.Container>
      <S.ContainerImage>
        <S.ProductImage widthFull={widthFull} source={{ uri: item.image }} />
        {addInner && (
          <S.ContainerAdd
            style={{ position: 'absolute', bottom: 16, right: 8 }}
          >
            <S.Add source={require('#/assets/images/icons/ADD.png')} />
          </S.ContainerAdd>
        )}
      </S.ContainerImage>
      <S.Category widthFull={widthFull}>{item.category}</S.Category>
      <S.Product widthFull={widthFull} numberOfLines={2}>
        {item.title}
      </S.Product>
      <S.ProductDescription widthFull={widthFull} numberOfLines={3}>
        {item.description}
      </S.ProductDescription>
      <S.Row>
        <S.Price>${item.price}</S.Price>
        {!addInner && (
          <S.ContainerAdd>
            <S.Add source={require('#/assets/images/icons/ADD.png')} />
          </S.ContainerAdd>
        )}
      </S.Row>
    </S.Container>
  );
};

export default Product;
