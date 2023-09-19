import './ListingItem.css';

const ListingItem = () => {
  return (
    <div className="listing-item">
      <img className="listing-img" src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <div className="listing-details">
        <div className="listing-categories">
          <span className="listing-category">Buy</span>
          <span className="listing-category">Sell</span>
        </div>
        <span className="listing-title">Awesome property</span>
        <hr />
        <span className="listing-time">2 days ago</span>
        <p className="listing-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus risus at ultrices mi tempus. Velit laoreet id donec ultrices. Eget mauris pharetra et ultrices neque ornare aenean. </p>
      </div>
    </div>
  )
}

export default ListingItem 