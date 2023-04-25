import "../product.css";
import water from "../../../assets/water.jpeg";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

const Water = () => {
  return (
    <div className="water">
      <Header />
      <div className="product-content">
        <div>
          <span className="product-title">
            <i class="fas fa-th-large"></i>{" "}
            <h4 style={{ fontSize: "12px" }}>Kamex Water</h4>
          </span>
          <h2 className="product-title1">WATER</h2>
          <p className="product-details">
            Drinking water helps people enhance their quality of life and
            supports a healthier future. That's why we provide pure and natural
            quality water solutions for all consumers, wherever they are, and
            inspire them to lead healthier lives. As a guardian of unique water
            sources, Kamex Spring Water is helping to protect natural aquifers
            around Sierra Leone while bottling premium natural mineral waters
            and high-quality purified water. We're committed to creating a water
            positive impact everywhere we operate.
          </p>
        </div>
        <div className="image-product">
          <img src={water}  alt="kamex" width={500} height={500} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Water;
