import Loading from '#/components/Loading';
import Product from '#/components/Product';
import { getAllProducts, getProductsPerCategory } from '#/services/api';
import React, { useEffect, useMemo, useState } from 'react';
import Divider from './components/Divider';
import Header from './components/Header';

import * as S from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

function Home() {
  const [newProducts, setNewProducts] = useState<IProduct[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [categorySelected, setCategorySelected] = useState<string>();
  const [showNewProducts, setShowNewProducts] = useState<boolean>(true);

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
    setCategorySelected('últimos');
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
            data={products}
            renderItem={({ item }) => (
              <Product addInner widthFull item={item as IProduct} />
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
            renderItem={({ item }) => <Product item={item as IProduct} />}
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
  }, [newProducts, products]);

  useEffect(() => {
    fetchProductPerCategory(`${categorySelected}`);
  }, [categorySelected]);

  return (
    <S.Container>
      <Header
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
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
    </S.Container>
  );
}

export default Home;
