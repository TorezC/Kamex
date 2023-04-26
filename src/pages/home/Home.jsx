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
                  Possibilities Beyond  <br />
                  Borders
                  </h1>
                  <p>
                  Unlike most companies that makes profit their primary concern, Kamex Group is keen on helping communities and individuals which is why our business offerings are intentionally driven.                  </p>
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
