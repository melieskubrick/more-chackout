import { FinalizeCart } from '#/actions';
import Button from '#/components/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';

import * as S from './styles';

type NavigatorParamList = {
  Home: any;
};

const Success = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigatorParamList, 'Home'>>();

  const dispatch = useDispatch();

  dispatch(FinalizeCart());

  return (
    <S.Container>
      <S.Column />
      <S.Column>
        <S.Icon source={require('#/assets/images/icons/CONFIRMATION.png')} />
        <S.Title>Sucesso!</S.Title>
        <S.Message>Compra realizada com sucesso, aproveite!</S.Message>
      </S.Column>
      <Button
        onPress={() => navigation.replace('Home')}
        style={{ width: Dimensions.get('window').width - 40 }}
        title="PROSSEGUIR"
      />
    </S.Container>
  );
};

export default Success;
