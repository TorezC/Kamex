import '../product.css'
import construction from '../../../assets/construction.jpeg';
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'

const Construction = () => {
  return (
    <div className="construction">
      <Header/>
        <div className="product-content">
          <div>
            <span className='product-title'>
              <i class="fas fa-th-large" ></i> <h4 style={{fontSize: '12px'}}>Kamex Construction</h4>
            </span>
            <h2 className="product-title1">CONSTRUCTION</h2>
            <p className="product-details">
            The real estate and construction industry is under pressure to change on many fronts: urbanisation and re-urbanisation are constantly changing the rules of the game for investment cycles and capital market movements. The task of continuously improving the performance of real estate is just as demanding. This is especially the case since every financing project and every project development must be viewed in the context of new themes: for example, in the case of rapid urban district developments with coworking spaces or in the networking of residential, industrial and commercial properties in the “Smart City”.
Kamex construction and real estate is poised to nest your cities with the best modern architectural pieces.
            </p>
          </div>
          <div className="image-product">
            <img src={construction} alt="kamex"  width={600}  />
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Construction