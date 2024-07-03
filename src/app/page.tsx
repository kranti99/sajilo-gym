import Image from "next/image";
import Hero from "../../components/hero";
import Team from "../../components/team";
import RegisterBanner from "../../components/registerBanner";
export default function Home() {
  return (
    <>
      <Hero />
      {/* ChoseUs Section Begin */}
      <section className="choseus-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Why chose us?</span>
                <h2>PUSH YOUR LIMITS FORWARD</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-034-stationary-bike"></span>
                <h4>Modern equipment</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut dolore facilisis.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-033-juice"></span>
                <h4>Healthy nutrition plan</h4>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-002-dumbell"></span>
                <h4>Proffesponal training plan</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut dolore facilisis.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-014-heart-beat"></span>
                <h4>Unique to your needs</h4>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ChoseUs Section End */}

      {/* classes Section Begin */}
      <section className="classes-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Our classes</span>
                <h2>WHAT WE CAN OFFER</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="class-item">
                <div className="ci-pic">
                  <Image
                    src="/img/classes/class-1.jpg"
                    alt=""
                    width={360}
                    height={240}
                  />
                </div>
                <div className="ci-text">
                  <span>STRENGTH</span>
                  <h5>Weightlifting</h5>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="class-item">
                <div className="ci-pic">
                  <Image
                    src="/img/classes/class-2.jpg"
                    alt=""
                    width={360}
                    height={240}
                  />
                </div>
                <div className="ci-text">
                  <span>Cardio</span>
                  <h5>Indoor cycling</h5>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="class-item">
                <div className="ci-pic">
                  <Image
                    src="/img/classes/class-3.jpg"
                    alt=""
                    width={360}
                    height={240}
                  />
                </div>
                <div className="ci-text">
                  <span>STRENGTH</span>
                  <h5>Kettlebell power</h5>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="class-item">
                <div className="ci-pic">
                  <Image
                    src="/img/classes/class-4.jpg"
                    alt=""
                    width={360}
                    height={240}
                  />
                </div>
                <div className="ci-text">
                  <span>Cardio</span>
                  <h4>Indoor cycling</h4>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="class-item">
                <div className="ci-pic">
                  <Image
                    src="/img/classes/class-5.jpg"
                    alt=""
                    width={360}
                    height={240}
                  />
                </div>
                <div className="ci-text">
                  <span>Cardio</span>
                  <h4>Workout</h4>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ChoseUs Section End */}

      <RegisterBanner />

      {/* Pricing Section Begin */}
      <section className="pricing-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Our Plan</span>
                <h2>Choose your pricing plan</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-8">
              <div className="ps-item">
                <h3>3 month unlimited</h3>
                <div className="pi-price">
                  <h2>Rs. 4000</h2>
                  <span>SINGLE className</span>
                </div>
                <ul>
                  <li>Free riding</li>
                  <li>Unlimited equipments</li>
                  <li>Personal trainer</li>
                  <li>Weight losing classes</li>
                  <li>Month to mouth</li>
                  <li>No time restriction</li>
                </ul>
                <a href="#" className="primary-btn pricing-btn">
                  Enroll now
                </a>
                <a href="#" className="thumb-icon">
                  <i className="fa fa-picture-o"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="ps-item">
                <h3>12 Month unlimited</h3>
                <div className="pi-price">
                  <h2>Rs. 9000</h2>
                  <span>SINGLE className</span>
                </div>
                <ul>
                  <li>Free riding</li>
                  <li>Unlimited equipments</li>
                  <li>Personal trainer</li>
                  <li>Weight losing classes</li>
                  <li>Month to mouth</li>
                  <li>No time restriction</li>
                </ul>
                <a href="#" className="primary-btn pricing-btn">
                  Enroll now
                </a>
                <a href="#" className="thumb-icon">
                  <i className="fa fa-picture-o"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="ps-item">
                <h3>6 Month unlimited</h3>
                <div className="pi-price">
                  <h2>Rs. 5000</h2>
                  <span>SINGLE className</span>
                </div>
                <ul>
                  <li>Free riding</li>
                  <li>Unlimited equipments</li>
                  <li>Personal trainer</li>
                  <li>Weight losing classes</li>
                  <li>Month to mouth</li>
                  <li>No time restriction</li>
                </ul>
                <a href="#" className="primary-btn pricing-btn">
                  Enroll now
                </a>
                <a href="#" className="thumb-icon">
                  <i className="fa fa-picture-o"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section End */}

      {/* Gallery Section Begin */}
      <div className="gallery-section">
        <div className="gallery">
          <div className="grid-sizer"></div>
          <div
            className="gs-item grid-wide set-bg"
            data-setbg="img/gallery/gallery-1.jpg"
          >
            <a
              href="/img/gallery/gallery-1.jpg"
              className="thumb-icon image-popup"
            >
              <i className="fa fa-picture-o"></i>
            </a>
          </div>
          <div
            className="gs-item set-bg"
            data-setbg="img/gallery/gallery-2.jpg"
          >
            <a
              href="img/gallery/gallery-2.jpg"
              className="thumb-icon image-popup"
            >
              <i className="fa fa-picture-o"></i>
            </a>
          </div>
          <div
            className="gs-item set-bg"
            data-setbg="img/gallery/gallery-3.jpg"
          >
            <a
              href="/img/gallery/gallery-3.jpg"
              className="thumb-icon image-popup"
            >
              <i className="fa fa-picture-o"></i>
            </a>
          </div>
          <div
            className="gs-item set-bg"
            data-setbg="img/gallery/gallery-4.jpg"
          >
            <a
              href="/img/gallery/gallery-4.jpg"
              className="thumb-icon image-popup"
            >
              <i className="fa fa-picture-o"></i>
            </a>
          </div>
          <div
            className="gs-item set-bg"
            data-setbg="img/gallery/gallery-5.jpg"
          >
            <a
              href="/img/gallery/gallery-5.jpg"
              className="thumb-icon image-popup"
            >
              <i className="fa fa-picture-o"></i>
            </a>
          </div>
          <div
            className="gs-item grid-wide set-bg"
            data-setbg="img/gallery/gallery-6.jpg"
          >
            <a
              href="/img/gallery/gallery-6.jpg"
              className="thumb-icon image-popup"
            >
              <i className="fa fa-picture-o"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Gallery Section End */}
      <Team />
    </>
  );
}
