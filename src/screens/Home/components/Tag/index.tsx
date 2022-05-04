import React, { ReactNode } from 'react';
import { GestureResponderEvent, TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface ITag extends TouchableOpacityProps {
  children: ReactNode;
  isSelected?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const Tag = ({ isSelected, children, onPress }: ITag) => {
  return (
    <S.Container isSelected={isSelected} onPress={onPress}>
      <S.Title isSelected={isSelected}>{children}</S.Title>
    </S.Container>
  );
};

export default Tag;
