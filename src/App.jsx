import React from "react";
import { useState } from "react";
import "./style.css";
import "./responsive.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

const phone = "+918796762528";

// TOP BAR
function Topbar() {
  return (
    <div className="topbar">
      <div className="container">
        <div>
          📍 Sector 75, Faridabad, Haryana
        </div>

        <div className="top-links">
          <a href={`tel:${phone}`}>
            📞 Complaint Helpline
          </a>

          <a href="/contact">
            Contact RWA
          </a>
        </div>
      </div>
    </div>
  );
}

// HEADER
function Navbar() {
  return (
    <header>
      <div className="container navbar">

        <Link to="/" className="brand">
          <img src="/img/logo.jpeg" alt="GPRWA Logo" />

          <div className="brand-text">
            <h1>Green Power Residency</h1>
            <p>Sector 75, Faridabad</p>
          </div>
        </Link>

        <nav>
          <NavLink to="/" end>Home</NavLink>

          <NavLink to="/facilities">
            Facilities
          </NavLink>

          <NavLink to="/committee">
            RWA Committee
          </NavLink>

          <NavLink to="/notices">
            Notices
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

          <a href={`tel:${phone}`} className="nav-button">
            Call for Complaint
          </a>
        </nav>

      </div>
    </header>
  );
}

// Announcement
function Announcement() {
  return (
    <div className="announcement">
      <marquee
        direction="left"
        scrollamount="15"
        behavior="scroll"
      >
        📢 AGM Meeting Coming Up on 29th November 2026. 
        Check your email or click on Notices above.
      </marquee>
    </div>
  );
}

