import React from 'react';

import * as S from './styles';

interface IDivider {
  title: string;
}

const Divider = ({ title }: IDivider) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Divider;
