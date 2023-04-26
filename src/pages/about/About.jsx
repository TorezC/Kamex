import "./about.css";
import Carousel from "react-bootstrap/Carousel";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import abtone from '../../assets/abt-banner-1.jpeg';
import abttwo from '../../assets/abt-banner-2.jpeg';
import abtthree from '../../assets/abt-banner-3.jpeg';
import abtfive from '../../assets/abt-banner-5.jpeg';

const About = () => {
  return (
    <div className="about">
      <Header />
      <div className="cau-abt">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={abtone}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={abttwo}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={abtthree}
              alt="Third slide"
              
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={abtfive}
              alt="Third slide"
              
            />
          </Carousel.Item>
        </Carousel>

      </div>
      <div className="about-details mt-3">
        <div className="about-content">
          <div className="content">
            <span className="about-title">
              <i class="fas fa-th-large"></i>{" "}
              <h4 style={{ fontSize: "12px" }}>About Us</h4>
            </span>
            <h2 className="about-title1">WHO ARE WE</h2>
            <p className="about-detail">
              Kamex Group Is a conglomerate Providing a broad range of goods and
              services in the bottled water & beverages, fisheries, construction
              & real estate, cargo & logistics, gold and diamond mining, oil &
              gas, and agricultural products industries. With Experience Staff,
              we are committed to providing our customers with the highest
              quality products and services. Our team of experts can help you
              with all of your needs in any of these fields. Let us be your
              go-to source for all of your business needs. Kamex Group was
              Established in 2022, in the area of Bottled Water & Beverages,
              Fisheries, Construction & Real Estate, Cargo & Logistics, Oil &
              Gas and Agricultural Products. Our commitment to excellence and
              strong relationships with stakeholders have enabled us to be a key
              player in the industry.
            </p>
          </div>
        </div>
        <div className="sion row mt-4">
          <div className="mission col-lg-6 col-md-6">
            <h5 className="sion-title">MISSION</h5>
            <p className=" sion-content">
              Kamex is a vital resource for building and sustaining community,
              standing ready to serve, creating a business forum through which
              everyone benefits.
            </p>
          </div>
          <div className="vision col-lg-6 col-md-6">
            <h5 className="sion-title">VISION</h5>
            <p className=" sion-content">
              We will ultimately serve all the communities around, while
              maintaining appropriate scale and thorough accountability to our
              local community.
            </p>
          </div>
        </div>
        <div className="core mt-4">
          <h4 className="sion-title">CORE VALUES</h4>
          <div className="row core-head" style={{ gap: "10px" }}>
            <div className="col core-title">
              <h5> Inclusion</h5>
              <p>
                We believe that the fabric of our community is stronger when all
                of its members have the opportunity to express their diverse
                interests, concerns, and points of view.
              </p>
            </div>
            <div className="col core-title">
              <h5>Empowerment</h5>
              <p>
                We believe in providing educational opportunities that enable
                community members to build new skills and gain valuable
                experience. We promote an exchange of ideas that enriches
                people’s lives.
              </p>
            </div>
            <div className="col core-title">
              <h5>Mutual Support</h5>
              <p>
                We believe in fostering connections among the people in order to
                strengthen appreciation for the community and support among
                neighbours.
              </p>
            </div>
            <div className="col core-title">
              <h5>Independence</h5>
              <p>
                We believe it is important that communities take responsibility
                for understanding the issues that affect them. Locally
                controlled system have the ability to provide viewpoints and
                information unavailable elsewhere.
              </p>
            </div>
            <div className="col core-title">
              <h5> Living in Place</h5>
              <p>
                We believe that the community benefits from ongoing dialogue
                about our region’s environmental, economic, and social issues.
                Such dialogue develops our understanding of the place where we
                live and deepens our commitment to sustaining it.
              </p>
            </div>
            <div className="col core-title">
              <h5>Exchange </h5>
              <p>
                We believe that we have much to teach and learn from other
                communities worldwide. We value the interplay of ideas among
                people seeking to live in harmony with each other and the Earth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
