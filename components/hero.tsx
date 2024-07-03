export default function Hero() {
  return (
    <>
      {/* Hero Section Begin */}
      <section className="hero-section">
        <div className="hs-slider owl-carousel">
          <div className="hs-item set-bg" data-setbg="/img/hero/hero-1.jpg">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-6">
                  <div className="hi-text">
                    <span>Sajilo Fitness and Gym</span>
                    <h1>
                      Be <strong>strong</strong> traning hard
                    </h1>
                    <a href="#" className="primary-btn">
                      Get info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hs-item set-bg" data-setbg="/img/hero/hero-2.jpg">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-6">
                  <div className="hi-text">
                    <span>Sajilo Fitness and Gym </span>
                    <h1>
                      Be <strong>strong</strong> traning hard
                    </h1>
                    <a href="#" className="primary-btn">
                      Get info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
    </>
  );
}
