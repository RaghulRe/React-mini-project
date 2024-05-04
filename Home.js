import React from 'react'
import image1 from '../components/images/image1.webp'
export default function Home() {
return (
    <div>

     {/* <img className='image' src={image1} style={{width:"98vw",height:"90vh"}}/> 
       */}
 
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://wallpapers.com/images/featured/best-sports-background-9mo6eiyv8hxj5jln.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://qph.cf2.quoracdn.net/main-qimg-ce9229acb7c7d4fc9776ed41e5717436-pjlq" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

   </div>
   )
 }
