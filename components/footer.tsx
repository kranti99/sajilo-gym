import Script from "next/script";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* Get In Touch Section Begin */}
      <div className="gettouch-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="gt-text">
                <a
                  href="https://www.google.com/maps/place/Sajilo+Gym/@26.4872206,87.2741772,17z/data=!3m1!4b1!4m6!3m5!1s0x39ef7476234ce6b1:0x4bbb388feda70962!8m2!3d26.4872206!4d87.2762209!16s%2Fg%2F11c535w8g9?entry=ttu"
                  target="_blank"
                >
                  {" "}
                  <i className="fa fa-map-marker"></i>
                  <p>
                    Kanchanbari-4 <br /> Biratnagar, Nepal
                  </p>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="gt-text">
                <a href="tel:980-5311793">
                  <i className="fa fa-mobile"></i>
                  <ul>
                    <li>980-5311793</li>
                  </ul>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="gt-text email">
                <a href="mailto:sajilofitness@gmail.com">
                  <i className="fa fa-envelope"></i>
                  <p>sajilofitness@gmail.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Get In Touch Section End */}

      {/* Footer Section Begin */}
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="fs-about">
                <div className="fa-logo">
                  <a href="#">
                    <Image
                      src="/img/logo-footer.jpg"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </a>
                </div>
                <p>
                  A world class fitness center where you can keep your body fit
                  and healthy mind.{" "}
                </p>
                <div className="fa-social">
                  <a
                    href="https://www.facebook.com/sajilofitnessandgym"
                    target="_blank"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/sajilofitnessandgym/">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                  <a href="#">
                    <i className="fa  fa-envelope-o"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="fs-widget">
                <h4>Useful links</h4>
                <ul>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Classes</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="fs-widget">
                <h4>Support</h4>
                <ul>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">My account</a>
                  </li>
                  <li>
                    <a href="#">Subscribe</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="fs-widget">
                <h4>Tips & Guides</h4>
                <div className="fw-recent">
                  <h6>
                    <a href="#">
                      Physical fitness may help prevent depression, anxiety
                    </a>
                  </h6>
                  <ul>
                    <li>3 min read</li>
                    <li>20 Comment</li>
                  </ul>
                </div>
                <div className="fw-recent">
                  <h6>
                    <a href="#">
                      Fitness: The best exercise to lose belly fat and tone
                      up...
                    </a>
                  </h6>
                  <ul>
                    <li>3 min read</li>
                    <li>20 Comment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="copyright-text">
                <p>
                  Copyright &copy;2024 All rights reserved | This template is
                  made with <i className="fa fa-heart" aria-hidden="true"></i>{" "}
                  by{" "}
                  <a href="#" target="_blank">
                    Kantiman Bajracharya
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section End */}

      {/* Search model Begin */}
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">+</div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
      {/* Search model end */}

      {/* Js Plugins */}
      <Script src="./js/jquery-3.3.1.min.js"></Script>
      <Script src="./js/bootstrap.min.js"></Script>
      <Script src="./js/jquery.magnific-popup.min.js"></Script>
      <Script src="./js/masonry.pkgd.min.js"></Script>
      <Script src="./js/jquery.barfiller.js"></Script>
      <Script src="./js/jquery.slicknav.js"></Script>
      <Script src="./js/owl.carousel.min.js"></Script>
      <Script src="./js/main.js"></Script>
    </>
  );
}
