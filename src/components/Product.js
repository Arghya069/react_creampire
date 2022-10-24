import React from 'react'

function Product() {
  return (
    <section className="container product  my-5 pt-5">
      <div className="row">
        <div className="col-12 col-lg-5 col-md-12">
          <img src="./statics/chocolate-ice-cream-dessert.jpg" className="img-fluid w-100" alt="ice-cream"/>
        </div>
        <div className="col-12 col-lg-6 col-md-12">
          <h3 className="py-4">Bikelia Ice-cream</h3>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <h2>₹249.99</h2>
          <input type="number" value="1"/>
          <button className="b-btn">ADD TO CART</button>
          <h4 className="mt-5 mb-5">Details</h4>
          <span>A delicious chocolate flavored ice-cream with a blast of warm choco chips inside. A better gift if i say! Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, laborum. Similique ut consequuntur, velit odio expedita provident incidunt pariatur dicta vero, delectus laudantium, obcaecati neque fugiat excepturi adipisci laborum eos officia. Amet tenetur nulla quod facere cumque tempora veniam doloremque praesentium eius, sed possimus totam, voluptatum minus, sequi voluptate quas.
          </span>
        </div>
      </div>
    </section>
  )
}

export default Product