import './socialheader.css'

const SocialHeader = () => {
  return (
    <div className='socialheader'>
      <span className='contact-info'>
        <span>
          <i class="fa-sharp fa-solid fa-phone"></i>
          <span className='social-info'> +2348104025253</span>
        </span>
        <span>
        <i class="fa-solid fa-envelope"></i>
        <span className='social-info'> info@kamexgroup.com</span>
        </span>
        <span>
        <i class="fa-sharp fa-solid fa-location-dot"></i>
        <span className='social-info'> 90 Circular Road Freetown, Sierra Leone</span>
        </span>
      </span>
      <span className='contact-info'>
        <i class="fa-brands fa-facebook-f social-info"></i>
        <i class="fa-brands fa-instagram social-info"></i>
        <i class="fa-brands fa-twitter social-info"></i>
      </span>
    </div>
  )
}

export default SocialHeader