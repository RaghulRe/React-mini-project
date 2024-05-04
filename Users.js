import React, { useState } from 'react';

export default function Users() {
  const [selectedSport, setSelectedSport] = useState('Tennis'); // Default selected sport

  // Define your card data
  const cardData = [
    {
      title: 'Tennis ',
      image: 'https://media.istockphoto.com/id/1171084311/photo/tennis-rackets-and-balls-leaned-against-the-net.jpg?s=612x612&w=0&k=20&c=SnDgfU30k0PMfVjSHTv4umDQWwKtUHJ8AEgofJXg6w4=',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'Cricket',
      image: 'https://www.shutterstock.com/image-vector/cricket-stadium-background-hitting-recreation-600nw-1050943808.jpg',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'Football ',
      image: 'https://t3.ftcdn.net/jpg/06/32/46/98/360_F_632469870_upYgU54J5tgGIFk5cHSzot6CJLu2MuSS.jpg',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'Hockey ',
      image: 'https://e0.pxfuel.com/wallpapers/263/984/desktop-wallpaper-field-hockey-ice-hockey.jpg',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'VolleyBall ',
      image: 'https://www.pixelstalk.net/wp-content/uploads/images6/4K-Volleyball-Wallpaper-HD-620x413.jpg',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'BasketBall ',
      image: 'https://www.chromethemer.com/wallpapers/chromebook-wallpapers/images/960/basketball-chromebook-wallpaper.jpg',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'Marthon ',
      image: 'https://yourcoimbatore.com/wp-content/uploads/2023/12/Marathon-7-1600x1217.jpg?v=1703086261',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'Batminton ',
      image: 'https://www.euroschoolindia.com/wp-content/uploads/2023/08/how-to-play-badminton.jpg',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'Athletics ',
      image: 'https://images2.alphacoders.com/539/thumb-1920-539191.jpg',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'Kick-Boxing ',
      image: 'https://wallpapers.com/images/hd/dark-red-boxing-gloves-ip1ixazptbq3q7bw.webp',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    }
  ];

  // Filter cards based on selected sport
  const filteredCards = cardData.filter(card => card.title.toLowerCase().includes(selectedSport.toLowerCase()));

  return (
    <div>
      <div>
        
        <br />
        <select value={selectedSport} onChange={(e) => setSelectedSport(e.target.value)}>
          <option value="Tennis">Tennis</option>
          <option value="Cricket">Cricket</option>
          <option value="Football">Football</option>
          <option value="Hockey">Hockey</option>
          <option value="VolleyBall">VolleyBall</option>
          <option value="BasketBall">BasketBall</option>
          <option value="Marthon">Marthon</option>
          <option value="Batminton">Batminton</option>
          <option value="Athletics">Athletics</option>
          <option value="Kick-Boxing">Kick-Boxing</option>
        </select>
      </div>
      <div className='cards'>
        {filteredCards.map((card, index) => (
          <div className="card" key={index} style={{ width: "20rem", height: "auto", marginBottom: "20px" }}>
            <img src={card.image}  className="card-img-top" alt="..." />
             
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>
             
              <a href="#" className="btn btn-success">Update</a>
              <a href="#" className="btn btn-danger">Delete</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

