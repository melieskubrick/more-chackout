import Loading from '#/components/Loading';
import { getAllCategories } from '#/services/api';
import React, { useEffect, useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import { useSelector } from 'react-redux';
import Tag from '../Tag';

import * as S from './styles';

interface IHeader {
  categorySelected: string | undefined;
  setCategorySelected: React.Dispatch<React.SetStateAction<string | undefined>>;
  bagPress: (event: GestureResponderEvent) => void;
}

const Header = ({
  categorySelected,
  setCategorySelected,
  bagPress,
}: IHeader) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<string[] | any>([]);

  const { numberCart } = useSelector((state: any) => state.product);

  const fetchData = async () => {
    try {
      setLoading(true);
      const categorieResponse = await getAllCategories();
      setCategories(['últimos', ...categorieResponse.data]);
    } catch (error) {
      console.log('err:::', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Loading />;

  return (
    <S.Container>
      <S.MarginHorizontal>
        <S.Row>
          <S.Title>Produtos</S.Title>
          <S.ContainerIcon onPress={bagPress}>
            <S.Icon source={require('#/assets/images/icons/BAG.png')} />
            <S.BadgeBag>
              <S.BadgeValue>{numberCart}</S.BadgeValue>
            </S.BadgeBag>
          </S.ContainerIcon>
        </S.Row>
        <S.Filter>Filtrar Categoria</S.Filter>
      </S.MarginHorizontal>

      <S.List
        horizontal
        data={categories}
        keyExtractor={(res) => `${res}`}
        renderItem={({ item }) => (
          <Tag
            key={`${item}`}
            isSelected={item === categorySelected}
            onPress={() => setCategorySelected(`${item}`)}
          >
            {`${item}`}
          </Tag>
        )}
      />
    </S.Container>
  );
};

export default Header;
