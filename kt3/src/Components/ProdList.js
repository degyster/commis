import React, { useEffect, useState } from 'react';
import ProdItem from './ProdItem';

function ProdList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => setProducts(json.products))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const deleteProduct = (productId) => {
        setProducts(prevProducts =>
            prevProducts.filter(product => product.id !== productId)
        );
    };

    return (
        <div className='list'>
            {products.map(product => (
                <ProdItem
                    key={product.id}
                    id={product.id}
                    img={product.images[0]}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    onDelete={deleteProduct}
                />
            ))}
        </div>
    );
}

export default ProdList;
