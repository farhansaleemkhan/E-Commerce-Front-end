    // const addToCart=(productId, quantity, )=>{
    //     const product=products.find(product=>product.id === productId);
    //     const item=cart.items.find(item=>item.product.id===productId);
        // if(item){
        //     setCart({
        //         ...cart,items:cart.items.map(i=>{
        //             if(i.product.id===productId){
        //                 return {product, quantity:i.quantity+quantity};
        //             }
        //             return i;
        //         })
        //     });
        // }
        // else{
        //     setCart({
        //         ...cart,items:[...cart.items,{product, quantity}]
        //     });
        //}
        // };
      //   if (item) {
      //     const updatedItem = { ...item, quantity: item.quantity + quantity };
      //     const updatedItems = cart.items.map(item => item.productId.id === productId.id ? updatedItem : item);
    
      //     setCart({ ...cart, items: updatedItems });
      //   } else {
      //     setCart({ ...cart, items: [...cart.items, { productId, quantity }] });
      //   }
      // };

      //     setCart((prevCart) =>
    //   prevCart.filter((item) => item.id !== productId)
    // );
     // const updateCartItemQuantity=(productId, quantity)=>{
        // setCart((prevCart) => {
        //     const updatedCart = [...prevCart];
        //     const productIndex = prevCart.findIndex(
        //       (item) => item.id === productId
        //     );
        //     updatedCart[productIndex].quantity = quantity;
        //     return updatedCart;
        //   });

    //     const updatedCart=cart.items.find(i=>i.products.id===productId);
    //     if(updatedCart){
    //         setCart({
    //             ...cart,items:cart.items.map(i=>{
    //                 if(i.products.id === productId){
    //                     return{...i, quantity};
    //                 }
    //                 return i;
    //             })
    //         });
    //         setCart(updatedCart);
    //     }
    // };

    // const getTotalPrice=()=>{
    //     const totalPrice = cart.reduce(
    //         (total, item) => total + item.price * item.quantity, 0);
    //         console.log(totalPrice);
    //       return totalPrice;
    // }