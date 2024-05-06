import React, { useContext, useEffect, useState } from 'react';
import { Navbar_top } from '../Navbar/Navbar_top';
import { Footer } from '../Footer/Footer';
import { AuthContext } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { isAuth, accessKey } = useContext(AuthContext); // Assuming accessKey is available from AuthContext
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        if (!isAuth) {
          navigate('/login');
          return;
        }

        const response = await fetch('https://reliance-digital-clone-full-stack.onrender.com/cart/', {
          method: 'GET',
          headers: {
            authorization: `Bearer ${accessKey}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch cart data');
        }

        const cartData = await response.json();
        setCartItems(cartData.items);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartData();
  }, [isAuth, navigate, accessKey]);

  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner component
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <div className="main bg-white">
      <Navbar_top />
      <div className="bottom flex flex-col justify-center items-center mt-10">
        {cartItems.length === 0 ? (
          <div>
            <div className="img flex justify-center">
              <img src="https://www.reliancedigital.in/build/client/images/emptycart.png" alt="Empty Cart" />
            </div>
            <div className="text">
              <p className="#494A4A text-[20px]">Your Shopping Cart is Empty</p>
            </div>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.product._id} className="cart-item">
                <img src={item.product.product_image} alt={item.product.product_name} />
                <div>
                  <h3>{item.product.product_name}</h3>
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
