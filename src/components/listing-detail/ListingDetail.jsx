import './ListingDetail.css';

const ListingDetail = () => {
  return (
    <div className="listing-detail">
      <div className="listing-detail-content">
        <img src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <h2 className="listing-detail-title">Awesome property
          <div className="listing-detail-action">
            <i className="listing-detail-action-icons fa-solid fa-pen-to-square"></i>
            <i className="listing-detail-action-icons fa-solid fa-trash"></i>
          </div>
        </h2>
        <div className="listing-detail-meta-info">
          <span className="listing-detail-author">Author -  <strong>John Doe</strong></span>
          <span className="listing-detail-time">1 day ago</span>
        </div>
        <p className="listing-detail-description">Convallis a cras semper auctor neque vitae tempus. Eu turpis egestas pretium aenean pharetra magna ac placerat. Volutpat lacus laoreet non curabitur. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Duis at consectetur lorem donec.In dictum non consectetur a erat. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Eget nunc lobortis mattis aliquam faucibus purus in massa. Risus feugiat in ante metus dictum at tempor. Malesuada nunc vel risus commodo viverra maecenas. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Amet consectetur adipiscing elit duis tristique sollicitudin. A pellentesque sit amet porttitor eget dolor morbi. Leo urna molestie at elementum eu facilisis sed.

          Nec feugiat in fermentum posuere. Commodo elit at imperdiet dui accumsan sit amet. Risus nec feugiat in fermentum posuere urna nec. Faucibus purus in massa tempor nec feugiat nisl. Id semper risus in hendrerit gravida rutrum quisque. Amet mauris commodo quis imperdiet. Magnis dis parturient montes nascetur ridiculus mus. Vulputate dignissim suspendisse in est. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Ipsum nunc aliquet bibendum enim facilisis. Dui nunc mattis enim ut tellus elementum.</p>
      </div>
    </div>
  )
}

export default ListingDetail