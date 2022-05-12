import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface IButton extends TouchableOpacityProps {
  title: string;
}

const Button = ({ title, ...rest }: IButton) => {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Button;
