import Image from "next/image";
import Hero from "../../components/hero";
import Team from "../../components/team";
import RegisterBanner from "../../components/registerBanner";
import Price from "./../../components/price";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Why Choose Us Section */}
      <section className="choseus-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Why choose us?</span>
                <h2>TRAIN SMART. GET RESULTS.</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-034-stationary-bike"></span>
                <h4>Modern Equipment</h4>
                <p>
                  Train with the latest, high-performance machines designed for
                  safety, efficiency, and maximum results.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-033-juice"></span>
                <h4>Nutrition Guidance</h4>
                <p>
                  Get personalized nutrition advice to support your fitness
                  goals and improve overall health.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-002-dumbell"></span>
                <h4>Professional Coaching</h4>
                <p>
                  Work with certified trainers who create structured programs
                  tailored to your fitness level.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-014-heart-beat"></span>
                <h4>Personalized Plans</h4>
                <p>
                  Every body is different — we build workout plans that fit your
                  goals, schedule, and lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="classes-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Our Classes</span>
                <h2>PROGRAMS FOR EVERY GOAL</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Class 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="class-item">
                <div className="ci-pic">
                  <Image
                    src="/img/classes/class-1.jpg"
                    alt="Weightlifting"
                    width={360}
                    height={240}
                  />
                </div>
                <div className="ci-text">
                  <span>Strength</span>
                  <h5>Weightlifting</h5>
                  <a href="#">
                    View Details <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Class 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="class-item">
                <div className="ci-pic">
                  <Image
                    src="/img/classes/class-2.jpg"
                    alt="Indoor cycling"
                    width={360}
                    height={240}
                  />
                </div>
                <div className="ci-text">
                  <span>Cardio</span>
                  <h5>Indoor Cycling</h5>
                  <a href="#">
                    View Details <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Class 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="class-item">
                <div className="ci-pic">
                  <Image
                    src="/img/classes/class-3.jpg"
                    alt="Kettlebell training"
                    width={360}
                    height={240}
                  />
                </div>
                <div className="ci-text">
                  <span>Strength</span>
                  <h5>Kettlebell Training</h5>
                  <a href="#">
                    View Details <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Class 4 */}
            <div className="col-lg-6 col-md-6">
              <div className="class-item">
                <div className="ci-pic">
                  <Image
                    src="/img/classes/class-4.jpg"
                    alt="HIIT training"
                    width={360}
                    height={240}
                  />
                </div>
                <div className="ci-text">
                  <span>Cardio</span>
                  <h4>HIIT Training</h4>
                  <a href="#">
                    View Details <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Class 5 */}
            <div className="col-lg-6">
              <div className="class-item">
                <div className="ci-pic">
                  <Image
                    src="/img/classes/class-5.jpg"
                    alt="Full body workout"
                    width={360}
                    height={240}
                  />
                </div>
                <div className="ci-text">
                  <span>Fitness</span>
                  <h4>Full Body Workout</h4>
                  <a href="#">
                    View Details <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RegisterBanner />
      <Price />

      {/* Gallery Section */}
      <div className="gallery-section">
        <div className="container">
          <div className="section-title">
            <span>Gallery</span>
            <h2>OUR TRAINING ENVIRONMENT</h2>
          </div>
        </div>

        <div className="gallery">
          <div className="grid-sizer"></div>

          <div
            className="gs-item grid-wide set-bg"
            data-setbg="img/gallery/gallery-1.jpg"
          >
            <a href="/img/gallery/gallery-1.jpg" className="thumb-icon image-popup">
              <i className="fa fa-picture-o"></i>
            </a>
          </div>

          <div className="gs-item set-bg" data-setbg="img/gallery/gallery-2.jpg">
            <a href="/img/gallery/gallery-2.jpg" className="thumb-icon image-popup">
              <i className="fa fa-picture-o"></i>
            </a>
          </div>

          <div className="gs-item set-bg" data-setbg="img/gallery/gallery-3.jpg">
            <a href="/img/gallery/gallery-3.jpg" className="thumb-icon image-popup">
              <i className="fa fa-picture-o"></i>
            </a>
          </div>

          <div className="gs-item set-bg" data-setbg="img/gallery/gallery-4.jpg">
            <a href="/img/gallery/gallery-4.jpg" className="thumb-icon image-popup">
              <i className="fa fa-picture-o"></i>
            </a>
          </div>

          <div className="gs-item set-bg" data-setbg="img/gallery/gallery-5.jpg">
            <a href="/img/gallery/gallery-5.jpg" className="thumb-icon image-popup">
              <i className="fa fa-picture-o"></i>
            </a>
          </div>

          <div
            className="gs-item grid-wide set-bg"
            data-setbg="img/gallery/gallery-6.jpg"
          >
            <a href="/img/gallery/gallery-6.jpg" className="thumb-icon image-popup">
              <i className="fa fa-picture-o"></i>
            </a>
          </div>
        </div>
      </div>

      <Team />
    </>
  );
}
