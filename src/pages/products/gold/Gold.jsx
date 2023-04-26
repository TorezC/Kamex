import '../product.css'
import gold from '../../../assets/gold.jpeg';
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'

const Gold = () => {
  return (
    <div className="gold">
      <Header/>
        <div className="product-content">
          <div>
            <span className='product-title'>
              <i class="fas fa-th-large" ></i> <h4 style={{fontSize: '12px'}}>Kamex Gold and Diamond Mining</h4>
            </span>
            <h2 className="product-title1">MINING</h2>
            <p className="product-details">
            Kamex Gold and Diamond mining is an intermediate gold mining company committed to responsible mining with a portfolio of assets in Sierra Leone.
            </p>
          </div>
          <div className="image-product">
            <img src={gold} alt="kamex" width={600} />
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Gold