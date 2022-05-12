type IProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type ICard = {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
};

type IProductState = {
  carts: ICard[];
  products: Array;
  numberCart: number;
};
