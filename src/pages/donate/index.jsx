import { useState } from "react";
import styles from "./donate.module.css";
import { useNavigate } from "react-router-dom";
import annadanamImg from "../../assets/donation_annadanam.jpg";
import brickImg from "../../assets/donation_brick.jpg";
import deepaImg from "../../assets/donation_deepam.jpg";
import festivalFundImg from "../../assets/donation_festival.jpg";
import govuDanamImg from "../../assets/donation_govu.jpg";
import vahanaImg from "../../assets/donation_vahanam.jpg";
import prasadamImg from "../../assets/donation_prasad.jpg";



export default function Donate() {
    const navigate = useNavigate();
    return (
        <>

            {/* Navbar */}
            <nav className={styles.navbar}>
                <div className={styles.logo}>🛕 Govindaraja Swamy Temple</div>
                <ul className={styles.navLinks}>
                    <li><a href="#" onClick={(e) => {
                        e.preventDefault();
                        navigate("/");
                    }}>Home</a></li>
                    <li><a href="#" onClick={(e) => {
                        e.preventDefault();
                        navigate("/about");
                    }}>About</a></li>
                    <li><a href="#" onClick={(e) => {
                        e.preventDefault();
                        navigate("/darshan");
                    }}>Darshan</a></li>
                    <li><a href="#" onClick={(e) => {
                        e.preventDefault();
                        navigate("/events");
                    }}>Events</a></li>
                    <li><a href="#" onClick={(e) => {
                        e.preventDefault();
                        navigate("/seva");
                    }}>Seva</a></li>
                    <li><a href="#" onClick={(e) => {
                        e.preventDefault();
                        navigate("/donate");
                    }}>Donate</a></li>
                    <li><a href="#" onClick={(e) => {
                        e.preventDefault();
                        navigate("/contact");
                    }}>Contact</a></li>
                    <li><a href="#" onClick={(e) => {
                        e.preventDefault();
                        navigate("/login");
                    }}>Login</a></li>
                </ul>
            </nav>


            {/* Header Section */}
            <section className={styles.headerSection}>
                <div className={styles.overlay}>
                    <h1 className={styles.heading}>Offer Your Contribution to the Divine</h1>
                    <p className={styles.subtext}>
                        Your generous donations help us preserve the temple’s heritage and serve the devotees.
                    </p>
                </div>
            </section>


            {/* Donations Section */}
            <section className={styles.donationsSection}>
                <h2 className={styles.sectionHeading}>Donations</h2>

                <div className={styles.donationCards}>
                    <div className={styles.card}>
                        <img src={annadanamImg} alt="Annadanam" />
                        <h3>Annadanam</h3>
                        <p className={styles.subText}>Feed the Needy, Serve the Divine</p>
                        <p className={styles.desc}>
                            Your open-hearted contribution can help provide meals to thousands of devotees and the underprivileged.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <img src={govuDanamImg} alt="Govu Danam" />
                        <h3>Govu Danam (Cow Donation)</h3>
                        <p className={styles.subText}>Nurture Dharma, Receive Blessings</p>
                        <p className={styles.desc}>
                            Support the care and feeding of sacred cows in temple goshalas — a timeless act of compassion and devotion.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <img src={brickImg} alt="Donate a Brick" />
                        <h3>Donate a Brick</h3>
                        <p className={styles.subText}>Build a Legacy of Faith</p>
                        <p className={styles.desc}>
                            Contribute towards temple construction — each brick donated becomes part of the temple’s sacred foundation.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <img src={deepaImg} alt="Deepa Danam" />
                        <h3>Deepa Danam (Lamp Donation)</h3>
                        <p className={styles.subText}>Light the Path of Divinity</p>
                        <p className={styles.desc}>
                            Sponsor oil lamps for daily rituals and festivals — dispelling darkness and invoking divine light.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <img src={festivalFundImg} alt="Festival Fund" />
                        <h3>Festival Fund</h3>
                        <p className={styles.subText}>Celebrate Devotion Together</p>
                        <p className={styles.desc}>
                            Help organize major festivals with grandeur - support decorations, prasadam, and cultural programs.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <img src={vahanaImg} alt="Vahana Seva" />
                        <h3>Vahana Seva Donation</h3>
                        <p className={styles.subText}>Offer a Ride to the Divine</p>
                        <p className={styles.desc}>
                            Sponsor the deity’s procession on Garuda, Hanuman, or other vahanas, a sacred act linked to auspicious festivals.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <img src={prasadamImg} alt="Prasadam Seva" />
                        <h3>Prasadam Seva Donation</h3>
                        <p className={styles.subText}>Share the Sweetness of Devotion</p>
                        <p className={styles.desc}>
                            Sponsor the preparation and distribution of sacred prasadam to devotees. A sweet way to share divine blessings and joy.
                        </p>
                    </div>
                </div>
                <button className={styles.donateBtn}> Donate Now </button>
            </section>


            {/* General Donations Section*/}
            <section className={styles.generalSection}>
                <div className={styles.generalContainer}>
                    <h2>General Donations</h2>
                    <p className={styles.subtitle}>
                        Contribute to the temple’s daily rituals, maintenance, and spiritual services.
                        Your offering helps preserve sacred traditions and supports the well-being of all devotees.
                    </p>

                    <button className={styles.generalBtn}> Make a Donation </button>
                </div>
            </section>


            {/* Volunteer Section*/}
            <section className={styles.volunteerSection}>
                <h2 className={styles.sectionHeading}>Volunteer with Us</h2>

                <div className={styles.volunteerCards}>
                    <div className={styles.card}>
                        <h3>Prasadam Packing & Distribution</h3>
                        <p>
                            Assist in preparing and distributing the sacred Tirupati laddus to devotees with devotion and care.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>Festival Preparation</h3>
                        <p>
                            Help with decorations, lighting, and logistics during Brahmotsavam, Garuda Seva, and other grand events.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>Bhajan & Kirtan Groups</h3>
                        <p>
                            Join devotional singing teams that perform bhajans and kirtans during temple rituals and festivals.
                        </p>
                    </div>

                </div>
                <button className={styles.registerBtn}>Register Now</button>
            </section>


            {/* Footer Section */}
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    {/* Sec 1 */}
                    <div className={styles.footerSection}>
                        <h3>Sri Govindaraja Swamy Devasthanam</h3>
                        <p>
                            A sacred Vaishnavite temple dedicated to Lord Vishnu, known for its
                            rich heritage, divine rituals, and spiritual significance. Visit for
                            darshan, poojas, and to experience eternal blessings.
                        </p>
                    </div>
                    {/* Sec 2 */}
                    <div className={styles.footerSection}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Pooja Bookings</li>
                            <li>Donations</li>
                            <li>Volunteer Registration</li>
                            <li>Live Events</li>
                            <li>Online Seva</li>
                        </ul>
                    </div>
                    {/* Sec 3 */}
                    <div className={styles.footerSection}>
                        <h3>Live Pooja Bookings</h3>
                        <ul>
                            <li>Abhishekam Seva</li>
                            <li>Vishesha Pooja</li>
                            <li>Archana Seva</li>
                        </ul>
                    </div>
                    {/* Sec 4 */}
                    <div className={styles.footerSection}>
                        <h3>Contact Us</h3>
                        <p>
                            Sri Govindaraja Swamy Devasthanam <br />
                            Jagadgiri Gutta, Hyderabad – 500037, Telangana, India.
                        </p>
                        <p>☎️ 098491 02997</p>
                        <p>📧 govindharajaswamy.temple@gmail.com</p>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>© 2025 Sri Govindaraja Swamy Devasthanam Foundation | All Rights Reserved | Future Invo Solutions</p>
                </div>
            </footer>



        </>
    )

}