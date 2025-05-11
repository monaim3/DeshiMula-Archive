import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { cartContext } from '../../App';

const ProductDeatils = () => {

    const [Datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params =useParams();
    const { id } = params;
    const { cart, wishList, setCart, setWishList } = useContext(cartContext);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("../Datas.json");
          const data = await response.json();
          setDatas(data);
        } catch (error) {
          console.error("Error fetching data:", error);
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
   
    const handleAddToCart = (product) => {  
       setCart((prevCart)=>([...prevCart, product]))
    }
    const handleAddToWishlist = (product) => {
        setWishList((prevWishlist) => ([...prevWishlist, product]));
    }
    const clickedProduct = Datas.find((item) => item.product_id === id);
    if (!clickedProduct) {
        return <p className="text-center">Product not found.</p>;
    }

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error loading data.</p>;
    return (
        <div>
           <div className='flex  justify-center items-center'>
                <img
                    src={clickedProduct.product_image}
                    alt={clickedProduct.product_title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                />
            </div>

            <div>
                 <h3 className="text-lg font-semibold">{clickedProduct.product_title}</h3>
                <p className="text-sm text-gray-600">{clickedProduct.description}</p>
                <p className="mt-2 font-bold text-purple-600">${clickedProduct.price}</p>
                <Button onClick={()=>handleAddToCart(clickedProduct)}> Add to Cart</Button>
                <Button onClick={()=>handleAddToWishlist(clickedProduct)}> Add to Wishlist</Button>
            </div>
           </div>
       
    );
};

export default ProductDeatils;