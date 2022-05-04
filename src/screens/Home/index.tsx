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

      const newProductsResponse = await getAllProducts(5);
      const productsResponse = await getAllProducts();

      setNewProducts(newProductsResponse.data);
      setProducts(productsResponse.data);
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
            data={products}
            renderItem={({ item }: IProduct) => (
              <Product addInner widthFull item={item} />
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
            renderItem={({ item }: IProduct) => <Product item={item} />}
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
  }, [products]);

  useEffect(() => {
    console.log('category selected', categorySelected);
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
          renderItem={({ item }) => item.render()}
        />
      )}
    </S.Container>
  );
}

export default Home;