// HERO
function Hero() {
  return (
    <section className="hero" id="home">

      <div className="container">

        <div className="hero-content">

          <div className="eyebrow">
            Better community • Better living.
          </div>

          <h2>
            Green Power Residency
          </h2>

          <p>
            Welcome to the official community information portal for
            Green Power Residency. Stay informed about society notices,
            events, facilities, RWA activities and resident services.
          </p>

          <div className="hero-actions">

            <Link to="/notices" className="btn btn-primary">
              View Latest Notices
            </Link>

            <a
              href={`tel:${phone}`}
              className="btn btn-outline"
            >
              📞 Register Complaint
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

// STATS
function Stats() {
  return (
    <div className="stats">

      <div className="container">

        <div className="stats-grid">

          <div className="stat">
            <strong>152</strong>
            <span>Residential Units</span>
          </div>

          <div className="stat">
            <strong>24/7</strong>
            <span>Security & Support</span>
          </div>

          <div className="stat">
            <strong>1</strong>
            <span>Resident Community</span>
          </div>

          <div className="stat">
            <strong>100%</strong>
            <span>Community Focused</span>
          </div>

        </div>

      </div>

    </div>
  );
}

// ABOUT
function About() {
  return (
    <section className="about" id="about">

      <div className="container">

        <div className="section-header">

          <div>

            <div className="section-label">
              About Us
            </div>

            <h2 className="section-title">
              About Green Power Residency
            </h2>

          </div>

          <p className="section-description">
            Green Power Residency RWA (GPRWA) is the residents'
            welfare association of Green Power Residency,
            Sector 75, Faridabad, Haryana.
          </p>

        </div>

        <div className="about-grid">

          <div>

            <h3>Our Community</h3>

            <p className="about-text">
              Green Power Residency is a residential community located
              in Sector 75, Faridabad, Haryana. This website is designed
              to provide residents with convenient access to society
              information and RWA services.
            </p>

            <ul className="check-list">
              <li>Community announcements and notices</li>
              <li>RWA information and committee details</li>
              <li>Society facilities and services</li>
              <li>Resident complaints and service requests</li>
              <li>Events and community activities</li>
            </ul>

          </div>

          <div className="about-box">

            <h3>Our RWA</h3>

            <p>
              The Residents Welfare Association works towards maintaining
              common facilities, coordinating resident services and
              supporting a safe and welcoming community.
            </p>

            <p>
              Current committee information, office timings and contact
              details can be updated here by the RWA.
            </p>

            <Link to="/committee" className="btn btn-green">
              Meet the RWA Committee
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

// FACILITIES
function Facilities() {
  return (
    <section id="facilities" class="facilities">

        <div class="container">

            <div class="section-header">

                <div>

                    <div class="section-label">
                        Community
                    </div>

                    <h2 class="section-title">
                        Society Facilities
                    </h2>

                </div>

                <p class="section-description">
                    Information about common facilities and services available
                    within Green Power Residency.
                </p>

            </div>


            <div class="facility-grid">

                <div class="facility">
                    <div class="facility-icon">🔐</div>
                    <h4>Security</h4>
                    <p>24/7 security and visitor management information.</p>
                </div>

                <div class="facility">
                    <div class="facility-icon">📹</div>
                    <h4>CCTV Surveillance</h4>
                    <p>Common-area surveillance and security monitoring.</p>
                </div>

                <div class="facility">
                    <div class="facility-icon">🛗</div>
                    <h4>Elevators</h4>
                    <p>Lift maintenance and service updates.</p>
                </div>

                <div class="facility">
                    <div class="facility-icon">⚡</div>
                    <h4>Power Backup</h4>
                    <p>Power backup information and maintenance notices.</p>
                </div>

                <div class="facility">
                    <div class="facility-icon">🌳</div>
                    <h4>Green Areas</h4>
                    <p>Gardens and common outdoor areas for residents.</p>
                </div>

                <div class="facility">
                    <div class="facility-icon">🏠</div>
                    <h4>Clubhouse</h4>
                    <p>Community facility information and usage rules.</p>
                </div>

                <div class="facility">
                    <div class="facility-icon">🚗</div>
                    <h4>Parking</h4>
                    <p>Resident parking and visitor parking information.</p>
                </div>

                <div class="facility">
                    <div class="facility-icon">🏃</div>
                    <h4>Sports & Recreation</h4>
                    <p>Sports and recreational facilities for residents.</p>
                </div>

            </div>

        </div>

    </section>
  );
}

// RWA COMMITTEE
function Committee() {
  return (
    <section class="committee" id="committee">

        <div class="container">

            <div class="section-header">

                <div>

                    <div class="section-label">
                        Management
                    </div>

                    <h2 class="section-title">
                        RWA Committee
                    </h2>

                </div>

                <p class="section-description">
                    Current office bearers and executive committee members.
                    
                </p>

            </div>


            <div class="committee-grid">

                <div class="member-card">
                    <div class="member-avatar">P</div>
                    <h4>Sh. Pankaj Gupta</h4>
                    <p>President</p>
                </div>

                <div class="member-card">
                    <div class="member-avatar">VP</div>
                    <h4>Sh. Nitin Aggarwal</h4>
                    <p>Vice President</p>
                    
                </div>

                <div class="member-card">
                    <div class="member-avatar">GS</div>
                    <h4>Sh. Amitabh Singh</h4>
                    <p>General Secretary</p>
                    
                </div>

                <div class="member-card">
                    <div class="member-avatar">JS</div>
                    <h4>Sh. Navneet Bathri</h4>
                    <p>Joint Secretary</p>
                </div>

                <div class="member-card">
                    <div class="member-avatar">T</div>
                    <h4>Sh. Kuldeep Shukla</h4>
                    <p>Treasurer</p>
                </div>

                <div class="member-card">
                    <div class="member-avatar">E1</div>
                    <h4>Sh. Vijjwal Kaushik</h4>
                    <p>Executive Member</p>
                </div>

                <div class="member-card">
                    <div class="member-avatar">E2</div>
                    <h4>Ms. Indu Gupta</h4>
                    <p>Executive Member</p>
                </div>

                <div class="member-card">
                    <div class="member-avatar">E3</div>
                    <h4>Ms. Sneh</h4>
                    <p>Executive Member</p>
                </div>

                <div class="member-card">
                    <div class="member-avatar">E4</div>
                    <h4>Sh. S.P. Bansal</h4>
                    <p>Executive Member</p>
                </div>

                <div class="member-card">
                    <div class="member-avatar">E5</div>
                    <h4>Sh P.L. Sharma</h4>
                    <p>Executive Member</p>
                </div>

                <div class="member-card">
                    <div class="member-avatar">E6</div>
                    <h4>Sh. Vikas Jain</h4>
                    <p>Executive Member</p>
                </div>

                <div class="member-card">
                    <div class="member-avatar">E7</div>
                    <h4>Sh. Manish Jain</h4>
                    <p>Executive Member</p>
                </div>
            </div>

        </div>

    </section>
  );
}

// NOTICES
function Notices() {
  const [activeDocument, setActiveDocument] = useState(null);

  const documents = {
    "rwa-bylaws": {
      title: "RWA Bylaws",
      files: [
        {
          name: "Updated RWA Bylaws",
          url: "bylaws/Updated_bylaws.pdf",
          type: "PDF"
        },
        {
          name: "Final MoA and Bye Laws of RWA 2020",
          url: "bylaws/Final MoA and Bye Laws of RWA 2020.pdf",
          type: "PDF"
        }
      ]
    },

    "agm-minutes": {
      title: "AGM Minutes",
      files: [2020, 2021, 2022, 2023, 2024, 2025].map(year => ({
        name: `AGM Minutes ${year}`,
        url: `agm/MOM AGM ${year}.pdf`,
        type: "PDF"
      }))
    },

    maintenance: {
      title: "Maintenance Information",
      files: [
        {
          name: "Repair, Renovation and Shifting by Residents",
          url: "form/Repair, Renovation and Shifting by Residents.pdf",
          type: "PDF"
        }
      ]
    },

    circulars: {
      title: "Important Circulars",
      files: []
    },

    "resident-forms": {
      title: "Resident Forms",
      files: [
        {
          name: "DSA Form",
          url: "form/DSA.pdf",
          type: "PDF"
        },
        {
          name: "New Flat Form",
          url: "form/NEW_FLAT.jpeg",
          type: "IMG"
        },
        {
          name: "RWA Form",
          url: "form/RWA_FORM.pdf",
          type: "PDF"
        },
        {
          name: "Vehicle Form",
          url: "form/vehicle.pdf",
          type: "PDF"
        },
        {
          name: "Repair, Renovation & Shifting Form",
          url: "form/Repair, Renovation and Shifting by Residents.pdf",
          type: "PDF"
        }
      ]
    }
  };

  const cards = [
    {
      id: "rwa-bylaws",
      title: "RWA Bylaws",
      description: "Click to view"
    },
    {
      id: "agm-minutes",
      title: "AGM Minutes",
      description: "2020 – 2025"
    },
    {
      id: "maintenance",
      title: "Maintenance Information",
      description: "Click to view"
    },
    {
      id: "circulars",
      title: "Important Circulars",
      description: "Click to view"
    },
    {
      id: "resident-forms",
      title: "Resident Forms",
      description: "Click to view"
    }
  ];

  const selected = activeDocument
    ? documents[activeDocument]
    : null;

  return (
    <section>
    <section className="documents" id="documents">

      <div className="container">

        <div className="section-header">

          <div>
            <div className="section-label">
              Transparency
            </div>

            <h2 className="section-title">
              Important Notices/Documents
            </h2>
          </div>

          <p className="section-description">
            Access official society documents, AGM minutes,
            forms and important notices.
          </p>

        </div>

        {/* Document Cards */}

        <div className="document-grid">

          {cards.map(card => (

            <div
              key={card.id}
              className="document"
              onClick={() => setActiveDocument(card.id)}
              role="button"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveDocument(card.id);
                }
              }}
            >

              <div className="document-icon">
                PDF
              </div>

              <div>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>

            </div>

          ))}

        </div>

        {/* Document Details */}

        {selected && (

          <div className="document-content active">

            <div className="document-modal-header">

              <h2>{selected.title}</h2>

              <button
                onClick={() => setActiveDocument(null)}
                className="document-close"
                type="button"
              >
                &times;
              </button>

            </div>

            <div className="document-list">

              {selected.files.length > 0 ? (

                selected.files.map((file, index) => (

                  <a
                    key={index}
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <span className="document-icon">
                      {file.type}
                    </span>

                    <div>
                      <h4>{file.name}</h4>
                      <p>Click to view document</p>
                    </div>

                  </a>

                ))

              ) : (

                <p>
                  Important circulars and society notices
                  will be added here.
                </p>

              )}

            </div>

          </div>

        )}

      </div>

    </section>
    <section class="events" id="events">

        <div class="container">

            <div class="section-header">

                <div>

                  <div class="section-label">
                        Community Life
                  </div>

                    <h2 class="section-title">
                        Upcoming Events
                    </h2>

                </div>

            </div>

            <div class="event-grid">
            
                <div class="event-card">

                    <div class="event-top">
                        <div class="event-month">
                            November
                        </div>

                        <div class="event-day">
                            29th November 2026
                        </div>
                    </div>

                    <div class="event-content">

                        <h4>
                            Annual General Meeting
                        </h4>

                        <p>
                            📍 Designaed Stilt Area<br></br>
                            🕐 11:00 A.M.
                        </p>

                    </div>

                </div>

                <div class="event-card">

                    <div class="event-top">
                        <div class="event-month">
                            Every Week
                        </div>

                        <div class="event-day">
                            SAT & SUN
                        </div>
                    </div>

                    <div class="event-content">

                        <h4>
                            RWA General Meeting
                        </h4>

                        <p>
                            📍 RWA Office<br></br>
                            🕐 11:30 A.M.
                        </p>

                    </div>

                </div>
            </div>

        </div>

    </section>
    </section>
  );
}

// CONTACT
function Contact() {
  return (
    <section>
      <section class="complaint-help" id="complaints">

        <div class="container">

            <div class="complaint-grid">

                <div>

                    <div class="section-label">
                        Resident Services
                    </div>

                    <h2 class="section-title">
                        Need to Register a Complaint?
                    </h2>

                    <p>
                        Residents can directly call the RWA complaint helpline
                        to register maintenance issues, security concerns,
                        common-area complaints and other service requests.
                    </p>

                </div>


                <div class="complaint-help-action">

                    <span>
                        RWA Complaint Helpline
                    </span>

                    <a
                        href="tel:+91 87967 62528"
                        class="btn btn-green">
                        📞 Call & Register Complaint
                    </a>
                    <br></br>
                    <small>
                        Please keep your flat/unit number and complaint
                        details ready.
                    </small>

                </div>

            </div>

        </div>

      </section>

      <section id="contact">

          <div class="container">

              <div class="section-header">

                  <div>

                      <div class="section-label">
                          Get In Touch
                      </div>

                      <h2 class="section-title">
                          Contact the RWA
                      </h2>

                  </div>

              </div>


              <div class="contact-grid">

                  <div class="contact-card">

                      <h3>
                          Green Power Residency
                      </h3>


                      <div class="contact-row">

                          <div class="contact-icon">
                              📍
                          </div>

                          <div>

                              <strong>
                                  Address
                              </strong>

                              <span>
                                  Green Power Residency,<br></br>
                                  Sector 75, Faridabad,<br></br>
                                  Haryana, India
                              </span>

                          </div>

                      </div>


                      <div class="contact-row">

                          <div class="contact-icon">
                              ☎
                          </div>

                          <div>

                              <strong>
                                  RWA Complaint Helpline
                              </strong>

                              <a href="tel:+91 87967 62528">
                                  +91 87967 62528
                              </a>

                          </div>

                      </div>


                      <div class="contact-row">

                          <div class="contact-icon">
                              ✉
                          </div>

                          <div>
                              <strong>Email</strong>

                              <a href="mailto:greenpowerrwa@gmail.com">
                                  greenpowerrwa@gmail.com
                              </a>
                          </div>

                      </div>


                      <div class="contact-row">

                          <div class="contact-icon">
                              🕐
                          </div>

                          <div>

                              <strong>
                                  Office Hours
                              </strong>

                              <span>
                                  10:00 A.M. TO 06:00 P.M. (Monday to Friday)<br></br>
                                  11:30 A.M. TO 01:30 P.M. (Saturday to Sunday)
                              </span>

                          </div>

                      </div>

                  </div>


                  <div class="map-placeholder">

                      <div class="map-inner">

                          <strong>
                              Green Power Residency
                          </strong>

                          <span>
                              Sector 75, Faridabad, Haryana
                          </span>

                          <br></br><br></br>

                          <button
                              className="btn btn-green"
                              onClick={() => {
                                  const address =
                                      "Green Power Residency, Sector 75, Faridabad, Haryana";

                                  const url =
                                      "https://www.google.com/maps/search/?api=1&query=" +
                                      encodeURIComponent(address);

                                  window.open(url, "_blank", "noopener,noreferrer");
                              }}
                          >
                              Open Location
                          </button>

                      </div>

                  </div>

              </div>

          </div>

      </section>
    </section>
  );
}

// FOOTER
function Footer() {
  return (
    <footer>

      <div className="container">

        <div className="footer-grid">

          <div>

            <div className="footer-brand">
              Green Power Residency
            </div>

            <p>
              Residents Welfare Association community portal for
              notices, resident services, events and society information.
            </p>

            <br />

            <p>
              Sector 75, Faridabad, Haryana
            </p>

          </div>

          <div>

            <h3>Community</h3>

            <Link to="/#about">
              About Society
            </Link>

            <Link to="/committee">
              RWA Committee
            </Link>

            <Link to="/facilities">
              Facilities
            </Link>

            <Link to="/notices#events">
              Events
            </Link>

          </div>

          <div>

            <h3>Resident Services</h3>

            <a href={`tel:${phone}`}>
              📞 Register Complaint
            </a>

            <Link to="/notices">
              Notice Board
            </Link>

            <Link to="/notices">
              Documents
            </Link>

            <Link to="/contact">
              Contact RWA
            </Link>

          </div>

          <div>

            <h3>Important</h3>

            <Link to="/notices">
              Rules & Regulations
            </Link>

            <Link to="/notices">
              RWA Bylaws
            </Link>

            <Link to="/contact">
              Helpdesk
            </Link>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()}
            {" "}Green Power Residency RWA.
            {" "}Site made by @Vijjwal Kaushik
          </span>

        </div>

      </div>

    </footer>
  );
}

// COMMON PAGE LAYOUT
function Layout({ children }) {
  return (
    <>
      <Topbar />
      <Navbar />
      <Announcement />
      {children}
      <Footer />
    </>
  );
}

// HOME PAGE
function Home() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <About />
    </Layout>
  );
}

// FACILITIES PAGE
function FacilitiesPage() {
  return (
    <Layout>
      <Facilities />
    </Layout>
  );
}

// COMMITTEE PAGE
function CommitteePage() {
  return (
    <Layout>
      <Committee />
    </Layout>
  );
}

// NOTICES PAGE
function NoticesPage() {
  return (
    <Layout>
      <Notices />
    </Layout>
  );
}

// CONTACT PAGE
function ContactPage() {
  return (
    <Layout>
      <Contact />
    </Layout>
  );
}

// MAIN APP
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/facilities"
          element={<FacilitiesPage />}
        />

        <Route
          path="/committee"
          element={<CommitteePage />}
        />

        <Route
          path="/notices"
          element={<NoticesPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
