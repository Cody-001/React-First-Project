import hero1 from "../assets/img/gallery/h1_hero1.jpg";
import scissors from "../assets/img/icon/scissors.svg";
import rightArrows from "../assets/img/icon/right-arrow.svg";
import about1 from "../assets/img/gallery/about1.jpg";
import barber1 from "../assets/img/gallery/barber1.jpg";
import barber2 from "../assets/img/gallery/barber2.jpg";
import barber3 from "../assets/img/gallery/barber3.jpg";
import barber4 from "../assets/img/gallery/barber4.jpg";
import barber5 from "../assets/img/gallery/barber5.jpg";
import barber6 from "../assets/img/gallery/barber6.jpg";
import about2 from "../assets/img/gallery/about2.jpg";
import service1 from "../assets/img/icon/services1.svg";
import service2 from "../assets/img/icon/services2.svg";
import service3 from "../assets/img/icon/services3.svg";
import instra1 from "../assets/img/gallery/instra1.jpg";
import instra2 from "../assets/img/gallery/instra2.jpg";
import instra3 from "../assets/img/gallery/instra3.jpg";
import instra4 from "../assets/img/gallery/instra4.jpg";
import customer1 from "../assets/img/gallery/customer1.png";
import customer2 from "../assets/img/gallery/customer2.png";
import customer3 from "../assets/img/gallery/customer3.png";
import { FaRegStar } from "react-icons/fa";
import AccordionExpandDefault from "./AccordionExpandDefault";



const Main = () => {
  return ( 
    <>
    <main>
        
    <div className="slider-area  position-relative">
      <div className="slider-active">
        
        <div className="single-slider">
          <div className="slider-cap-wrapper slider-height">
            <div className="hero-caption">
              <img src={scissors} alt="" data-animation="fadeInUp" data-delay=".4s" />
              <h1 data-animation="fadeInUp" data-delay=".4s">WE'RE THE LAST OF BREED.</h1>
              <p data-animation="fadeInUp" data-delay=".7s">Achieve your Dream Style</p>
              <a href="#" className="btn hero-btn" data-animation=" fadeInUp" data-delay=".7s">Book Now</a>
            </div>
            <div className="hero-img position-relative">
              <img src={hero1} alt="" data-animation="pulse" data-transition-duration="5s" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- slider Area End-->
    <!--? About Area  --> */}
    <section className="aboutpadding about-area section-padding">
      <div className="container ">
        <div className="aboutFlex row align-items-center justify-content-between">
          <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-9">
            <div className="about-caption mb-40">
              {/* <!-- Single --> */}
              <div className="aboutIcon about-single mb-10 d-flex">
                <div className="icon">
                  <img src={rightArrows} alt="" />
                </div>
                <div className="pera">
                  <span>Be the majority have suffered alteration in some form, by injected humour.</span>
                </div>
              </div>
              {/* <!-- Single --> */}
              <div className="aboutIcon about-single mb-10 d-flex">
                <div className="icon">
                  <img src={rightArrows} alt="" />
                </div>
                <div className="pera">
                  <span>Psum available be the majority have suffered alteration in some form, by injected humour.</span>
                </div>
              </div>
              {/* <!-- Single --> */}
              <div className="aboutIcon about-single mb-10 d-flex">
                <div className="icon">
                  <img src={rightArrows} alt="" />
                </div>
                <div className="pera">
                  <span>Available be the majority have suffered alteration in some form, by injected humour.</span>
                </div>
              </div>
              {/* <!-- Single --> */}
              <div className="aboutIcon about-single mb-10 d-flex">
                <div className="icon">
                  <img src= {rightArrows} alt="" />
                </div>
                <div className="pera">
                  <span>Humour available be the majority have suffered alteration in some form, by injected.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
            <div className="about-img mb-30">
              <img src={about1} alt="" />
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6">
            <div className=" aboutCaption about-caption ">
              {/* <!-- Section Tittle --> */}
              <div className="section-tittle mb-25">
                <h2>ABOUT Our STORY</h2>
                <p className="pt-20">There are many variations of  passages of Lorem Ipsum available
                  be the majority have suffered alteration in some form, by injected humour or randomised words.</p>
              </div>
              <a href="#" className="btn_01">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- About Area End -->
    <!--? Visit Our Tailor Start --> */}
    <div className="visit-tailor-area fix">
      {/* <!--left Contents  --> */}
      <div className="barber-team">
        <div className="team-wrapper">
          <div className="single-barber">
            <img src={barber1} alt="" />
          </div>
          <div className="single-barber">
            <img src={barber2} alt="" />
          </div>
          <div className="single-barber">
            <img src={barber3} alt="" />
          </div>
          <div className="single-barber">
            <img src={barber4} alt="" />
          </div>
          <div className="single-barber">
            <img src={barber5} alt="" />
          </div>
          <div className="single-barber">
            <img src={barber6} alt="" />
          </div>
        </div>
      </div>
      {/* <!-- Right Contents --> */}
      <div className="tailor-details">
        <div className="section-tittle mb-40 border-bottom">
          <h2>OUR TOP PRICES</h2>
        </div>
        {/* <!-- Single --> */}
        <div className="single-items">
          <div className="price-items">
            <div className="price-left">
              <div className="job-tittle">
                <a href="#"><h4>Special Beard Treatment</h4></a>
              </div>
            </div>
            <div className="price">
              <p>From<span>$40</span></p>
            </div>
          </div>
        </div>
        {/* <!-- Single --> */}
        <div className="single-items">
          <div className="price-items">
            <div className="price-left">
              <div className="job-tittle">
                <a href="#"><h4>Special Beard Treatment</h4></a>
              </div>
            </div>
            <div className="price">
              <p>From<span>$40</span></p>
            </div>
          </div>
        </div>
        {/* <!-- Single --> */}
        <div className="single-items">
          <div className="price-items">
            <div className="price-left">
              <div className="job-tittle">
                <a href="#"><h4>Color your Beard</h4></a>
              </div>
            </div>
            <div className="price">
              <p>From<span>$40</span></p>
            </div>
          </div>
        </div>
        {/* <!-- Single --> */}
        <div className="single-items">
          <div className="price-items">
            <div className="price-left">
              <div className="job-tittle">
                <a href="#"><h4>Wax your Beard</h4></a>
              </div>
            </div>
            <div className="price">
              <p>From<span>$40</span></p>
            </div>
          </div>
        </div>
        {/* <!-- Single --> */}
        <div className="single-items">
          <div className="price-items">
            <div className="price-left">
              <div className="job-tittle">
                <a href="#"><h4>Wax your Beard</h4></a>
              </div>
            </div>
            <div className="price">
              <p>From<span>$40</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Visit Our Tailor End -->
    <!--? project us start--> */}
    <section className="project-us pb-padding section-padding">
      <div className="container">
        <div className="gridColumn row align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="section-tittle mb-30">
              <h2>All We Do for You</h2>
            </div>
            <div className="project-caption mb-40">
              <AccordionExpandDefault />
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-10 col-sm-10">
            <div className="project-right-cap">
              <div className="projectImg project-right-img">
                <img src={about2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!--  project us end-->
<!--? Services Area Start --> */}
  <section className="sectionImg categories-area section-img-bg2" >
      <div className=" container">
        <div className="sectionContainer row">
          <div className="grid-content">
            <div className="single-cat text-center mb-30">
              <div className="cat-icon">
                <img src={service1} alt="" />
              </div>
              <h5><a href="services.html">Stylish hair cut</a></h5>
              <div className="cat-cap">
                <p>Available be the majority have suffered alteration in some form, by injected humour.</p>
              </div>
            </div>
          </div>
          <div className="grid-content">
            <div className="single-cat text-center mb-30">
              <div className="cat-icon">
                <img src={service2} alt="" />
              </div>
              <h5><a href="services.html">Cut & hair style</a></h5>
              <div className="cat-cap">
                <p>Available be the majority have suffered alteration in some form, by injected humour.</p>
              </div>
            </div>
          </div>
          <div className="grid-content">
            <div className="single-cat text-center mb-30">
              <div className="cat-icon">
                <img src={service3} alt="" />
              </div>
              <h5><a href="services.html">Color & hair wash</a></h5>
              <div className="cat-cap">
                <p>Available be the majority have suffered alteration in some form, by injected humour.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Services Area End -->
