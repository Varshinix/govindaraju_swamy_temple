import { useState } from "react";
import styles from "./seva.module.css";
import { useNavigate } from "react-router-dom";
import dailySevaImg from "../../assets/seva_one.jpg";
import periodicSevaImg from "../../assets/seva_three.jpg";

export default function Seva() {
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


            {/* Daily Seva */}
            <section className={styles.sevaSection}>
                <h2 className={styles.heading}>Daily Sevas</h2>
                <div className={styles.sevaContent}>
                    <div className={styles.imageContainer}>
                        <img src={dailySevaImg} alt="Daily Sevas" className={styles.image} />
                    </div>
                    <div className={styles.text}>
                        <p className={styles.intro}>
                            These are performed every day as part of temple rituals:
                        </p>
                        <ul className={styles.list}>
                            <li>
                                <span className={styles.highlight}> Suprabhatam Seva –</span> Early morning wake-up prayer to the deity.
                            </li>
                            <li>
                                <span className={styles.highlight}> Thomala Seva –</span> Decoration of the deity with garlands.
                            </li>
                            <li>
                                <span className={styles.highlight}> Archana Seva –</span> Chanting of 1,000 names of the Lord (Sahasranamarchana).
                            </li>
                            <li>
                                <span className={styles.highlight}> Ekantha Seva –</span> Final ritual of the day, putting the deity to rest (not open to public).
                            </li>
                        </ul>
                    </div>
                </div>
            </section>



            {/* Weekly Seva */}
            <section className={styles.weeklySevaSection}>
                <h2 className={styles.heading}>Weekly Sevas</h2>
                <div className={styles.contentWrapper}>
                    {/*<div className={styles.imageContainer}>
                        <img src={weeklySevaImg} alt="Weekly Sevas" className={styles.image} />
                    </div> */}

                    <div className={styles.text}>
                        <p className={styles.intro}>
                            Special sevas performed on specific days of the week:
                        </p>
                        <ul className={styles.list}>
                            <li>
                                <span className={styles.highlight}> Vishesha Pooja –</span> Monday special pooja with additional offerings.
                            </li>
                            <li>
                                <span className={styles.highlight}> Ashtadala Padmaradhana –</span> Tuesday ritual with eight lotus flowers.
                            </li>
                            <li>
                                <span className={styles.highlight}> Sahasra Kalasabhishekam –</span> Wednesday abhishekam with 1,000 sacred pots.
                            </li>
                            <li>
                                <span className={styles.highlight}> Tiruppavada Seva –</span> Thursday offering of a large quantity of food (Pulihora) to the deity.
                            </li>
                            <li>
                                <span className={styles.highlight}> Abhishekam Seva –</span> Friday ritual bathing of the deity with sacred substances.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* Periodic Seva */}
            <section className={styles.periodicSevaSection}>
                <h2 className={styles.heading}>Periodic & Festival Sevas</h2>
                <div className={styles.periodicSevaContent}>
                    <div className={styles.text}>
                        <p>
                            These are performed during specific months or festivals:
                        </p>
                        <ul className={styles.list}>
                            <li>
                                <span className={styles.highlight}>🌼 Dhanurmasa Tiruppavai Seva –</span>
                                Recitation of Tiruppavai hymns during the auspicious Dhanurmasa.
                            </li>
                            <li>
                                <span className={styles.highlight}>🌼 Pournami Garuda Seva –</span>
                                Procession of Lord Malayappa Swamy on Garuda Vahana during full moon nights.
                            </li>
                            <li>
                                <span className={styles.highlight}>🌼 Sahasra Deepalankarana Seva –</span>
                                Evening ritual with 1,000 lamps lit in the Unjal Mandapam.
                            </li>
                            <li>
                                <span className={styles.highlight}>🌼 Vasantotsavam –</span>
                                Spring festival with colorful rituals and processions.
                            </li>
                            <li>
                                <span className={styles.highlight}>🌼 Dolotsavam –</span>
                                Swing festival where the deity is placed on a decorated swing.
                            </li>
                        </ul>
                    </div>

                    <div className={styles.imageContainer}>
                        <img
                            src={periodicSevaImg}
                            alt="Periodic and Festival Sevas"
                            className={styles.image}
                        />
                    </div>
                </div>
            </section>



            {/* Arjitha Seva */}
            <section className={styles.arjithaSevaSection}>
                <h2 className={styles.heading}>Arjitha Sevas (Ticketed Rituals)</h2>
                <div className={styles.text}>
                    <p>
                        These allow devotees to participate directly in the sacred temple rituals:
                    </p>
                    <ul className={styles.list}>
                        <li>
                            <span className={styles.highlight}>💫 Kalyanotsavam –</span> Symbolic wedding ceremony of the Lord and His consorts.
                        </li>
                        <li>
                            <span className={styles.highlight}>💫 Arjitha Brahmotsavam –</span> Mini version of the grand Brahmotsavam festival.
                        </li>
                        <li>
                            <span className={styles.highlight}>💫 Unjal Seva –</span> Swing ritual accompanied by devotional songs and offerings.
                        </li>
                    </ul>
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