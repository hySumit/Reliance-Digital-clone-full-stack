import React, { useContext, useEffect, useState } from 'react';
import { Navbar_top } from '../Navbar/Navbar_top';
import { Footer } from '../Footer/Footer';
import { AuthContext } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { isAuth, userID } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    } else {
      fetchCartData();
    }
  }, [isAuth, navigate, userID]);

  const fetchCartData = async () => {
    try {
      const response = await fetch(`https://reliance-digital-clone-full-stack.onrender.com/cart/${userID}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessKey')}`,
        },
      });

      console.log('Response:', response);

      if (!response.ok) {
        throw new Error(`Failed to fetch cart data: ${response.status}`);
      }

      const cartData = await response.json();
      console.log('Cart Data:', cartData);
      setCart(cartData);
    } catch (error) {
      console.error('Fetch Error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (product_id, quantity) => {
    // Implement add to cart functionality
  };

  const removeFromCart = async (product_id) => {
    // Implement remove from cart functionality
  };

  return (
    <div className="main bg-white">
      <Navbar_top />
      <div className="bottom flex flex-col justify-center items-center mt-10">
        {loading ? (
          <div>Loading...</div>
        ) : cart ? (
          <div>
            {cart.items.map((item) => (
              <div key={item.product._id} className="cart-item">
                <img src={item.product.image} alt={item.product.name} />
                <div>
                  <h3>{item.product.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{item.product.price}</p>
                  <button onClick={() => removeFromCart(item.product._id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="img flex justify-center">
              <img src="https://www.reliancedigital.in/build/client/images/emptycart.png" alt="" />
            </div>
            <div className="text">
              <p className="#494A4A text-[20px]">Your Shopping Cart is Empty</p>
            </div>
          </div>
        )}
        {error && <div className="error">{error}</div>}
        <div className="btn">
          <button className="bg-[#E42529] text-white w-[250px] h-[50px] m-10" onClick={() => addToCart(123, 1)}>
            ADD ITEM TO CART
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
