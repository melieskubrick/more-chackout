import React, { ReactNode } from 'react';

import * as S from './styles';

interface ITag {
  children: ReactNode;
  isSelected?: boolean;
}

const Tag = ({ isSelected, children }: ITag) => {
  return (
    <S.Container isSelected={isSelected}>
      <S.Title isSelected={isSelected}>{children}</S.Title>
    </S.Container>
  );
};

export default Tag;
