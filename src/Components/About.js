import React from 'react';
import { useState } from "react";

function About() {
    const [count, setCount] = useState(0);

    return (
        <>


            <h1>About</h1>
            <p>Automobiles are vehicles designed for passenger transport, typically powered by internal combustion engines or electric motors. They come in various types, including sedans, SUVs, and trucks. Modern cars feature advanced technology for safety, efficiency, and comfort. Automobiles play a crucial role in daily transportation and global economies.</p>

            <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src="https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">ABC Automobiles</h1>
                        <p class="lead">ABC Automobiles is a leading car manufacturer renowned for its innovative designs and cutting-edge technology. Offering a range of vehicles from compact cars to luxury SUVs, ABC Automobiles emphasizes safety, efficiency, and sustainability. Their commitment to quality and customer satisfaction has earned them a strong reputation in the automotive industry.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Vehicles</button>
                            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-group">
                <div class="card">
                    <img src="https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." height={300} />
                    <div class="card-body">
                        <h5 class="card-title">Ferrari</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.pexels.com/photos/12964228/pexels-photo-12964228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." height={300} />
                    <div class="card-body">
                        <h5 class="card-title">Lamborghini</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.pexels.com/photos/193021/pexels-photo-193021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." height={300} />
                    <div class="card-body">
                        <h5 class="card-title">Mercedes-Benz</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;