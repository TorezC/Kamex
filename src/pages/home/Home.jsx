import "./home.css";
import Header from "../../components/header/Header";
import { NavLink } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div class="banner-section">
        <div class="banner-bg">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="banner-title">
                  <h1>
                    Purity Beyond <br />
                    Expectation
                  </h1>
                  <p>
                    Green said day they are creature sea thing divided bring
                    whales the the rule <br />
                    it sea in for.our multiply seas divided. Moveth and female
                    green hath face <br />
                    in itself living lights two does land place.
                  </p>
                  <div class="banner-bttn bttn">
                    <NavLink  to='/about-us' className='btn-1'>Learn More</NavLink> 
                    <NavLink to='/contact' className='btn-2'>Contact</NavLink> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
