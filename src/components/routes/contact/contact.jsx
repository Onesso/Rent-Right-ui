import "./contact.scss";
import moment from "moment";
export default function Contact() {
  const now = moment();

  // Format the date and time
  const formattedDateTime = now.format("YYYY MMMM Do");

  const handlesubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);
    console.log(inputs);
  };
  return (
    <div className="contactContainer">
      <div className="wrapper">
        <div className="top">
          <h1>Contact Us</h1>
        </div>

        <div className="middle">
          <div className="left">
            <form
              method="POST"
              action="https://formsubmit.co/odhiambofrank1965@gmail.com"
              enctype="multipart/form-data"
            >
              <h1>Drop Us A Line</h1>

              <span>
                Feel free to connect with us through our online channels for
                update, news and more
              </span>

              <div className="inputPartition">
                <div className="inputleft">
                  <div className="labelandinput">
                    <label htmlFor="">Full Name:</label>
                    <input
                      name="username"
                      type="text"
                      placeholder="name"
                    ></input>
                  </div>
                </div>

                <div className="inputRight">
                  <div className="labelandinput">
                    <label htmlFor="">Phone Number:</label>
                    <input
                      name="phone_number"
                      type="number"
                      placeholder="+254 70937882"
                    ></input>
                  </div>
                </div>
              </div>

              <div className="inputPartition">
                <div className="inputleft">
                  <div className="labelandinput">
                    <label htmlFor="">Email</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="email"
                    ></input>
                  </div>
                </div>

                <div className="inputRight">
                  <div className="labelandinput">
                    <label htmlFor="">Subject:</label>
                    <input
                      name="subject"
                      type="text"
                      placeholder="Enter Keyword"
                    ></input>
                  </div>
                </div>
              </div>

              <div className="textinput">
                <div className="labelandinput">
                  <label htmlFor="">Your Message</label>
                  <textarea name="message" placeholder="message"></textarea>
                </div>
              </div>

              <div className="buttondiv">
                <button>Send message</button>
              </div>
            </form>
          </div>

          <div className="right">
            <h1>Contact Us</h1>
            <div className="contactInfo">
              <label>Address:</label>
              <p>Ruarak Nairobi</p>
              <p>Kenya</p>
            </div>
            <div className="contactInfo">
              <label>Information:</label>
              <p>+254 115984633</p>
              <p>rentright@gmail.com</p>
            </div>
            <div className="contactInfo">
              <label>Opentime:</label>
              <p>Monday - Friday: 0800 - 20:00</p>
              <p>Saturday - Sunday: 10:00 - 18:00</p>
            </div>
            <div className="SocialMedialinks">
              <label>Follow Us:</label>
              <div className="sociallinks">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/facebook.png" alt=" facebook" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/instagram.png" alt="instagram" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/youtube.png" alt="youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mapview">
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14503.20205076904!2d36.86294779014564!3d-1.2561062183803526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17eb1d447363%3A0x17a2d29bdcf01fda!2sKCA%20University!5e0!3m2!1sen!2ske!4v1742756204489!5m2!1sen!2ske"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Responsive Google Map"
            ></iframe>
          </div>
        </div>
        <div className="bottom">
          <div className="up">{/* <hr className="custom-hr" /> */}</div>

          <div className="intermediate">
            <div className="leftt">
              <p>
                Specializes in providing high quality experience, in need
                contact us
              </p>
              <span>Ruaraka, Nairobi</span>
              <span>+254 115984633</span>
              <span>rentright@gmail.com</span>
            </div>

            <div className="center">
              <div className="Categories">
                <h2>Categories</h2>
                <span>Pricing Plans</span>
                <span>Our Services</span>
                <span>About Us</span>
                <span>Contact Us</span>
              </div>
              <div className="ourCompany">
                <h2>Our Company</h2>
                <span>Property For Sale</span>
                <span>Property For Rent</span>
                <span>Propert For Buy</span>
                <span>Our Agent</span>
              </div>
            </div>

            <div className="rightt">
              <span>Newsletter</span>
              <p>Your Weekly/Monthly Dose of Knowledge and inspiration</p>
              <input type="email" placeholder="Your email address"></input>
            </div>
          </div>
          <div className="low">
            {/* <hr className="custom-hr" /> */}
            <div>&copy; Rent-Right. All Right Reserved </div>

            <p>{formattedDateTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
