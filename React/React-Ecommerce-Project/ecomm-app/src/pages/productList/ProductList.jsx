import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './productList.css';

import Loader from '../../components/loader';

const ProductList = () => {

    const {categoryName} = useParams();
    console.log(categoryName);
   
    const {data: products, error, isLoading} = useFetch(`https://fakestoreapi.com/products/category/${categoryName}`, [])
    console.log(products);
    return (
        <>
           <h1 className="pl-heading">Product List</h1>

           {
            isLoading ? (
                <Loader />
            ): (
   
                <div className='product-list'>
                    {
                        products && products.map((product)=>{
                            return (
                                <>
                                   {/* <Product  key={product.id} product={product}/> */}
                                   Products: { product.title }
                                </>
                            )
                        })
                    }
                </div>
            )
           }
        </>
    )
}

export default ProductList;