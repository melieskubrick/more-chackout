import Loading from '#/components/Loading';
import Product from '#/components/Product';
import { getAllProducts, getProductsPerCategory } from '#/services/api';
import React, { useEffect, useMemo, useState } from 'react';
import Divider from './components/Divider';
import Header from './components/Header';

import { useDispatch, useSelector } from 'react-redux';

import * as S from './styles';
import { AddCart } from '#/actions';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Alert } from 'react-native';
import Button from '#/components/Button';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

type NavigatorParamList = {
  Cart: any;
};

const Home = () => {
  const [newProducts, setNewProducts] = useState<IProduct[]>([]);
  const [productsData, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [categorySelected, setCategorySelected] = useState<string | undefined>(
    'últimos',
  );
  const [showNewProducts, setShowNewProducts] = useState<boolean>(true);

  const navigation =
    useNavigation<NativeStackNavigationProp<NavigatorParamList, 'Cart'>>();

  const { numberCart } = useSelector((state: any) => state.product);

  const dispatch = useDispatch();

  const fetchProductPerCategory = async (category: string) => {
    if (categorySelected === 'últimos') {
      setShowNewProducts(true);
      fetchData();
    } else {
      try {
        setLoading(true);

        const categoryResponse = await getProductsPerCategory(category);

        setShowNewProducts(false);

        setProducts(categoryResponse.data);
      } catch (error) {
        console.log('err:::', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);

      const productsResponse = await getAllProducts();
      const itens = productsResponse.data;

      setNewProducts(itens.slice(0, 5));
      setProducts(itens);
    } catch (error) {
      console.log('err:::', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { data, indices } = useMemo(() => {
    const productsItens: Item[] = [
      {
        key: 'list',
        render: () => <Divider title="Listagem" />,
        isTitle: true,
      },
      {
        key: 'list_products',
        render: () => (
          <S.List
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            inverted
            data={productsData}
            renderItem={({ item }) => (
              <Product
                onPress={() => {
                  const product = item as IProduct;
                  Alert.alert('Item adicionado ao carrinho');
                  dispatch(AddCart(product));
                }}
                addInner
                widthFull
                item={item as IProduct}
              />
            )}
          />
        ),
      },
    ];

    const items: Item[] = [
      {
        key: 'news',
        render: () => <Divider title="Novidades" />,
        isTitle: true,
      },
      {
        key: 'products',
        render: () => (
          <S.List
            showsHorizontalScrollIndicator={false}
            horizontal
            data={newProducts}
            renderItem={({ item }) => (
              <Product
                onPress={() => {
                  const product = item as IProduct;
                  Alert.alert('Item adicionado ao carrinho');
                  dispatch(AddCart(product));
                }}
                item={item as IProduct}
              />
            )}
          />
        ),
      },
      ...productsItens,
    ];

    const indices: number[] = [];
    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: showNewProducts ? items : productsItens,
      indices,
    };
  }, [newProducts, productsData]);

  useEffect(() => {
    fetchProductPerCategory(`${categorySelected}`);
  }, [categorySelected]);

  return (
    <S.Container>
      <Header
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
        bagPress={() => navigation.navigate('Cart')}
      />
      {loading ? (
        <Loading />
      ) : (
        <S.List
          data={data}
          stickyHeaderIndices={indices}
          renderItem={({ item }: Item | any) => item.render()}
        />
      )}
      {numberCart > 0 && (
        <S.BottomHeader>
          <Button
            onPress={() => navigation.navigate('Cart')}
            title="IR PARA O CARRINHO"
          />
        </S.BottomHeader>
      )}
    </S.Container>
  );
};

export default Home;
