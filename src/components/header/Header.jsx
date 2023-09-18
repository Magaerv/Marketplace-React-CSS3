import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-text">
        <span className="header-title">Listings</span>
        <span className="header-subtitle">Listing App</span>
      </div>
      <img className="header-img" src="https://images.pexels.com/photos/3695238/pexels-photo-3695238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </div>
  )
}

export default Header