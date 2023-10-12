import React from "react";
import CheckedBox from "../images/check.png";
import "./Products.css";
import productsData from "../components/productsData";

interface Product {
  name: string;
  price: number;
}

interface ProductsProps {
  product: Product;
}

const Products: React.FC<ProductsProps> = ({ product }) => {
  return (
    <>
      <div
        className="programs-header"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <span className="stroke">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke">WITH US</span>
      </div>
      <div className="plans-container">
        <div className="plans">
          {productsData.map((plan, i) => (
            <div className="plan" key={plan.name}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>£{plan.price}</span>
              <div className="features">
                {plan.features.map((feature, i) => (
                  <div key={i} className="feature">
                    <img src={CheckedBox} alt="checkBox" />
                    <span key={i}>{feature}</span>
                  </div>
                ))}
              </div>

              <div>
                <span>See more benefits</span>
              </div>
              <button className="btn">Get this plan</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
