import Product from '#/components/Product';
import { getAllProducts } from '#/services/api';
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
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchData = async () => {
    try {
      const productsResponse = await getAllProducts('jewelery', 5);
      setProducts(productsResponse.data);
    } catch (error) {
      console.log('err:::', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { data, indices } = useMemo(() => {
    const items: Item[] = [
      {
        key: 'news_products',
        render: () => <Divider title="Novidades" />,
        isTitle: true,
      },
      {
        key: 'products',
        render: () => (
          <S.List
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{ paddingHorizontal: 20 }}
            data={products}
            renderItem={({ item }: IProduct) => <Product item={item} />}
          />
        ),
      },
    ];

    const indices: number[] = [];
    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    };
  }, [products]);

  return (
    <S.Container>
      <Header />
      <S.List
        data={data}
        stickyHeaderIndices={indices}
        renderItem={({ item }) => item.render()}
      />
    </S.Container>
  );
}

export default Home;
