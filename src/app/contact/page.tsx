export default function Services() {
  return (
    <>
      {/* Breadcrumb Section Begin */}
      <section
        className="breadcrumb-section"
        style={{
          backgroundImage: 'url("img/breadcrumb-bg.jpg")',
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb-text">
                <h2>Contact Us</h2>
                <div className="bt-option">
                  <a href="./index.html">Home</a>
                  <a href="#">Pages</a>
                  <span>Contact us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}

      {/* Contact Section Begin */}
      <section className="contact-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title contact-title">
                <span>Contact Us</span>
                <h2>GET IN TOUCH</h2>
              </div>
              <div className="contact-widget">
                <div className="cw-text">
                  <a
                    href="https://www.google.com/maps/place/Sajilo+Gym/@26.4872206,87.2741772,17z/data=!3m1!4b1!4m6!3m5!1s0x39ef7476234ce6b1:0x4bbb388feda70962!8m2!3d26.4872206!4d87.2762209!16s%2Fg%2F11c535w8g9?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-map-marker"></i>
                    <p>
                      Kanchanbari-4 <br /> Biratnagar, Nepal
                    </p>
                  </a>
                </div>
                <div className="cw-text">
                  <a href="tel:980-5311793">
                    <i className="fa fa-mobile"></i>
                    <ul>
                      <li>980-5311793</li>
                    </ul>
                  </a>
                </div>
                <div className="cw-text email">
                  <a href="mailto:sajilofitness@gmail.com">
                    <i className="fa fa-envelope"></i>
                    <p>sajilofitness@gmail.com</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="leave-comment">
                <form action="#">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Website" />
                  <textarea placeholder="Comment"></textarea>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.0224942578852!2d87.2741771814704!3d26.48722058545002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef7476234ce6b1%3A0x4bbb388feda70962!2sSajilo%20Gym!5e0!3m2!1sen!2snp!4v1719929674262!5m2!1sen!2snp"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </>
  );
}
