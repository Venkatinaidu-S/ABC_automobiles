import React from 'react';
function Home() {
  return (
    <>

      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-LHD-v2.jpg" class="d-block w-100" alt="..." height={600} />
            <div class="carousel-caption d-none d-md-block">
              <h3>Model 3</h3>
              <p>$7,500 Federal Tax Credit Available1
                From $29,990 After Est. Savings2</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png" class="d-block w-100" alt="..." height={600} />
            <div class="carousel-caption d-none d-md-block">
              <h3>Model Y</h3>
              <p>1.99% APR Financing Ending August 31
                From $31,4903</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-v2.jpg" class="d-block w-100" alt="..." height={600} />
            <div class="carousel-caption d-none d-md-block">
              <h3>Model S</h3>
              <p>From $68,4905
                After $6,500 Est. Savings</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Tesla Wall Connector</h1>
            <p class="lead">A faster and Wi-Fi enabled option for your Tesla vehicle, Wall Connector receives over-the-air updates so the charger becomes better over time. Wall Connector adds up to 44 miles of range per hour (or 11.5 kW). Installation is required.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Order now</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">Learn more</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div><h1 align="center">Powerwall</h1></div>
        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-01-Desktop.jpg" alt="Bootstrap Themes" width="100%" height="500px" />
      </div>

      <div>

      </div>

      <div class="card-group">
        <div class="card">
          <img src="https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." height={300}/>
          <div class="card-body">
            <h5 class="card-title">Honda</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." height={300} />
          <div class="card-body">
            <h5 class="card-title">Royal Enfield model S</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." height={300} />
          <div class="card-body">
            <h5 class="card-title">Royal Enfield model X</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>


    </>

  )
}

export default Home;