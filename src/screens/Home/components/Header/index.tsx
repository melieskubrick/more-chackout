import { getAllCategories } from '#/services/api';
import React, { useEffect, useState } from 'react';
import Tag from '../Tag';

import * as S from './styles';

const Header = () => {
  const [categories, setCategories] = useState<string[] | any>([]);

  const fetchData = async () => {
    try {
      const categorieResponse = await getAllCategories();
      setCategories(categorieResponse.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.Container>
      <S.MarginHorizontal>
        <S.Row>
          <S.Title>Produtos</S.Title>
          <S.ContainerIcon>
            <S.Icon source={require('#/assets/images/icons/BAG.png')} />
          </S.ContainerIcon>
        </S.Row>
        <S.Filter>Filtrar Categoria</S.Filter>
      </S.MarginHorizontal>

      <S.List
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        horizontal
        data={categories}
        keyExtractor={(res) => res}
        renderItem={(res) => <Tag isSelected>{res.item}</Tag>}
      />
    </S.Container>
  );
};

export default Header;
