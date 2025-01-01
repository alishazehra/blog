import React from 'react'
import Home from './home/page'
import Link from 'next/link'
const Page = () => {
  return (
    <div>
      <header className='header'><img className='img'  src="https://th.bing.com/th/id/OIP.dQrRBTJmfE10KH2DMygDwQHaHa?rs=1&pid=ImgDetMain" alt="me"  />
      </header>
   <Home/>
   <br />
   <strong className='text-white text-4xl flex gap-2 '>Welcome to the Food Blog</strong>
   <strong className='text-white'>Here, you can enjoy dishes of upto 700 resturants delicious food</strong>
   <br />
   <br />
  <div className="flex gap-2" ><img   src="https://th.bing.com/th/id/OIP.jD6Z1sPoSQdfhQ02_lD2awHaHa?w=740&h=740&rs=1&pid=ImgDetMain" alt="biryani" height={"30%"} width={"30%"} /> 

  <img  src="https://th.bing.com/th/id/OIP.2dhr5Ln6cMHIu9SmwE_uBgHaE7?rs=1&pid=ImgDetMain"  height={"40%"} width={"40%"}/>
  <img src="https://th.bing.com/th/id/OIP.gO4IUyMCJ4K2mHVxn6ycIAHaHa?w=560&h=560&rs=1&pid=ImgDetMain" alt="burger" height={"30%"} width={"30%"} />
 
    </div> <br />
    <div className="flex justify-between items-center  ">
      <button className=" text-black bg-orange-500 hover:bg-red-700 rounded-lg rounded-md rounded-sm font-bold ">
       Chicken Biryani <br /> Rs.250
      </button>

      <button className=" text-black text-bold bg-orange-500 hover:bg-red-700 rounded-lg rounded-md rounded-sm font-bold ">
        Fajita Pizza <br /> Rs.900
      </button>

      <button className=" text-black bg-orange-500 hover:bg-red-700 rounded-lg rounded-md rounded-sm  font-bold ">
       Chicken Karahi <br /> Rs.450
      </button>
    </div>
   <div className='flex gap-1'> <img  src="https://th.bing.com/th/id/OIP.36JmYTXI27pq7lD2NlFDvAHaLH?w=800&h=1200&rs=1&pid=ImgDetMain" alt="" height={"30%"} width={"30%"}  /> 
   <img src="https://th.bing.com/th/id/R.926e7fb35388b6966dfa08f09d82026d?rik=SHHNT4ktb9I8Hg&riu=http%3a%2f%2fassets.marthastewart.com%2fstyles%2fwmax-520-highdpi%2fd17%2fmh_1036_spaghetti%2fmh_1036_spaghetti_hd.jpg%3fitok%3dxfXN9gM9&ehk=GOuAaJRby56c%2fz1h7LGZGiYPRbc2MJCPgXVFiTAW0EM%3d&risl=&pid=ImgRaw&r=0" alt="pasta" height={"30%"} width={"40%"}/> 
    <img src="https://th.bing.com/th/id/R.28df40f71e98c045513e20e7d2b20004?rik=w3UmUgRvdJYz7Q&pid=ImgRaw&r=0" alt="noodles" height={"30%"} width={"30%"} /> 
    </div>
    <br />
    <div className="flex justify-between items-center  ">
      <button className=" text-black bg-orange-500 hover:bg-red-700 rounded-lg rounded-md rounded-sm font-bold ">
       Chicken Burger <br /> Rs.400
      </button>

      <button className=" text-black text-bold bg-orange-500 hover:bg-red-700 rounded-lg rounded-md rounded-sm  font-bold  ">
        Red Pasta <br /> Rs.900
      </button>

      <button className=" text-black bg-orange-500 hover:bg-red-700 rounded-lg rounded-md rounded-sm font-bold ">
       Spicy Noodles <br /> Rs.250
      </button>
    </div>
    <br />
    <div className='flex gap-2'>
    <img src="https://th.bing.com/th/id/OIP.qP3_yNeDaoUM-Oc5USFNZwHaFa?rs=1&pid=ImgDetMain" alt="steak" width={"30%"} height={"30%"} />
    <img src="https://th.bing.com/th/id/OIP.VMndNouZGkMwTHVQHapigwHaE8?rs=1&pid=ImgDetMain" alt="steak" height={"40%"} width={"40%"} />
    <img src="https://th.bing.com/th/id/OIP.CrpyjP92iF2Wg-pvGjXYOwHaEK?rs=1&pid=ImgDetMain" alt="kheer" height={"30%"} width={"30%"} />
    </div> 
   <br />
    {/* <div className="flex justify-between items-center  ">
      <button className=" text-black bg-orange-500 hover:bg-blue-700 rounded-lg rounded-md rounded-sm ">
     New Year Special deal   <br /> Rs.400
      </button> */}
      <div className="flex justify-center items-center ">
  <button className="text-black  bg-orange-500 hover:bg-red-700 font-bold rounded-lg rounded-md rounded-sm">
Amazing offer! New Year Special deal   <br /> Rs.600
  </button>
{/* </div> */}

    </div>
    <br />
    <div className='container'>
    <button ><Link href="/orders">Order Now</Link> </button> </div> <br />
    <div >
   <img className='border' src=" https://th.bing.com/th/id/R.da99f9d665e84a6c675810314540c992?rik=kzusRhmQLYe47w&pid=ImgRaw&r=0" alt="menu"  height={"50%"} width={"50%"} />
   <strong className='text-white '> Shami kabab or shaami kabab is a South Asian variety of kebab, compom. The regular dish in Pakistan. Beef Kababs with chutney made with beef  consectetur adipisicing elit. Quo, doloremque minima? Exercitationem nulla natus praesentium corporis eveniet soluta sunt, excepturi minima obcaecati molestias hic combination of amazing shami kababs</strong>
   </div> <hr />
   <div >
    
   <img className='border' src="https://th.bing.com/th/id/OIP.0xIduto_dIn9R4b80MargAHaDO?rs=1&pid=ImgDetMain" alt="dahi baray" height={"50%"} width={"50%"}/>
   <strong className="text-white"> Burgers are the most popular street food snack in Pakistan, this lentil/gram dumpling is flooded with seasoned yogurt it is prepared by soaking baray in thick yogurt Dahi Baray, which is adored by almost everyone, In the method below, I have clearly mentioned each and every step in detail. One of the most important things here is gram batter which needs correct consistency and then frying the baray. </strong> </div>
   <hr />
   <div ><img className='border' src="https://foodnerd.s3-eu-west-1.amazonaws.com/production/blog/cover_image/19/Foodnerd-best-pakistani-food-dishes.jpg" alt="food" height={"50%"} width={"50%"} /><strong className='text-white'>Pakistan has some of the most diverse and flavorful recipes in the world due to the infinite amount of special herbs and spices available, and each traditional dish comes with a deep history that connects it to a particular province. The versatile geography, ranging from deserts to the world’s highest mountain peaks, creates a wide variety of different types of recipes, each with a unique taste. 
Biryani  with beef white rice with chicken . Sequi voluptatem doloremque eligendi quibusdam quod nesciunt ipsa incidunt recusandae reiciendis? Qui in enim deleniti reprehenderit ut minima biryani.</strong> </div>
<hr />
<div ><img className='border' src="https://cdn.tasteatlas.com/Images/Dishes/e668e32ae1a3423c95fbd4d77f8c940c.jpg" alt="samosa" height={"50%"} width={"50%"} /> <strong className='text-white'>The samosa is prepared with an all-purpose flour (locally known as maida) and stuffed with a filling, often a mixture of diced and cooked or mashed boiled potato (preferably diced), onions,  consectetur adipisicing elit. Officia  vel delicious. Samosas are best food for snacks, kids like samosas, there varieties of samosas, chicken samosa , keema samosa etc.</strong> </div>
<br />
    <img className='alisha' src="https://th.bing.com/th/id/R.47e0dc38b95729b9519232afedda6fc8?rik=3GKH5YARFvJsuw&riu=http%3a%2f%2fzenzino.design%2fwp-content%2fuploads%2f2017%2f12%2f20171201_Restaurant-Homepage-NAP.jpg&ehk=6p9vpOrpk91Sitjoo48%2fPXe%2f28vUdvjilN8QytP19aE%3d&risl=&pid=ImgRaw&r=0" width={"full"} height={"full"} />
       


       
       </div> 
    
     
  )
}

export default Page
