import React from "react";
import { Navbar_top } from "../Navbar/Navbar_top";
import { Dropdown } from "../Navbar/Dropdown";
import Slider from "../Image-slider/Slider";
import { Cards } from "./Cards";
import { ProductSlider } from "../Image-slider/Product.Slider";
import { PhoneSlider } from "../Image-slider/Phone.slider";
import { StableSlider } from "../Image-slider/StableSlider";
import { Footer } from "../Footer/Footer";
export const Home = () => {
  const dropDownMenuColor = {
    color: "white",
    backgroundColor: "#003380",
  };

  const images = [
    "https://www.reliancedigital.in/medias/Midnight-Sale-Banner-New.jpg?context=bWFzdGVyfGltYWdlc3wxMjQ2MDV8aW1hZ2UvanBlZ3xpbWFnZXMvaDBmL2hmNi8xMDExMDU5MDc0NjY1NC5qcGd8NzY5ZGIzNjVlZDdiMWIxYWE2NmE1YjQ2YzUyZDQ5NWRjNDA5YmUzNzA2ZTNmYzcxNmE4ZjZkZGE4YmNjMTJkZQ",
    "https://www.reliancedigital.in/medias/Split-OnePlus-CE3-CE-4-banner-30-April-D.jpg?context=bWFzdGVyfGltYWdlc3wxNTE3OTN8aW1hZ2UvanBlZ3xpbWFnZXMvaGFhL2hiMi8xMDEzOTE1NzM5NzUzNC5qcGd8MmExYzFlNjBjYWIxZmM0ZGMzMDliNTZmZDRjOTZiZDBiNDM3ZmRjZmZjODQyNWNhNzQ0Mjk1MDhmMDU4YTY1NQ",
    "https://www.reliancedigital.in/medias/Catch-Grab-discounts-LED-TV-Banner-D-rev-1.jpg?context=bWFzdGVyfGltYWdlc3wyMjAxMDB8aW1hZ2UvanBlZ3xpbWFnZXMvaGE0L2hmNi8xMDEzMjEwMDUxMzgyMi5qcGd8MmRmZDI3NWMyNWQwMTEwYTZhZjIzODFiOGE2MTRmNjBjZDY0NDYwZmFjZjRmZDY5ODEyOTllOTM4NzQxZmMzNg",
    "https://www.reliancedigital.in/medias/Summer-Ready-Sale-Beat-the-Heat-Banner-freebie-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjUwOTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDhiL2hiYy8xMDEzNjIxMTEyODM1MC5qcGd8MDg5NGZlOGIzYzFmNTZkMjU2YzZiMWNhODQxYmJiOTM3OGQ2MGIyNzkzODVkNThiMzg2ZjhkNTc1MTQxZmFhZQ",
    "https://www.reliancedigital.in/medias/Great-deals-on-the-Newest-ACs-banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjU3MTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDFmL2hhZC8xMDEyOTU4MjUyMjM5OC5qcGd8MjQyZDdjZjdjOWQ4ZjgwODNiOTVkYjU5ODZlZjE0YTE5MWJkYWViMjdkMzhiZDcyY2E3MjIwY2ExYzIwNjJkZA",
    "https://www.reliancedigital.in/medias/Premium-Audio-Banner-1365x260px.jpg?context=bWFzdGVyfGltYWdlc3wxNTY5OTF8aW1hZ2UvanBlZ3xpbWFnZXMvaDVkL2g5NC8xMDExMjkyMzEwNzM1OC5qcGd8Zjc4N2YxMjBiNzM4MTE2MWM5MGU5OWEzNmMxZDkwYjY1ODM2NmFhODllOThjMmQyY2MxZTJjNzUwZDQ3OTI0Nw",
    "https://www.reliancedigital.in/medias/AC-ROI-At-Rs-1-Carousal-Banner-01-03-2024.jpg?context=bWFzdGVyfGltYWdlc3w5NDAwOXxpbWFnZS9qcGVnfGltYWdlcy9oMDEvaGMzLzEwMTMyMDk5NDY1MjQ2LmpwZ3wwZTBkYTJkNGQ0YWY4MTA0OWFmZjZmYWQ3YjdkZTUyNjliOWU1NGIzMzc2ZDM0YzFiNDdiMGQ3Mjc4MWNlZDlm",
  ];

  const cardImages = [
    "https://www.reliancedigital.in/medias/Apple-Watch-Series-9.jpg?context=bWFzdGVyfGltYWdlc3w1MDc3NnxpbWFnZS9qcGVnfGltYWdlcy9oODAvaGZjLzEwMTM4NjMxMDQ1MTUwLmpwZ3wxMmZlZjg3ZjFlZTlhMGViZTE3MGUwNzljMGY4ZWJiYzdjM2UzMDRmYTA2YzFlMDFhZjM4YjAxNGI5MjAxYWVi",
    "https://www.reliancedigital.in/medias/iPhone-15-Rs.66-900.jpg?context=bWFzdGVyfGltYWdlc3w0NTI2MHxpbWFnZS9qcGVnfGltYWdlcy9oNDUvaGY0LzEwMTM4Njk3NjYyNDk0LmpwZ3xkODZiZDJlOTk0N2M0ODE3YmYyNGUyNmVhNzU3NTA1Yjc2Yzc5ZGQyOWYwZDUxOTY2NTk0N2YyNzQyY2Y4ZjA5",
    "https://www.reliancedigital.in/medias/iPhone-15-Plus-Rs.-76-500.jpg?context=bWFzdGVyfGltYWdlc3w0NTYxMnxpbWFnZS9qcGVnfGltYWdlcy9oZDkvaGEyLzEwMTM4Njk3NzI4MDMwLmpwZ3w0ZmQwZmFkYzc4MjdmNTQ5ZjkyYmU0YjVlYmE5NTliYjM5MzU1NjgxNTYwNTQzOGZlNWExYjMxODQ5NTI3NmI0",
    "https://www.reliancedigital.in/medias/Cool-Your-Space-Air-Coolers-1-.jpg?context=bWFzdGVyfGltYWdlc3w0NjMwMnxpbWFnZS9qcGVnfGltYWdlcy9oMTIvaGYxLzEwMTE5OTY3NDQwOTI2LmpwZ3xhMWFhNDliZGQ4YmUwNTQwMWNiODZkZTc2ZDg1M2U1OTMzNmE5ZDlkNzAwZTZjMmNjMzBkNTU0MjkwYjhjNjE4",
  ];

  const monitor_url =
    "https://reliance-digital-clone-full-stack.onrender.com/products/monitor";

  const banner1_url =
    "https://www.reliancedigital.in/medias/Mega-Summer-Bonanza-Campaign-Main-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxNTgyMjR8aW1hZ2UvanBlZ3xpbWFnZXMvaDUzL2g3Yy8xMDEzOTE1NzY1OTY3OC5qcGd8NjIwNGZmMzI1MmIxOTkxMzYyMTlmNDM5ODMwMmMxM2Q4NDk2NjI1NGU2MTdhOTEzN2Y5Y2JmYWNkNDBmMTgxNA";

  const cooler_url =
    "https://reliance-digital-clone-full-stack.onrender.com/products/cooler";
  const ac_url =
    "https://reliance-digital-clone-full-stack.onrender.com/products/ac";

  const banner2_url = [
    "https://www.reliancedigital.in/medias/Honor-TWS-1440x120.jpg?context=bWFzdGVyfGltYWdlc3w1NTYxMHxpbWFnZS9qcGVnfGltYWdlcy9oN2QvaDRmLzEwMTMxMTgzODI5MDIyLmpwZ3xmZmY3YjhkZmRkY2RlMDY2MTZhZDg0NzQ5ODgyZWZlODJmMGI2MjI4YjlkYTc1ZjMwMzA4YTNjOGYyNmM4MWFk",
    "https://www.reliancedigital.in/medias/Microwave-Strip-Banner-1440x120-px.jpg?context=bWFzdGVyfGltYWdlc3w1NjE0MnxpbWFnZS9qcGVnfGltYWdlcy9oNWYvaDQzLzEwMTM2MjI2MjAxNjMwLmpwZ3w4OGNiZTNkYjI2YWQyNmUxZDE0ZTJiOTM0ZGNmYjcyZTE0Mjc5M2E2M2M3ODEyYTljNjZlMzZhZGVjNDMxYTAy",
    "https://www.reliancedigital.in/medias/Air-fryer-Strip-Banner-1440x120-px.jpg?context=bWFzdGVyfGltYWdlc3w1NDMxOXxpbWFnZS9qcGVnfGltYWdlcy9oNTgvaDRlLzEwMTM2MjI2MzMyNzAyLmpwZ3w3YzhiNjE1OTY2MmZhZmIwNGE2ZGE1NjU2OWQzNDE1MGY3M2VmM2M4MjYzODcwMGY0NWRhMzdhMWM5YWU0ZTE1",
  ];

  const headphone_url =
    "https://reliance-digital-clone-full-stack.onrender.com/products/phones";

  const phone_card_url = [
    "https://www.reliancedigital.in/medias/Vivo-T3-GDOE-340-x-255.jpg?context=bWFzdGVyfGltYWdlc3w0NTkzMHxpbWFnZS9qcGVnfGltYWdlcy9oNTEvaDc3LzEwMTI5MTMwMDYxODU0LmpwZ3w2N2RlMDA3YTk2ZGI4ODE1ODgyZmRmMzRlYmIzZjdhZjFiNmEzNDZkYTE2MWI1YWJlMzE0ODJhZDQ0OWU5Njk2",
    "https://www.reliancedigital.in/medias/Redmi-A2-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w1MDU3NHxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDU4LzEwMTE0Njk4MjQ4MjIyLmpwZ3xiMGFlZWQwZTgyNTg2YTIxN2ZiNWM5MjZhNDFlM2E3YjEwZDRhMWI2OGFiOGNjOTA4MzcxNDk3ZTQzMWIyYjYw",
    "https://www.reliancedigital.in/medias/GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w1NTM4N3xpbWFnZS9qcGVnfGltYWdlcy9oZjIvaDVhLzEwMTE3NjY3NjUxNjE0LmpwZ3w0N2ZkNTQxODA0MzViY2NiNjA4MTBhYzc0ODY0NTNiMWJhMTdlOGRjMzU5MzVmMjk1MDJkMzE5ZmQ4NmRiOWE2",
    "https://www.reliancedigital.in/medias/Samsung-F14-5G-GDOE-340x255.jpg?context=bWFzdGVyfGltYWdlc3w1MDgyNXxpbWFnZS9qcGVnfGltYWdlcy9oNjAvaDA4LzEwMTM4MzQ1MTQ0MzUwLmpwZ3wxODFmYmY4OGQ3MmNjN2M2MGY1OTg3NTZiZDUxZDNiNjgzYWU4NzE0MDMyZTcxYTY3ZWI1NTdmYThmMDQzNDkz",
  ];

  const product_row1 = [
    "https://www.reliancedigital.in/medias/Best-Deals-on-Refrigerators-1.jpg?context=bWFzdGVyfGltYWdlc3w0MzkyNnxpbWFnZS9qcGVnfGltYWdlcy9oNzIvaDViLzEwMTI2MzAzMTY2NDk0LmpwZ3xiNmI2OGM0Y2ZjMmIyOGY4MTdkNjQ3NzFiMTE3MzZkMzRmMTEyZWI3YTUxZTgzMjVlMjI4OTY5NTY0Y2ZlOGU5",
    "https://www.reliancedigital.in/medias/8-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w1MzYwOXxpbWFnZS9qcGVnfGltYWdlcy9oMzIvaGVlLzEwMTA1MzMyODkxNjc4LmpwZ3wyODdiMzc4MGE0OTRmNGQyMjVlYjJjYWE1ODg1OWVhM2NkMDZkMThhMDVjM2Y0NzA1NzA2YWEzNzIwMTg5ZTg1",
    "https://www.reliancedigital.in/medias/8-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w1MzYwOXxpbWFnZS9qcGVnfGltYWdlcy9oMzIvaGVlLzEwMTA1MzMyODkxNjc4LmpwZ3wyODdiMzc4MGE0OTRmNGQyMjVlYjJjYWE1ODg1OWVhM2NkMDZkMThhMDVjM2Y0NzA1NzA2YWEzNzIwMTg5ZTg1",
    "https://www.reliancedigital.in/medias/6-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w0NDU1NnxpbWFnZS9qcGVnfGltYWdlcy9oYzEvaGM3LzEwMTA1MzMyNzYwNjA2LmpwZ3wwZGZmYjU1M2UwZDM4ZTAxMGZhMDZlMDVhOWRiNTZkNDVmY2M1NzJjMGQ5ZDA1ZDk4YmQ1M2ZkYWNiNjc4YzNk",
  ];
  const product_row2 = [
    "https://www.reliancedigital.in/medias/Top-Deals-on-Home-Kitchen-Appliances-GDOE-Banner-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w1MjAzOHxpbWFnZS9qcGVnfGltYWdlcy9oZjYvaDMwLzEwMTE0Njg4NTE2MTI2LmpwZ3w0YWY2YTdmMTgyNmJjY2Q0MzBhYTEyNDAzMWE3MjExMmY4ZjMxZjRjNmVjZWVlZTQ3MWI2ZDlkMTdmYjkyZDI4",
    "https://www.reliancedigital.in/medias/GDOE-JioPrime-x-YouTube-Banner-340x255-rev-1.jpg?context=bWFzdGVyfGltYWdlc3w3MjA1NnxpbWFnZS9qcGVnfGltYWdlcy9oMDMvaGE0LzEwMTI5NjIwMTcyODMwLmpwZ3xkMjI1NzM0ZTNlMGNmMGE4OWJmZDQzMGU3YmE3MDYwMDRiOTgwZjUwNDA5YmM5MGQwZDQ5Mjg0OWY0MDNhMzIw",
    "https://www.reliancedigital.in/medias/3-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w0MTYxMXxpbWFnZS9qcGVnfGltYWdlcy9oZTcvaGQ0LzEwMTA1MzMyNjI5NTM0LmpwZ3wwZDY4NWUwOWM3NmI3ZjlkZmVjMmY3N2FmMWZiNjdmOTc3YWEzMjMxNWFhMGEzM2ZmNjVhN2JiN2E4MWNmNmU2",
    "https://www.reliancedigital.in/medias/Apple-Watch-Series-9.jpg?context=bWFzdGVyfGltYWdlc3w1MjY2NHxpbWFnZS9qcGVnfGltYWdlcy9oMjkvaDRmLzEwMTI1MTcwMjc4NDMwLmpwZ3wwYjZlODE1YmQ0ZTdmNTgzODc2M2JkMzk0ZWNlZTc0YWUwODc3ZTZjZmNlMDMyZGY1NDNmNDgxNWFkNjljOWFk",
  ];

  const banner3 = [
    "https://www.reliancedigital.in/medias/1365X260.png?context=bWFzdGVyfGltYWdlc3wzMDc0NDV8aW1hZ2UvcG5nfGltYWdlcy9oZWMvaDJmLzEwMTI3NzUyMDM2MzgyLnBuZ3wyYjY0NjYyMTAxN2ZjODQ3NGI0MmIwN2ZkYmY5ZmJlYTg4MTA5YmVjOTQzMzJkZWQ2Y2VkYTU1NzMwNTg2ZTU3",
    "https://www.reliancedigital.in/medias/1365x260-with-logo.jpg?context=bWFzdGVyfGltYWdlc3wxOTc1MjR8aW1hZ2UvanBlZ3xpbWFnZXMvaGZkL2g1Zi8xMDEyNjI5NzI2ODI1NC5qcGd8MDEwNDA1NGQ0NDM3MDJjMTRmOTcwODlmZjE0ZWM4YWFhNjRjYWY1OWEyMDZmOTM1MmM4ODk5ZWUxODQ0NDAyNg",
    "https://www.reliancedigital.in/medias/Boat-wave-call-plus-banner-D-rev-1.jpg?context=bWFzdGVyfGltYWdlc3wxMjA2OTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDA2L2g4NC8xMDEzNjIxNTEyNjA0Ni5qcGd8NDA1YjRhZTAyNjhhZGY5MzRiMmFmM2EyMWNjMzBmYzM4NjE4ZjgwODZhYzdiYmVmMGQ2MDM4ZDA2NzkxM2NkZQ",
    "https://www.reliancedigital.in/medias/1365x260.jpg?context=bWFzdGVyfGltYWdlc3wyMDgxNDh8aW1hZ2UvanBlZ3xpbWFnZXMvaGRkL2g1OC8xMDEzOTg4MjQ1NTA3MC5qcGd8ODIxZGM2NzE2NjY5MzQ0ZWQ2MGM2NmRlNGQ4MmU3N2Y2MzNhMDQwZjU3OGUxMjRiMTk4MTY0NzA2MDE4N2MyYw",
  ];

  const banner4 = [
    'https://www.reliancedigital.in/medias/OneCard-Bank-Strip-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w0MTkwNnxpbWFnZS9qcGVnfGltYWdlcy9oNGMvaDFiLzEwMTM5MTU3NzkwNzUwLmpwZ3xiNWIxMDg1NTY1YWUwOTk1NjEzMjEzOTM0ZjhjMmMwMmM0MDQ2ODBiMTRlMjMzNTllMDFkOWI0YjE3MjI4MWMx',
    'https://www.reliancedigital.in/medias/Axis-Bank-Strip-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w1OTQzOXxpbWFnZS9qcGVnfGltYWdlcy9oYzEvaGZmLzEwMTM5MTU3OTIxODIyLmpwZ3w1ZDY5M2E1NjFhOTM0NTgwOTkwYmJmYWEzMWJjYWE5MjZmY2Y2ODBjZjcwZGEzNWQ3NDVmMjk4MzAxODViMjAy',
    'https://www.reliancedigital.in/medias/HDFC-Bank-Offer-Strip-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w2MzM1NHxpbWFnZS9qcGVnfGltYWdlcy9oNmUvaDMxLzEwMTM5OTAyOTAyMzAyLmpwZ3w3ZGEwN2I0ZGJmNDRiYTM5NGVjOWUwZTc3YWNkNDg2MThlZTNjYjYxZjNiMTIzMGNmMjljZTcwOTVkYjAwMzNj',
    'https://www.reliancedigital.in/medias/ICICI-Bank-Offer-Strip-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w2NTA1NHxpbWFnZS9qcGVnfGltYWdlcy9oODIvaDE4LzEwMTM4Njk3NDAwMzUwLmpwZ3wzMGY2NjU0ZTJlYjIwYzJhZmJhYTIxZGYxOTE0NzVkNGQ3ZWM4YmViMGFlZjQ5MDdiY2ViMDFmZWU1N2RiYmU1',
    'https://www.reliancedigital.in/medias/RD-SBI-Card-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDUwODN8aW1hZ2UvanBlZ3xpbWFnZXMvaGE2L2hiMi8xMDA3NTU4ODUyNjExMC5qcGd8OTgzOWJjZThlZDgyYWVmMmUxMWVlODdmMWRiOTMyZGQ5MjFlOTBmOGFmMDNjMGE4NmExNTdjZDlkMTM3ZTcyMw',
    'https://www.reliancedigital.in/medias/YES-Bank-1-Offer-Strip-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w2MDI5N3xpbWFnZS9qcGVnfGltYWdlcy9oODYvaDhmLzEwMTM5OTAzMDMzMzc0LmpwZ3xiMzgzMzE4YmQ3Mjk1MTg3NmEwNmY3ZTgyNTNhNzkxZjZiMmUyNWNkYWZjOWU4MTg5MGFjYWJjNzRkNTg3ZDQ1',
    'https://www.reliancedigital.in/medias/HSBC-2-Bank-Offer-Strip-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w2MjkzMHxpbWFnZS9qcGVnfGltYWdlcy9oOGMvaDUyLzEwMTM5OTAzNDI2NTkwLmpwZ3wyZWUyYzA0NGUyODQyOTg2NWQ0ZjQ5OWY0OWJmMzY5NGJjNWFkZDk4MDc5Y2NkNmU3ZGExMTQ0N2I1NjhhZWY5',
  ]

  const watches = "https://reliance-digital-clone-full-stack.onrender.com/products/watch"
  const purifiers = "https://reliance-digital-clone-full-stack.onrender.com/products/ro"


  const stableSliderREs = [
    {
      image:"https://www.reliancedigital.in/medias/Apple-Logo.png?context=bWFzdGVyfGltYWdlc3w4MjQ4fGltYWdlL3BuZ3xpbWFnZXMvaGQ3L2hmOS8xMDAyMjUyNjcxMzg4Ni5wbmd8NzUwMzQzNmYwMjJhNGI3MWQ2Y2Y3YTlmNDMwNzRiMmE2MjIzZjRlODlkMjUzZGVjZjdlYjViZWQ3MWVlY2IxNw",
      text : "Apple Store"
    },
    {
      image:"https://www.reliancedigital.in/medias/Speaker-Headset-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyNzUzN3xpbWFnZS9wbmd8aW1hZ2VzL2g1YS9oODAvOTI1MTA1MDY4NDQ0Ni5wbmd8YmMyYWJiNzRhMzk4NjMxMDRmOWRlZGI1MzVjZDk2Y2IxYTkxOGNlNjlmZjA2YTgwMGIwMjhmYTJlYmNhYjIwOA",
      text: "Speakers & Headsets"
    },
    {
      image:"https://www.reliancedigital.in/medias/Explore-Our-Range-of-Products-AC.png?context=bWFzdGVyfGltYWdlc3wxNzI3NnxpbWFnZS9wbmd8aW1hZ2VzL2hmMy9oNDMvOTg5MjQwNzQ0MzQ4Ni5wbmd8ODkxZDlkYTUxODhkM2RiOWUzMTU4ZDZhYmVkYTM3MzE2MDEyNDEzODMzNWZlZWQ5ZDQwMzNmMWM1OTliZGYwZA",
      text: "Air Conditioners"
    },
    {
      image:"https://www.reliancedigital.in/medias/iphone-pro-11-01.png?context=bWFzdGVyfGltYWdlc3wyOTc3NnxpbWFnZS9wbmd8aW1hZ2VzL2gxNi9oNWUvOTI3NjA1OTkxMDE3NC5wbmd8MzdkYzljODgzMDcyM2ZjMjJmZDI2ZjMwNjhkZmU5YjFmOTJmMGRmOTFiYzc4ZjcyMDRhMjQ5MWMyNjYwOTgxYg",
      text: "Smartphones"
    },
    {
      image:"https://www.reliancedigital.in/medias/Water-Purifier-Explore-HP-Section-Icon.png?context=bWFzdGVyfGltYWdlc3wyMzg5OHxpbWFnZS9wbmd8aW1hZ2VzL2gwNC9oMDcvMTAwNTY5NjAyMTMwMjIucG5nfDBkYmY0NzVkZDU0MjYwNzhhNDIwZjIwMDNhY2FkZDY4YTBiYWY5NTJmMmNmMjlmNTkwZDMxNmY0ZThhZWY1ZTA",
      text: "Water Purifiers"
    },
    {
      image:"https://www.reliancedigital.in/medias/TV-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0OTM4M3xpbWFnZS9wbmd8aW1hZ2VzL2g1ZC9oMTEvOTI1MTA1MDU1MzM3NC5wbmd8MThiNmU4NTZiNWI5MTE1ZGVjYjA4ZjIwM2QwZjUyMzFlOGExZTY0YmQ0MTRkYTkyN2M2MDZiYzUzZDY1ZjM4Ng",
      text: "Televisions"
    },
    {
      image:"https://www.reliancedigital.in/medias/Mixer-Explore.png?context=bWFzdGVyfGltYWdlc3wyMTk1MnxpbWFnZS9wbmd8aW1hZ2VzL2gzZi9oODcvMTAwMTE0MDU2NDc5MDIucG5nfGJjOWNlM2FkZGUxMWE1ODIyZmNjNWJiNDU1NjI4ODQyYWM1M2Q3ZWU3NDU5YTgyZjFiN2JjNmJhOGI1YzUwMDE",
      text: "Mixer Grinders"
    },
    {
      image:"https://www.reliancedigital.in/medias/Watch-180x180-27-02-2020.png?context=bWFzdGVyfGltYWdlc3w2Njk2fGltYWdlL3BuZ3xpbWFnZXMvaGQ1L2g2My85MjUzNTA3NTk2MzE4LnBuZ3w4NmEwODU5NDI5YzVlMzJjNzRlNzNlYmJkMmJmYTZjMTI2OWY0YTUxYWU3YzMzM2E3YTc5YjljZmU4ZGMyNGQ2",
      text: "Smart Wearables"
    },
    {
      image:"https://www.reliancedigital.in/medias/Laptop-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyOTAwOXxpbWFnZS9wbmd8aW1hZ2VzL2g0Mi9oNTYvOTI1MTA1MDYxODkxMC5wbmd8N2ZjYTg0ZDAyOTZmMmQ5OTZhZDNiM2M4NDg0ZDgxY2UyNzNjMmJiYzMwZTZiOGQwOWE5N2JlZDI4M2ViMGZjNw",
      text: "Laptops"
    },
  ]
  return (
    <div>

      <Navbar_top />

      <div className="navline p-3 bg-[#003380] text-white">
        <section className="hideOnFullScreen flex justify-evenly gap-[40px] text-[14px]">
          <Dropdown
            colors={dropDownMenuColor}
            val={"MOBILE & TABLETS"}
            b1={"Smartphones"}
            b2={"Headphones & Headsets"}
            b3={"AI Learning Robots"}
            b4={"Smartwatches"}
            b5={"Tablests & eReaders"}
            b6={"Power Banks"}
            b7={"Accessories"}
            p1={"Apple"}
            p2={"Samsung"}
            p3={"Fireboltt"}
            p4={"Noise"}
            p5={"Boat"}
            p6={"Every Day use Tables below 15000"}
            p7={"Premium Tablets, Above 15001"}
            p8={"Tablet Acessories"}
            p9={"Mobile Grips & Stands"}
            p10={"Car Mobile Holders"}
            p11={"Memory Cards"}
            p12={"Cables & Cords"}
            p13={"Charger & Adapters"}
          />
          <Dropdown
            colors={dropDownMenuColor}
            val={"TELEVISIONS"}
            b1={"Smartphones"}
            b2={"Headphones & Headsets"}
            b3={"AI Learning Robots"}
            b4={"Smartwatches"}
            b5={"Tablests & eReaders"}
            b6={"Power Banks"}
            b7={"Accessories"}
            p1={"Apple"}
            p2={"Samsung"}
            p3={"Fireboltt"}
            p4={"Noise"}
            p5={"Boat"}
            p6={"Every Day use Tables below 15000"}
            p7={"Premium Tablets, Above 15001"}
            p8={"Tablet Acessories"}
            p9={"Mobile Grips & Stands"}
            p10={"Car Mobile Holders"}
            p11={"Memory Cards"}
            p12={"Cables & Cords"}
            p13={"Charger & Adapters"}
          />
          <Dropdown
            colors={dropDownMenuColor}
            val={"AUDIO"}
            b1={"Smartphones"}
            b2={"Headphones & Headsets"}
            b3={"AI Learning Robots"}
            b4={"Smartwatches"}
            b5={"Tablests & eReaders"}
            b6={"Power Banks"}
            b7={"Accessories"}
            p1={"Apple"}
            p2={"Samsung"}
            p3={"Fireboltt"}
            p4={"Noise"}
            p5={"Boat"}
            p6={"Every Day use Tables below 15000"}
            p7={"Premium Tablets, Above 15001"}
            p8={"Tablet Acessories"}
            p9={"Mobile Grips & Stands"}
            p10={"Car Mobile Holders"}
            p11={"Memory Cards"}
            p12={"Cables & Cords"}
            p13={"Charger & Adapters"}
          />
          <Dropdown
            colors={dropDownMenuColor}
            val={"HOME APPLIANCES"}
            b1={"Smartphones"}
            b2={"Headphones & Headsets"}
            b3={"AI Learning Robots"}
            b4={"Smartwatches"}
            b5={"Tablests & eReaders"}
            b6={"Power Banks"}
            b7={"Accessories"}
            p1={"Apple"}
            p2={"Samsung"}
            p3={"Fireboltt"}
            p4={"Noise"}
            p5={"Boat"}
            p6={"Every Day use Tables below 15000"}
            p7={"Premium Tablets, Above 15001"}
            p8={"Tablet Acessories"}
            p9={"Mobile Grips & Stands"}
            p10={"Car Mobile Holders"}
            p11={"Memory Cards"}
            p12={"Cables & Cords"}
            p13={"Charger & Adapters"}
          />
          <Dropdown
            colors={dropDownMenuColor}
            val={"COMPUTERS"}
            b1={"Smartphones"}
            b2={"Headphones & Headsets"}
            b3={"AI Learning Robots"}
            b4={"Smartwatches"}
            b5={"Tablests & eReaders"}
            b6={"Power Banks"}
            b7={"Accessories"}
            p1={"Apple"}
            p2={"Samsung"}
            p3={"Fireboltt"}
            p4={"Noise"}
            p5={"Boat"}
            p6={"Every Day use Tables below 15000"}
            p7={"Premium Tablets, Above 15001"}
            p8={"Tablet Acessories"}
            p9={"Mobile Grips & Stands"}
            p10={"Car Mobile Holders"}
            p11={"Memory Cards"}
            p12={"Cables & Cords"}
            p13={"Charger & Adapters"}
          />
          <Dropdown
            colors={dropDownMenuColor}
            val={"CAMERAS"}
            b1={"Smartphones"}
            b2={"Headphones & Headsets"}
            b3={"AI Learning Robots"}
            b4={"Smartwatches"}
            b5={"Tablests & eReaders"}
            b6={"Power Banks"}
            b7={"Accessories"}
            p1={"Apple"}
            p2={"Samsung"}
            p3={"Fireboltt"}
            p4={"Noise"}
            p5={"Boat"}
            p6={"Every Day use Tables below 15000"}
            p7={"Premium Tablets, Above 15001"}
            p8={"Tablet Acessories"}
            p9={"Mobile Grips & Stands"}
            p10={"Car Mobile Holders"}
            p11={"Memory Cards"}
            p12={"Cables & Cords"}
            p13={"Charger & Adapters"}
          />
          <Dropdown
            colors={dropDownMenuColor}
            val={"KITCHEN APPLIANCES"}
            b1={"Smartphones"}
            b2={"Headphones & Headsets"}
            b3={"AI Learning Robots"}
            b4={"Smartwatches"}
            b5={"Tablests & eReaders"}
            b6={"Power Banks"}
            b7={"Accessories"}
            p1={"Apple"}
            p2={"Samsung"}
            p3={"Fireboltt"}
            p4={"Noise"}
            p5={"Boat"}
            p6={"Every Day use Tables below 15000"}
            p7={"Premium Tablets, Above 15001"}
            p8={"Tablet Acessories"}
            p9={"Mobile Grips & Stands"}
            p10={"Car Mobile Holders"}
            p11={"Memory Cards"}
            p12={"Cables & Cords"}
            p13={"Charger & Adapters"}
          />
          <Dropdown
            colors={dropDownMenuColor}
            val={"PERSONAL CARE"}
            b1={"Smartphones"}
            b2={"Headphones & Headsets"}
            b3={"AI Learning Robots"}
            b4={"Smartwatches"}
            b5={"Tablests & eReaders"}
            b6={"Power Banks"}
            b7={"Accessories"}
            p1={"Apple"}
            p2={"Samsung"}
            p3={"Fireboltt"}
            p4={"Noise"}
            p5={"Boat"}
            p6={"Every Day use Tables below 15000"}
            p7={"Premium Tablets, Above 15001"}
            p8={"Tablet Acessories"}
            p9={"Mobile Grips & Stands"}
            p10={"Car Mobile Holders"}
            p11={"Memory Cards"}
            p12={"Cables & Cords"}
            p13={"Charger & Adapters"}
          />
          <Dropdown
            colors={dropDownMenuColor}
            val={"ACCESSORIES"}
            b1={"Smartphones"}
            b2={"Headphones & Headsets"}
            b3={"AI Learning Robots"}
            b4={"Smartwatches"}
            b5={"Tablests & eReaders"}
            b6={"Power Banks"}
            b7={"Accessories"}
            p1={"Apple"}
            p2={"Samsung"}
            p3={"Fireboltt"}
            p4={"Noise"}
            p5={"Boat"}
            p6={"Every Day use Tables below 15000"}
            p7={"Premium Tablets, Above 15001"}
            p8={"Tablet Acessories"}
            p9={"Mobile Grips & Stands"}
            p10={"Car Mobile Holders"}
            p11={"Memory Cards"}
            p12={"Cables & Cords"}
            p13={"Charger & Adapters"}
          />
        </section>
      </div>


      <section className="banner1">
        <img src={banner1_url} alt="" />
      </section>


      <section className="slider1">
        <Slider images={images} />
      </section>


      <section className="cards">
        <Cards val={"Digital Midnight Sale"} images={cardImages} />
      </section>

      <section className="product_slider">
        <ProductSlider
          url={monitor_url}
          heading={"Limited Time Offers on Monitors"}
        />
        <ProductSlider url={cooler_url} heading={"Best Deals on Air Coolers"} />
        <ProductSlider
          url={ac_url}
          heading={"2024 New Range of ACs from Rs. 22990*"}
        />
      </section>


      <section className="banner-2">
        <Slider images={banner2_url} />
      </section>


      <section className="phone_cards">
        <Cards images={phone_card_url} val={"Top Deals on Mobiles"} />
      </section>


      <section className="prduct_slider">
        <ProductSlider
          url={headphone_url}
          heading={"Best Selling Audio Accessories"}
        />
        <PhoneSlider
          url={headphone_url}
          heading={"Smartphone Bonanza | 10% (Upto Rs.3000 off)"}
        />
      </section>


      <section className="2rows_products">
        <Cards images={product_row1} val={"Great Deals on ELectronics"} />
        <Cards images={product_row2} />
      </section>


      <section className="banner3">
        <Slider images={banner3} />
      </section>


      <section>
        <h1>Add Brand promise here</h1>
      </section>


      <section className="banner4">
        <Slider images={banner4}/>
      </section>


      <section className="phones">
        <PhoneSlider url={headphone_url} heading={"Smartphone Bonanza | 10% (Upto Rs.3000 off)"}/>
      </section>


      <section>
        <ProductSlider url={watches} heading={"Best Selling Smartwatches"}/>
        <ProductSlider url={purifiers} heading={"Splash Into Savings | 30% Off Water Purifiers!"}/>

      </section>
      
      <section className="stable_slider">
        <StableSlider products ={stableSliderREs}/>
      </section>

      <Footer/>
    </div>
  );
};
