import "../product.css";
import fisheries from "../../../assets/fishery.jpeg";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

const Fisheries = () => {
  return (
    <div className="fisheries">
      <Header />
      <div className="product-content">
        <div>
          <span className="product-title">
            <i class="fas fa-th-large"></i>
            <h4 style={{ fontSize: "12px" }}>Kamex Fisheries</h4>
          </span>
          <h2 className="product-title1">FISHERIES</h2>
          <p className="product-details">
            We deal with fishing for commercial or recreational purposes. A
            sustainable fishery has healthy and productive populations of fish
            where the integrity of the ecosystem is maintained, this is how we
            operate in Kamex Fisheries. The fishing activity within the
            sustainable fishery is well managed and ensures their environmental
            impact is reduced including minimising bycatch and collecting data
            to determine their total allowable catch. Our sustainable fishery is
            scored highly against this principles: Healthy populations of target
            fish Ecosystem impact minimised Good management in place The UN FAO
            estimates that 65.8% of fish stocks are within biologically
            sustainable levels (2017).
          </p>
        </div>
        <div className="image-product">
          <img src={fisheries} alt="kamex" width={600} height={350} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fisheries;
