import { DecreaseQuantity, DeleteCart, IncreaseQuantity } from '#/actions';
import Button from '#/components/Button';
import Header from '#/components/Header';
import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Alert, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '../Home/components/Divider';
import Product from './Product';

import * as S from './styles';

interface ICart {
  navigation: NavigationProp<any>;
}

const Cart = ({ navigation }: ICart) => {
  const { carts } = useSelector((state: any) => state.product);

  const dispatch = useDispatch();

  let ListCart = [];
  let TotalCart = 0;
  Object.keys(carts).forEach(function (item) {
    TotalCart += carts[item].quantity * carts[item].price;
    ListCart.push(carts[item]);
  });

  const deleteItem = (index: number) => {
    Alert.alert('Atenção', 'Deseja realmente excluir este item?', [
      {
        text: 'Sim',
        onPress: () => dispatch(DeleteCart(index)),
      },
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Não', onPress: () => console.log('OK Pressed') },
    ]);
  };

  const Empty = () => (
    <S.EmptyContainer>
      <S.EmptyIcon source={require('#/assets/images/icons/BAG_1.png')} />
      <S.EmptyText>Nenhum item adicionado no carrinho.</S.EmptyText>
      <Button
        style={{ width: Dimensions.get('window').width - 40 }}
        title="ADICIONAR ITENS"
        onPress={() => navigation.goBack()}
      />
    </S.EmptyContainer>
  );

  return (
    <S.Container>
      <Header navigation={navigation} title="CARRINHO" />
      <Divider title="Meu Carrinho" />
      <S.List
        contentContainerStyle={{
          flexGrow: 1,
        }}
        data={carts}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item, index }: any) => (
          <Product
            deleteItem={() => deleteItem(index)}
            increaseQuantity={() => dispatch(IncreaseQuantity(index))}
            decreaseQuantity={() => dispatch(DecreaseQuantity(index))}
            image={item.image}
            title={item.title}
            price={`${item.quantity}x $${item.price}`}
          />
        )}
        ListEmptyComponent={Empty}
      />
      {TotalCart !== 0 && (
        <S.BottomHeader>
          <S.TotalContainer>
            <S.TotalTitle>Total</S.TotalTitle>
            <S.Total>${TotalCart.toString()}</S.Total>
          </S.TotalContainer>
          <Button
            onPress={() => navigation.navigate('Success')}
            title="FINALIZAR COMPRA"
          />
        </S.BottomHeader>
      )}
    </S.Container>
  );
};

export default Cart;
