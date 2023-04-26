import "../product.css";
import logistics from "../../../assets/logistics.jpeg";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

const Logistics = () => {
  return (
    <div className="logistics">
      <Header />
      <div className="product-content">
        <div>
          <span className="product-title">
            <i class="fas fa-th-large"></i>{" "}
            <h4 style={{ fontSize: "12px" }}>Kamex Cargo & Logistics</h4>
          </span>
          <h2 className="product-title1">CARGO & LOGISTICS</h2>
          <p className="product-details">
            Founded in November 2022, Kamex Logistics is a global company
            offering logistics solutions and consultancy services across a wide
            range of industries. Our operations headquarters is in Sierra Leone
            and supported through our global network of partners. We offer our
            clients unadulterated service and ensure their deliverables is
            treated with utmost respect. Our unique approach leads us towards
            innovative business practices which enable high-performance
            fulfillment processes for companies/individuals requiring rapid
            delivery but at minimum reasonable costs.
          </p>
        </div>
        <div className="image-product">
          <img src={logistics} alt="kamex" width={500} height={500} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logistics;
