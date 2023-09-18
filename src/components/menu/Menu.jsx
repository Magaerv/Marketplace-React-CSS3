import './Menu.css'

function Menu() {
  return (
    <div className="menu">
      <div className="menu-left">
        <i className="menu-icons fa-brands fa-instagram"></i>
        <i className="menu-icons fa-brands fa-facebook"></i>
        <i className="menu-icons fa-brands fa-linkedin"></i>
        <i className="menu-icons fa-brands fa-twitter "></i>
      </div>
      <div className="menu-center">
        <ul className="menu-list">
          <li className="menu-item">Home</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Contact</li>
          <li className="menu-item">Create Listing</li>
          <li className="menu-item">LogOut</li>
        </ul>
      </div>
      <div className="menu-right">
        <img className="menu-profile" src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <i className="menu-search fas fa-search"></i>
      </div>
    </div>
  )
}

export default Menu