<!--? gallery start --> */}
    <div className="instagram-area fix">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-xl-12">
            <div className="instagram-active owl-carousel">
              <div className="single-instagram">
                <img src={instra1} alt="" />
              </div>
              <div className="single-instagram">
                <img src={instra2} alt="" />
              </div>
              <div className="single-instagram">
              <img src={instra3} alt="" />
              </div>
              <div className="single-instagram">
                <img src={instra4} alt="" />
              </div>
              <div className="single-instagram">
                <img src={instra2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End gallery -->
<!--? Testimonial area start --> */}
    <section className="customer-section section-padding">
      <div className="container">
        <div className="testimonialRow justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-7">
            {/* <!-- Section Tittle --> */}
            <div className="section-tittle section-tittle2 text-center mb-50">
              <h2>Customers Say About Us</h2>
            </div>
          </div>
        </div>
        <div className="rowCol row">
          <div className="col-lg-4 col-md-4 col-sm-6 p-0">
            <div className="single-cat mb-30">
              <div className="cat-cap">
                <div className="rating">
                  <ul>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                  </ul>
                </div>
                <p>"Consectetur adipiscing elit, sed do eiusmod tempor  dunt ulter labore et dolore magna.</p>
              </div>
              <div className="cat-img">
                <img src={customer1}alt="" />
                <p >Wilma Mumduya</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 p-0">
            <div className="single-cat mb-30">
              <div className="cat-cap">
                <div className="rating">
                  <ul>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                  </ul>
                </div>
                <p>"Consectetur adipiscing elit, sed do eiusmod tempor  dunt ulter labore et dolore magna.</p>
              </div>
              <div className="cat-img">
                <img src={customer2} alt="" />
                <p>Jimmy Changa</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 p-0">
            <div className="single-cat mb-30">
              <div className="cat-cap">
                <div className="rating">
                  <ul>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                  </ul>
                </div>
                <p>"Consectetur adipiscing elit, sed do eiusmod tempor  dunt ulter labore et dolore magna.</p>
              </div>
              <div className="cat-img">
                <img src={customer3} alt="" />
                <p>Wilma Mumduya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Testimonial End --> */}
   
  </main>
  
  </>
 
  )
}

export default Main
