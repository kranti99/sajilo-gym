import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <>
      {/* Offcanvas Menu Section Begin */}
      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
        <div className="canvas-close">
          <i className="fa fa-close"></i>
        </div>
        <div className="canvas-search search-switch">
          <i className="fa fa-search"></i>
        </div>
        <nav className="canvas-menu mobile-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="./about-us">About Us</a>
            </li>
            <li>
              <Link href="./classes">classes</Link>
            </li>
            <li>
              <Link href="./services">Services</Link>
            </li>
            <li>
              <Link href="./team">Our Team</Link>
            </li>
            <li>
              <Link href="#">Pages</Link>
              <ul className="dropdown">
                <li>
                  <a href="./about-us">About us</a>
                </li>
                <li>
                  <Link href="./className-timetable.html">
                    classNamees timetable
                  </Link>
                </li>
                <li>
                  <Link href="./bmi-calculator.html">Bmi calculate</Link>
                </li>
                <li>
                  <Link href="./team.html">Our team</Link>
                </li>
                <li>
                  <Link href="./gallery.html">Gallery</Link>
                </li>
                <li>
                  <Link href="./blog.html">Our blog</Link>
                </li>
                <li>
                  <Link href="./404.html">404</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="./contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="canvas-social">
          <Link href="#">
            <i className="fa fa-facebook"></i>
          </Link>
          <Link href="#">
            <i className="fa fa-twitter"></i>
          </Link>
          <Link href="#">
            <i className="fa fa-youtube-play"></i>
          </Link>
          <Link href="#">
            <i className="fa fa-instagram"></i>
          </Link>
        </div>
      </div>
      {/* Offcanvas Menu Section End */}

      {/* Header Section Begin */}
      <header className="header-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <a href="/">
                  <Image
                    src="/img/logo-new.png"
                    alt=""
                    width={140}
                    height={140}
                    priority={true}
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="nav-menu">
                <ul>
                  <li className="active">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="./about-us">About Us</a>
                  </li>
                  <li>
                    <Link href="./className-details">classNamees</Link>
                  </li>
                  <li>
                    <Link href="./services">Services</Link>
                  </li>
                  <li>
                    <Link href="./team">Our Team</Link>
                  </li>
                  <li>
                    <Link href="#">Pages</Link>
                    <ul className="dropdown">
                      <li>
                        <a href="./about-us">About us</a>
                      </li>
                      <li>
                        <Link href="./className-timetable">
                          classNamees timetable
                        </Link>
                      </li>
                      <li>
                        <Link href="./bmi-calculator">Bmi calculate</Link>
                      </li>
                      <li>
                        <Link href="./team">Our team</Link>
                      </li>
                      <li>
                        <Link href="./gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link href="./blog">Our blog</Link>
                      </li>
                      <li>
                        <Link href="./404">404</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="./contact.html">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="top-option">
                <div className="to-search search-switch">
                  <i className="fa fa-search"></i>
                </div>
                <div className="to-social">
                  <a
                    href="https://www.facebook.com/sajilofitnessandgym"
                    target="_blank"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/sajilofitnessandgym/"
                    target="_blank"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="canvas-open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
      {/* Header End */}
    </>
  );
}
