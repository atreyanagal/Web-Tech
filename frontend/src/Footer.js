import './Footer.css'

const Footer = () => {
  return (
    <div className='foot'>
      <footer>
        <div class="content">
          <div class="left box">
            <div class="upper">
              <div class="topic">About us</div>
              <p>
                Travel Arround Hubli is a tourist guide site which helps you to travel places arround hubli
              </p>
            </div>
            <div class="lower">
              <div class="topic">Contact us</div>
              <div class="phone">
                <a href="#">
                  <i class="fas fa-phone-volume"></i>8618481417
                </a>
              </div>
              <div class="email">
                <a href="#">
                  <i class="fas fa-envelope"></i>hegadegururaj@gmail.com
                </a>
              </div>
            </div>
          </div>
          {/* <div class="middle box">
            <div class="topic">Our Services</div>
            <div>
              <a href="#">Web Design, Development</a>
            </div>
            <div>
              <a href="#">Web UX Design, Reasearch</a>
            </div>
            <div>
              <a href="#">Web User Interface Design</a>
            </div>
            <div>
              <a href="#">Theme Development, Design</a>
            </div>
            <div>
              <a href="#">Mobile Application Design</a>
            </div>
            <div>
              <a href="#">Wire raming & Prototyping</a>
            </div>
          </div> */}
          <div class="right box">
            <div class="topic">Subscribe us</div>
          </div>
        </div>
        <div class="bottom">
          <p>
            Copyright © 2022 <a href="#">Travel around hubli</a> All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
