import { Card } from '../Card';
import { Thumbnail } from '../Thumbnail';
import { Link } from 'react-router-dom';
import React from "react";


interface Props {
  product: Product
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

export const ProductListRow = ({ product }) => {
  return (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
      }}
    >
      <Thumbnail description={product.description} image={product.image}/>
      <Link key={product.id} to={`${product.id}`}>
        {product.title}
      </Link>
    </Card>
  );
};
