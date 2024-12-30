import React from 'react';
import Link from 'next/link';

const Blogs = () => {
  return (
    <div>
      {/* Header Section with Image */}
      <header className="header">
        <img
          className="img"
          src="https://th.bing.com/th/id/OIP.dQrRBTJmfE10KH2DMygDwQHaHa?rs=1&pid=ImgDetMain"
          alt="Header Image"
        />
      </header>
      
      <br />

      {/* Navigation Links */}
      <nav>
        <ul className="text-white flex gap-2 justify-center items-center">
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>Orders</li>
        </ul>
      </nav>

      {/* Blog Image */}
      <div className="flex justify-center items-center">
        <img
          className="p2"
          src="https://th.bing.com/th/id/OIP.9HdNj8GYwMgoN5DZji2jmQHaHa?rs=1&pid=ImgDetMain"
          alt="Shawarma"
        />
      </div>

      <br />

      {/* Blog Content */}
      <section className="blog-content p1">
        <p>
          <strong>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            cupiditate deleniti minus voluptatum fuga. Expedita autem cumque
            hic nisi non ipsa distinctio, tempora dolores esse odit provident,
            atque, voluptatibus voluptas. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ab cumque excepturi porro dolorum laudantium
            incidunt hic natus ex, eaque ullam omnis nemo rerum! Nam accusantium,
            similique a reiciendis veniam eius. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quaerat
            sint, nesciunt recusandae molestiae voluptates architecto neque quis
            quam voluptatem sapiente ad, saepe possimus suscipit odit laudantium
            amet? Quidem, similique. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quos, corporis reprehenderit nostrum maxime neque
            laboriosam provident error officia fugit assumenda quod dolores est
            minima corrupti facilis suscipit, voluptatum illum! Atque.
          </strong>
        </p>
      </section>

      <br />

      {/* Shami Kabab Description */}
      <section className="shami-kabab-description flex gap-8">
        <strong className="text-white">
          Shami kabab or shaami kabab is a South Asian variety of kebab, composed
          of a shallow fried small patty of minced meat, generally beef, but
          occasionally lamb or mutton (a chicken version exists as well), with
          ground chickpeas, egg as binder, and spices. It originates from the
          Lucknow region of India.
        </strong>
        <img
          src="https://th.bing.com/th/id/R.da99f9d665e84a6c675810314540c992?rik=kzusRhmQLYe47w&pid=ImgRaw&r=0"
          alt="Gol Gappay"
          height="30%"
          width="30%"
        />
      </section>

      <br />

      {/* Additional Content */}
      <section className="additional-content flex gap-2">
        <strong className="text-white">
          Provident eveniet nemo dicta neque? Minus atque deleniti aliquid dolores
          dignissimos aut odio obcaecati esse quod sectetur adipisicing elit.
          Officiis necessitatibus dolores dolore, aliquid temporibus, ipsam
          suscipit iure velit facilis odio sapiente quia modi non optio enim
          debitis eos! Dignissimos, officia! Lorem Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quasi dolorem recusandae, culpa, impedit
          voluptates minus necessitatibus numquam dolor quos veniam non ab
          aspernatur porro illo illum. Porro hic sapiente dolor. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quam, deserunt magnam error totam
          porro illum quasi aliquid facere itaque architecto obcaecati at
          voluptates? Quidem saepe nam, repudiandae odio et porro! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Mollitia laboriosam quidem
          tenetur velit vel adipisci quia, sunt aperiam fugiat quae eligendi minima
          id modi obcaecati dignissimos deleniti fuga pariatur ratione. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Commodi libero ad
          fugiat, exercitationem temporibus repellendus eum sapiente, sed ut
          dolores suscipit numquam voluptatem explicabo nemo, autem molestiae
          laudantium beatae nostrum! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Maiores consequuntur corporis quam veniam accusantium
          esse delectus doloribus nam temporibus necessitatibus hic architecto
          iusto in deleniti, porro ratione adipisci eius dolorum! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Assumenda aut nesciunt numquam rem
          voluptas, eveniet nostrum similique itaque perspiciatis sit accusamus
          porro ea quod. Porro temporibus voluptas debitis? Incidunt, qui? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Ipsam recusandae in
          officiis aliquid veniam eos nobis officia tempora architecto. Neque eum
          dignissimos ad repellendus enim architecto debitis eos vero rerum.
        </strong>
        <img
          src="https://th.bing.com/th/id/OIP.fd6jLJNTgaj-g517peCiGgHaKe?rs=1&pid=ImgDetMain"
          alt="Menu Image"
          height="40%"
          width="40%"
        />
      </section>

      <br />
      <br />
    </div>
  );
};

export default Blogs;
