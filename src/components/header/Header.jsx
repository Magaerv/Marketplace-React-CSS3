import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-text">
        <span className="header-title">Marketplace</span>
        <span className="header-subtitle">Properties</span>
      </div>
      <img className="header-img" src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </div>
  )
}

export default Header