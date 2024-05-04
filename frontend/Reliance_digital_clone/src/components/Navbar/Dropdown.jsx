import React, { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

export const Dropdown = ({ val, colors,b1,b2,b3,
    b4,
b5,
b6,
b7,
p1,
p2,
p3,
p4,
p5,
p6,
p7,
p8,
p9,
p10,
p11,
p12,
p13
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Menu isLazy isOpen={open} onClose={handleClose}  >
      <MenuButton
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center" >
        {/* {icon}  */}
        {val}
        <IoIosArrowDown />
        </div>
      </MenuButton>
      <MenuList
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        autoFocus={false}
        margin={"-6px"}
      >
        
        <MenuItem style={colors} className="" >
            <div className="main flex gap-[80px]">
                <div className="top">
                    <div className="inner">
                    <a href="">{b1}</a>
                    </div>
                    <div className="inner">
                        <a href="">{b4}</a>
                    </div>
                    <div className="li flex flex-col m-2">
                        <a href="">{p1}</a>
                        <a href="">{p2}</a>
                        <a href="">{p3}</a>
                        <a href="">{p4}</a>
                        <a href="">{p5}</a>
                    </div>
                    <div className="access flex flex-col">
                        <a href="">Accessories</a>
                        <a className="mx-1" href="">{p8}</a>
                        <a className="mx-1" href="">{p9}</a>
                        <a className="mx-1" href="">{p10}</a>
                        <a className="mx-1" href="">{p11}</a>
                        <a className="mx-1" href="">{p12}</a>
                        <a className="mx-1" href="">{p13}</a>
                    </div>
                </div>
                <div className="top">
                    <div className="inner">
                    <a href="">{b2}</a>
                    <div className="tabs flex flex-col mx-3 ">
                        <a href="">{p6}</a>
                        <a href="">{p7}</a>
                    </div>
                    </div>
                    <div className="inner">
                        <a href="">{b5}</a>
                    </div>
                </div>
                <div className="top">
                    <div className="inner">
                    <a href="">{b3}</a>
                    </div>
                    <div className="inner">
                        <a href="">{b6}</a>
                    </div>
                </div>
            </div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};