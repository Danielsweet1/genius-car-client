import React from 'react';
import img1 from '../../../assets/images/products/1.png'
import img2 from '../../../assets/images/products/2.png'
import img3 from '../../../assets/images/products/3.png'
import img4 from '../../../assets/images/products/4.png'
import img5 from '../../../assets/images/products/5.png'
import img6 from '../../../assets/images/products/6.png'
import ProductCard from './ProductCard/ProductCard';

const Products = () => {

    const products = [
        {
            name: 'Car Engine Plug',
            id: 1,
            img: img1,
            price:"30.00"
        },
        {
            name: 'Car Air Filter',
            id: 2,
            img: img2,
            price:"30.00"
        },
        {
            name: 'Cools Led Light',
            id: 3,
            img: img3,
            price:"30.00"
        },
        {
            name: 'Cools Led Light',
            id: 4,
            img: img4,
            price:"30.00"
        },
        {
            name: 'Cools Led Light',
            id: 5,
            img: img5,
            price:"30.00"
        },
        {
            name: 'Cools Led Light',
            id: 6,
            img: img6,
            price:"30.00"
        },
    ]
    return (
        <div className='text-center my-20'>
            <p className='text-xl text-orange-500 font-bold'>Popular Products</p>
            <h3 className='text-4xl font-bold my-3'>Browse Our Products</h3>
            <p>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <ProductCard
                    key={product.id}
                    product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;