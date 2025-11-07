import { useState } from "react";
import styles from "./darshan.module.css";
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/darshan_hero.png";
import ladduImg from "../../assets/laddu.jpg";
import pulihoraImg from "../../assets/pullihora.jpg";
import kesariImg from "../../assets/kesari.jpg";
import curdRiceImg from "../../assets/curd_rice.jpg";

export default function Darshan() {
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const [showForm, setShowForm] = useState(false);

    const handleOpen = () => setShowForm(true);
    const handleClose = () => setShowForm(false);

    return (
        <>
            {/* Navbar */}
            <nav className={styles.navbar}>
                <div className={styles.logo}>🛕 Govindaraja Swamy Temple</div>

                {/* Hamburger */}
                <div
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <ul
                    className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}
                    onClick={() => setMenuOpen(false)} // closes menu when any link is clicked
                >
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Home</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/about"); }}>About</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/darshan"); }}>Darshan</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/events"); }}>Events</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/seva"); }}>Seva</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/donate"); }}>Donate</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/contact"); }}>Contact</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/login"); }}>Login</a></li>
                </ul>
            </nav>



            {/* Hero */}
            <section
                className={styles.heroSection}
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <div className={styles.overlay}>
                    <div className={styles.titleBox}>
                        <h1 className={styles.title}>Temple Darshan Schedule</h1>
                        <p className={styles.subtext}>
                            Experience divine blessings and peace — <br />
                            plan your visit with ease.
                        </p>
                    </div>

                </div>
            </section>



            {/* Timetable Section */}

            <section className={styles.scheduleSection}>
                <h2 className={styles.sectionTitle}>Daily Darshan Schedule</h2>
                <p className={styles.sectionDesc}>
                    The temple follows a sacred daily routine to offer prayers and services to the
                    deity. Devotees are encouraged to plan their visit according to the timings
                    below for a peaceful and fulfilling darshan experience.
                </p>

                <table className={styles.scheduleTable}>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Seva / Ritual</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>5:30 AM</td>
                            <td>Suprabhatam</td>
                            <td>Early morning prayer to awaken the Lord.</td>
                        </tr>
                        <tr>
                            <td>6:00 AM</td>
                            <td>Thomala Seva</td>
                            <td>Flower garland decoration for the deity.</td>
                        </tr>
                        <tr>
                            <td>7:00 AM</td>
                            <td>Archana & Abhishekam</td>
                            <td>Chanting of divine names and sacred bath to the deity.</td>
                        </tr>
                        <tr>
                            <td>8:00 AM</td>
                            <td>Alankarana Seva</td>
                            <td>Decoration and dressing of the Lord in divine attire.</td>
                        </tr>
                        <tr>
                            <td>9:00 AM</td>
                            <td>Nitya Kalyanam / Special Seva</td>
                            <td>Daily divine wedding or special pooja as per bookings.</td>
                        </tr>
                        <tr>
                            <td>12:00 PM</td>
                            <td>Madhyahna Harathi</td>
                            <td>Midday prayer before the temple closes for the afternoon.</td>
                        </tr>
                        <tr>
                            <td>4:30 PM</td>
                            <td>Temple Reopens</td>
                            <td>Devotees allowed for darshan.</td>
                        </tr>
                        <tr>
                            <td>5:00 PM</td>
                            <td>Sarva Darshanam</td>
                            <td>General darshan for all devotees.</td>
                        </tr>
                        <tr>
                            <td>6:00 PM</td>
                            <td>Archana / Deepa Harathi</td>
                            <td>Evening prayer and light offering.</td>
                        </tr>
                        <tr>
                            <td>7:00 PM</td>
                            <td>Sahasranama Archana</td>
                            <td>Recitation of the thousand names of Lord Vishnu.</td>
                        </tr>
                        <tr>
                            <td>8:30 PM</td>
                            <td>Ekantha Seva</td>
                            <td>Night closing rituals and prayers.</td>
                        </tr>
                        <tr>
                            <td>9:00 PM</td>
                            <td>Temple Closes</td>
                            <td>End of daily sevas.</td>
                        </tr>
                    </tbody>
                </table>
            </section>


            {/* Book Tickets Section*/}
            <section className={styles.bookTicketSection}>
                <div className={styles.bookTicketContainer}>
                    <h2>Book Darshan Tickets</h2>
                    <p className={styles.subtitle}>
                        Plan your divine visit in advance for a peaceful and convenient
                        darshan experience. Book your slot and avoid long waiting times.
                    </p>

                    <button className={styles.openBtn} onClick={handleOpen}>
                        Book Tickets
                    </button>
                </div>

                {showForm && (
                    <div className={styles.modalOverlay}>
                        <div className={styles.modalContent}>
                            <button className={styles.closeBtn} onClick={handleClose}>
                                ✕
                            </button>

                            <h3>Darshan Booking Form</h3>
                            <form className={styles.bookingForm}>
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your full name"
                                    required
                                />

                                <label htmlFor="date">Darshan Date</label>
                                <input type="date" id="date" required />

                                <label htmlFor="time">Preferred Time Slot</label>
                                <select id="time" required>
                                    <option value="">Select a time slot</option>
                                    <option>5:30 AM - 6:30 AM</option>
                                    <option>7:00 AM - 8:00 AM</option>
                                    <option>9:00 AM - 10:00 AM</option>
                                    <option>5:00 PM - 6:00 PM</option>
                                    <option>7:00 PM - 8:00 PM</option>
                                </select>

                                <label htmlFor="people">Number of People</label>
                                <input
                                    type="number"
                                    id="people"
                                    min="1"
                                    max="10"
                                    placeholder="Enter number"
                                    required
                                />

                                <button type="submit">Confirm Booking</button>
                            </form>
                        </div>
                    </div>
                )}
            </section>


            {/* Prasadam Section */}
            <section className={styles.prasadamSection}>
                <h2 className={styles.heading}>Temple Prasad Counter</h2>
                <p className={styles.subheading}>
                    Receive the divine blessings of Lord Govindaraja Swamy in the form of sacred prasad.
                </p>

                <div className={styles.imageContainer}>

                    <img src={pulihoraImg} alt="Pulihora Prasad" />
                    <img src={curdRiceImg} alt="daddojanam Prasad" />
                    <img src={ladduImg} alt="Laddu Prasad" />
                    <img src={kesariImg} alt="Kesari Prasad" />
                </div>

                <div className={styles.info}>
                    <p><strong>Daily Prasad Distribution Timings:</strong> 9:00 AM – 8:00 PM</p>
                    <p><strong>Location:</strong> Temple Annadanam Hall / Prasad Counter</p>
                    <p><strong>Available Offerings:</strong> Laddu, Pulihora, Vada Prasad, Panchamrutham</p>
                    <p><strong>Online Booking:</strong> Available for special occasions</p>
                    <p className={styles.note}>
                        “Prasad is freshly prepared each day with devotion. Please collect within temple hours.”
                    </p>
                </div>
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