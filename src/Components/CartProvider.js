import React, { useState} from "react";

// const initalCart = {
//     items: [],
//     initalPrice:0
// };
  
const initalProduct =[
    {id:1, Itemname: 'Eggs', Itempic: 'https://wallpaper.dog/large/20488321.jpg', Price: 12.00},
    {id:2, Itemname: 'Wheat', Itempic: 'https://i.brecorder.com/primary/2023/01/63b5f7ee5365e.jpg', Price: 16.00},
    {id:3, Itemname: 'Rice', Itempic: 'https://media.istockphoto.com/id/153737841/photo/rice.jpg?b=1&s=170667a&w=0&k=20&c=SF6Ks-8AYpbPTnZlGwNCbCFUh-0m3R5sM2hl-C5r_Xc=', Price: 15.00},
    {id:4, Itemname: 'Grains', Itempic: 'https://www.shutterstock.com/image-photo/top-view-veriety-natural-organic-260nw-1514514830.jpg', Price: 11.00},
    {id:5, Itemname: 'Sugar', Itempic: 'https://gnnhd.tv/media/3880/sugar.jpg', Price: 5.00},
    {id:6, Itemname: 'Fruit Juices', Itempic: 'https://static.toiimg.com/thumb/msid-80850219,width-800,height-600,resizemode-75,imgsize-735181,pt-32,y_pad-40/80850219.jpg', Price: 15.00},
    {id:7, Itemname: 'Fries', Itempic: 'https://cdn.britannica.com/34/206334-050-7637EB66/French-fries.jpg', Price: 12.00},
    {id:8, Itemname: 'Burger', Itempic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_iYBQESgEZ8J1wYNPSzXY9i2Kt1VKD-MPnx2JAWYSA&s', Price: 9.00},
    {id:9, Itemname: 'Shawrma Bread', Itempic: 'https://www.cookwithkushi.com/wp-content/uploads/2020/04/IMG_8701d.jpg', Price: 6.00},
    {id:10, Itemname: 'Brown Bread', Itempic: 'https://www.shutterstock.com/image-photo/healthy-wholemeal-bread-on-wooden-260nw-547213069.jpg', Price: 13.00},
    {id:11, Itemname: 'Jam', Itempic: 'https://media.istockphoto.com/id/533725826/photo/strawberry-jam-on-the-bread.jpg?s=612x612&w=0&k=20&c=MdQ4RU4UARbsIU3F0o6THRE3nLrcnsL46X4D5j9A3QA=', Price: 9.00},
    {id:12, Itemname: 'Coke Cane', Itempic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7oLZ3KGxAlncycYlXEeGEp4Ty8QOb8Bp4SlOex7v&s', Price: 4.00}
]

export const CartContext = React.createContext({
  cart: [],
  products: initalProduct,
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItemQuantity: () => {},
  decreaseQuantity:()=>{},
  clearCart:()=>{},
  getTotalPrice:()=>{},
});

const CartProvider = ({ children }) => {

    const [cart, setCart]=useState([]);
    const [products]=useState(initalProduct);
  
      const addToCart = (product) => {
            const initialProductIndex = cart.findIndex((item) => item.id === product.id);
            if (initialProductIndex !== -1) {
                const updatedCart = [...cart];
                updatedCart[initialProductIndex].quantity += 1;
                setCart(updatedCart);
            } else {
                setCart([...cart, { ...product, quantity: 1 }]);
            }
    };
    const removeFromCart=(productId)=>{
        setCart(
          cart.filter((i)=>i.id !== productId.id)
        );
  };
   
  const decreaseQuantity=(product)=>{
    const initialProductIndex = cart.findIndex((item) => item.id === product.id);
  if (initialProductIndex !== -1) {
    const updatedCart = [...cart];
    if (updatedCart[initialProductIndex].quantity === 1) {
      updatedCart.splice(initialProductIndex, 1);
    } else {
      updatedCart[initialProductIndex].quantity -= 1;
    }
    setCart(updatedCart);
  }
  }
    const updateCartItemQuantity = (productId, quantity) => {
      const updatedItems = cart.items.map(item => item.product.id === productId ? { ...item, quantity } : item);
      setCart({ ...cart, items: updatedItems });
    };

    const clearCart = () => {
      setCart([]);
    };

    const getTotalPrice = () => {
      let totalPrice = 0;
      cart.forEach((item) => {
        totalPrice += item.Price * item.quantity;
      });
      return totalPrice.toFixed(2);
    };
  return (
    <>
      <CartContext.Provider value={{cart, products, addToCart, removeFromCart,decreaseQuantity, updateCartItemQuantity, clearCart, getTotalPrice}}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;