import React from 'react'
import { Navbar_top } from '../Navbar/Navbar_top'
import { Footer } from '../Footer/Footer'

export const Cart = () => {
  return (
    <div className="main bg-white">
      <div>
        <Navbar_top/>
        <div className="bottom flex flex-col justify-center items-center mt-10">
          <div>
            <div className="img flex justify-center">
            <img src="https://www.reliancedigital.in/build/client/images/emptycart.png" alt="" />
            </div>
            <div className="text">
            <p className='#494A4A text-[20px]'>Your Shopping Cart is Empty</p>
            </div>
          </div>
          <div>
            <div className="btn">
              <button className='bg-[#E42529] text-white w-[250px] h-[50px] m-10' >CONTINUE SHOPPING</button>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </div>
  )
}
