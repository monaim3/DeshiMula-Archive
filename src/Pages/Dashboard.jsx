import React, { use, useContext, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { cartContext } from '../App';

const Dashboard = () => {
      const {cart, wishList, setCart, setWishList} = useContext(cartContext)
    const [filter, setfilter] = useState("price");

  const sorttedCart=cart.sort((a,b)=>{
    if(filter==="price"){
        return a.price-b.price
    }else if (filter==="rating"){
        return b.rating-a.rating
    }
    })
  


    useEffect(() => {
        setCart(sorttedCart);
    }, [filter]);

   const handlePurchase = () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");   
            return;
        }
        alert("Purchase successful!");      
        setCart([]);

    }
    
    const totalCose=cart.reduce((acc,item)=>acc+item.price,0)
    return (
        <div>
            <Tabs defaultValue="account" className="w-[800px]mx-auto ">
                <TabsList className="grid w-3/4 mx-auto grid-cols-2">
                    <TabsTrigger value="account">Cart</TabsTrigger>
                    <TabsTrigger value="password">WishList</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1>Cart</h1>
                        </div>
                        <div className='flex gap-5'>
                            <h4>Total cost: {totalCose.toFixed(2)}</h4>
                            <select className='border rounded-4xl' value={filter} onChange={(e) => setfilter(e.target.value)}>
                                <option value="price">Sort By Price</option>
                                <option value="rating">Sort By Rating</option>
                                
                            </select>
                            <Button onClick={handlePurchase} className="bg-purple-500">Purchase</Button>
                        </div>
                    </div>
                    <div>
                        {cart.map((item) => (
                            <div key={item.product_id} className="flex justify-between items-center border-b py-2">
                                <img src={item.product_image} alt={item.product_title} className="w-16 h-16 object-cover" />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.product_title}</h3>
                                    <p className="text-sm text-gray-600">${item.price}</p>
                                    <p>Rating: {item.rating}</p>
                                </div>
                                <Button className="bg-red-500 text-white">Remove</Button>
                            </div>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="password">

                    <h1>WishList content</h1>
                    <div>
                        {wishList.map((item) => (
                            <div key={item.product_id} className="flex justify-between items-center border-b py-2">
                                <img src={item.product_image} alt={item.product_title} className="w-16 h-16 object-cover" />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.product_title}</h3>
                                    <p className="text-sm text-gray-600">${item.price}</p>
                                    <p>Rating: {item.rating}</p>
                                </div>
                                <Button className="bg-red-500 text-white">Remove</Button>
                            </div>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Dashboard;