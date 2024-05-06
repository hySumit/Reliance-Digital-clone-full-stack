import React, { useContext, useEffect, useState } from 'react';
import { Navbar_top } from '../Navbar/Navbar_top';
import { Footer } from '../Footer/Footer';
import { AuthContext } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    } else {
      // Fetch cart data
      fetchCartData();
    }
  }, [isAuth, navigate]);

  const fetchCartData = async () => {
    try {
      const accessKey = localStorage.getItem('accessKey');
      if (!accessKey) {
        console.error('Access key not found');
        return;
      }

      const response = await fetch('https://reliance-digital-clone-full-stack.onrender.com/cart/', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessKey}`,
        },
      });

      if (!response.ok) {
        console.error('Failed to fetch cart data');
        return;
      }

      const cartData = await response.json();
      setCartItems(cartData.items);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  return (
    <div className="main bg-white">
      <Navbar_top />
      <div className="bottom flex flex-col justify-center items-center mt-10">
        {cartItems.length === 0 ? (
          <div>
            <div className="img flex justify-center">
              <img src="https://www.reliancedigital.in/build/client/images/emptycart.png" alt="" />
            </div>
            <div className="text">
              <p className="#494A4A text-[20px]">Your Shopping Cart is Empty</p>
            </div>
          </div>
        ) : (
          <div>
            {/* Iterate over cartItems and display each item */}
            {cartItems.map((item) => (
              <div key={item.product._id} className="cart-item">
                <img src={item.product.image} alt={item.product.name} />
                <div>
                  <h3>{item.product.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{item.product.price}</p>
                  {/* Add any other details you want to display */}
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="btn">
          <button className="bg-[#E42529] text-white w-[250px] h-[50px] m-10">CONTINUE SHOPPING</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};