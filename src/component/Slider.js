import React, {Component} from 'react';
export default class Sidebar extends Component {
    render(){
        return (
                  <div class="slider-row">
    <div id="slider" class="carousel carousel-fade slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item slide1 active">
          <div class="container">
            <div class="banner-caption">
              <div class="h1"><strong>Innovative</strong> <span>Sushi Dishes</span></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu libero gravida, pulvinar eros id, ultricies risus. Aliquam rhoncus rutrum arcu.</p>
              <div class="btn-outer"><a href="#!" class="order-btn">Order Now</a></div>
            </div>
          </div>
        </div>
        <div class="carousel-item slide1">
          <div class="container">
            <div class="banner-caption">
              <div class="h1"><strong>Innovative</strong> <span>Sushi Dishes</span></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu libero gravida, pulvinar eros id, ultricies risus. Aliquam rhoncus rutrum arcu.</p>
              <div class="btn-outer"><a href="#!" class="order-btn">Order Now</a></div>
            </div>
          </div>
        </div>
        <div class="carousel-item slide1">
          <div class="container">
            <div class="banner-caption">
              <div class="h1"><strong>Innovative</strong> <span>Sushi Dishes</span></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu libero gravida, pulvinar eros id, ultricies risus. Aliquam rhoncus rutrum arcu.</p>
              <div class="btn-outer"><a href="#!" class="order-btn">Order Now</a></div>
            </div>
          </div>
        </div>
      </div>
      <ul class="social-links d-flex justify-content-center align-items-center flex-wrap flex-column">
        <li>
          <div class="icon"><a href="#!">FB</a></div>
        </li>
        <li>
          <div class="icon"><a href="#!"><i class="fab fa-instagram"></i></a></div>
        </li>
      </ul>
      <ul class="carousel-indicators">
        <li data-target="#slider" data-slide-to="0" class="active"></li>
        <li data-target="#slider" data-slide-to="1"></li>
        <li data-target="#slider" data-slide-to="2"></li>
      </ul>
      <div class="slide-num">
        <div><span>01</span><sup>/04</sup></div>
      </div>
      <div class="highlight-links">
        <div class="d-flex justify-content-between">
          <div class="content"><a href="#!">
            <div class="title">Features</div>
            <span class="small">Let yourself be surprised</span></a> </div>
          <div class="content"><a href="#!">
            <div class="title">Eat Healthy</div>
            <span class="small">How can be helpful?</span></a> </div>
        </div>
      </div>
    </div>
  </div>
        )
    }
}