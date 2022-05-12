import { theme } from '#/theme';
import React from 'react';
import { GestureResponderEvent } from 'react-native';

import * as S from './styles';

interface IProduct {
  title: string;
  price: string;
  image: string;
  increaseQuantity: (event: GestureResponderEvent) => void;
  decreaseQuantity: (event: GestureResponderEvent) => void;
  deleteItem: (event: GestureResponderEvent) => void;
}

const Product = ({
  title,
  price,
  image,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
}: IProduct) => {
  return (
    <S.Container>
      <S.Image source={{ uri: image }} />
      <S.Column>
        <S.Name>{title}</S.Name>
        <S.Price>{price}</S.Price>
      </S.Column>
      <S.ActContainer onPress={decreaseQuantity}>
        <S.ActIcon source={require('#/assets/images/icons/REDUCE_2.png')} />
      </S.ActContainer>
      <S.ActContainer onPress={increaseQuantity} right>
        <S.ActIcon source={require('#/assets/images/icons/ADD_2.png')} />
      </S.ActContainer>
      <S.DeleteContainer onPress={deleteItem}>
        <S.ActIcon
          style={{ tintColor: theme.colors.red }}
          source={require('#/assets/images/icons/TRASH.png')}
        />
      </S.DeleteContainer>
    </S.Container>
  );
};

export default Product;
