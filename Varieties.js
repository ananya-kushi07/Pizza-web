import React from 'react'

    const products=
   [ {
       id:1,
       name:"Overloaded",
       img:"https://www.theskburger.com/wp-content/uploads/2022/09/duballl.jpg",
       price:"$4",
       qty:1
    },

    {
      id:2,
      name:"Buratta",
      img:"https://www.grandecheese.com/wp-content/uploads/2020/04/burrata-pizza-with-prosciutto-and-arugula.jpg",
      price:"$5",
      qty:1
   },
]




export default function Varieties() {
  return (
    <>
    {
        products.map((item,index)=>(
          <div> <p>{item.id}</p>
            <p>{item.name}</p>
          <p><img width={200} height={200} src ={item.img} alt ='txt'></img></p>
          
            <p>{item.price}</p>
            <p>{item.qty}</p>
            </div> 
        ))
    }
    </>
  );
};

