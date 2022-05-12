import { NavigationProp } from '@react-navigation/native';
import React from 'react';

import * as S from './styles';

interface IHeader {
  title: string;
  navigation: NavigationProp<any>
}

const Header = ({ title, navigation }: IHeader) => {
  return (
    <S.Container>
      <S.Back onPress={() => navigation.goBack()}>
        <S.IconBack source={require('#/assets/images/icons/back.png')} />
      </S.Back>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Header;
