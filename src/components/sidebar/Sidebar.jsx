import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-section">
      <div className="sidebar-subsection">
        <span className="sidebar-title">About me</span>
        <img className="sidebar-img" src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="sidebar-subsection">
        <span className="sidebar-title">Categories</span>
        <ul className="sidebar-categories">
          <li className="sidebar-category">Buy</li>
          <li className="sidebar-category">Sell</li>
          <li className="sidebar-category">Bent</li>
          <li className="sidebar-category">Hostel</li>
          <li className="sidebar-category">B & B</li>
          <li className="sidebar-category">Hotel</li>
        </ul>
      </div>
      <div className="sidebar-subsection">
        <span className="sidebar-title">Follow us</span>
        <div className="sidebar-social-icons">
          <i className="sidebar-icons fa-brands fa-instagram"></i>
          <i className="sidebar-icons fa-brands fa-facebook"></i>
          <i className="sidebar-icons fa-brands fa-linkedin"></i>
          <i className="sidebar-icons fa-brands fa-twitter "></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar