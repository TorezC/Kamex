import '../product.css'
import oil from '../../../assets/oil.jpeg';
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'

const Petroleum = () => {
  return (
    <div className="petroleum">
      <Header/>
        <div className="product-content">
          <div>
            <span className='product-title'>
              <i class="fas fa-th-large" ></i> <h4 style={{fontSize: '12px'}}>Kamex Oil and Gas</h4>
            </span>
            <h2 className="product-title1">PETROLEUM</h2>
            <p className="product-details">
            Whether you are tapping into oil or extracting gas, our engineering expertise can help you reach that extra mile. Our well known reputation for reliability make us one of the most respected names in the Oil & Gas industry. You can count on Kamex to deliver.
The brand is built on bright ideas; harnessing the power of our people’s ingenuity to drive and develop one of the deepest and largest offshore in Sierra Leone.
As we turn into a new decade we have decided to refresh and reposition the brand to be a global player with roots in Africa.
We are acquiring and developing new assets as we continue to contribute to the development of indigenous oil and gas exploration in Sierra Leone.
As our wheel of progress continues to turn we will be persistent in powering lives, and Sierra Leone’s economic growth.
We are heartily committed to the country's welfare.
            </p>
          </div>
          <div className="image-product">
            <img src={oil} alt="kamex"  width={600} height={400} />
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Petroleum