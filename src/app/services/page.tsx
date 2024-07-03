import Price from "../../../components/price";

export default function Services() {
  return (
    <>
      {/* Breadcrumb Section Begin */}
      <section
        className="breadcrumb-section"
        style={{
          backgroundImage: 'url("/img/breadcrumb-bg.jpg")',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb-text">
                <h2>Services</h2>
                <div className="bt-option">
                  <a href="/">Home</a>
                  <span>Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}

      {/* Services Section Begin */}
      <section className="services-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>What we do?</span>
                <h2>PUSH YOUR LIMITS FORWARD</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 order-lg-1 col-md-6 p-0">
              <div className="ss-pic">
                <img src="img/services/services-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-3 order-lg-2 col-md-6 p-0">
              <div className="ss-text">
                <h4>Personal training</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut dolore facilisis.
                </p>
                <a href="#">Explore</a>
              </div>
            </div>
            <div className="col-lg-3 order-lg-3 col-md-6 p-0">
              <div className="ss-pic">
                <img src="img/services/services-2.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-3 order-lg-4 col-md-6 p-0">
              <div className="ss-text">
                <h4>Group fitness classNamees</h4>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus.
                </p>
                <a href="#">Explore</a>
              </div>
            </div>
            <div className="col-lg-3 order-lg-8 col-md-6 p-0">
              <div className="ss-pic">
                <img src="img/services/services-4.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-3 order-lg-7 col-md-6 p-0">
              <div className="ss-text second-row">
                <h4>Body building</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut dolore facilisis.
                </p>
                <a href="#">Explore</a>
              </div>
            </div>
            <div className="col-lg-3 order-lg-6 col-md-6 p-0">
              <div className="ss-pic">
                <img src="img/services/services-3.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-3 order-lg-5 col-md-6 p-0">
              <div className="ss-text second-row">
                <h4>Strength training</h4>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus.
                </p>
                <a href="#">Explore</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section End */}

      {/* Banner Section Begin */}
      <section
        className="banner-section"
        style={{ backgroundImage: "url('/img/banner-bg.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="bs-text service-banner">
                <h2>Exercise until the body obeys.</h2>
                <div className="bt-tips">
                  Where health, beauty and fitness meet.
                </div>
                <a
                  href="https://www.youtube.com/watch?v=EzKkl64rRbM"
                  className="play-btn video-popup"
                >
                  <i className="fa fa-caret-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}
      <Price />
    </>
  );
}
