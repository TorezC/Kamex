import '../product.css'
import agric from '../../../assets/agric.jpeg';
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'

const Agriculture = () => {
  return (
    <div className="agric">
      <Header/>
        <div className="product-content">
          <div className='content'>
            <span className='product-title'>
              <i class="fas fa-th-large" ></i> <h4 style={{fontSize: '12px'}}>Kamex Agricultural Product</h4>
            </span>
            <h2 className="product-title1">AGRICULTURE</h2>
            <p className="product-details">
              Agricultural products means an animal or plant or a product, including any food or drink that is wholly or partly derived from an animal or plant, and includes all after acquired Agricultural Products of the Producer, or any proceeds.
            </p>
          </div>
          <div className="image-product">
            <img src={agric} alt="kamex" className='img-fluid'/>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Agriculture