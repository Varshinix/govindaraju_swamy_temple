import { useState } from "react";
import styles from "./events.module.css";
import { useNavigate } from "react-router-dom";
import eventHero from "../../assets/events_hero.png";
import eventSideImg from "../../assets/events_upcoming.jpg";
import festivalGalleryImg from "../../assets/gallery.jpg";

export default function Events() {
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

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


            {/* Header Section */}
            <section
                className={styles.eventsHero}
                style={{ backgroundImage: `url(${eventHero})` }}
            >
                <div className={styles.heroOverlay}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Temple Events & Celebrations</h1>
                        <p className={styles.heroText}>
                            Join us in celebrating the divine grace of Lord Venkateshwara through
                            sacred rituals and festivals.
                        </p>
                    </div>
                </div>
            </section>


            {/* Upcoming Events Section */}
            <section className={styles.upcomingSection}>
                <div className={styles.leftContent}>
                    <h2 className={styles.sectionHeading}>Upcoming Events</h2>
                    <p className={styles.sectionIntro}>
                        Join us for our upcoming temple festivals and sevas that bring the
                        divine energy of Lord Venkateshwara to life.
                    </p>

                    <div className={styles.eventsList}>
                        <div className={styles.eventCard}>
                            <h3>Vaikunta Ekadasi</h3>
                            <p>Dec 21 | Early morning darshan, special poojas</p>

                            <h3>Brahmotsavam</h3>
                            <p>March 15–20 | Annual grand celebration</p>

                            <h3>Sankranti Pooja</h3>
                            <p>Jan 14 | Festival of harvest and gratitude</p>

                            <h3>Kalyanotsavam</h3>
                            <p>Every Friday | Divine wedding ritual</p>
                        </div>

                    </div>
                </div>

                <div className={styles.rightImage}>
                    <img src={eventSideImg} alt="Temple Event" />
                </div>
            </section>


            {/* Monthly rituals */}
            <section className={styles.ritualsSection} >
                <div className={styles.overlay}>
                    <h2 className={styles.title}>Divine Rituals & Celebrations</h2>

                    <div className={styles.ritualsContainer}>
                        <div className={styles.column}>
                            <h3> Recurring Rituals & Weekly Poojas</h3>
                            <p>
                                Experience the daily rhythm of devotion and spiritual energy that
                                fills the temple every morning and evening.
                            </p>
                            <ul>
                                <li>Suprabhata Seva – Early morning awakening of the deity</li>
                                <li>Archana & Abhishekam – Daily offerings and sacred bath</li>
                                <li>Vishnu Sahasranama Parayanam – Chanting sessions</li>
                                <li>Saturday/Sunday Special Darshan – Weekly rituals</li>
                            </ul>
                            <p className={styles.example}>
                                “Join us every Saturday for the sacred Vishnu Sahasranama chanting,
                                followed by Archana and Prasadam distribution.”
                            </p>
                        </div>

                        <div className={styles.column}>
                            <h3> Monthly & Auspicious Day Celebrations</h3>
                            <p>
                                Celebrate auspicious days and sacred festivals that honor the
                                divine presence of Lord Venkateshwara.
                            </p>
                            <ul>
                                <li>Ekadashi – Fasting and special poojas</li>
                                <li>Pournami & Amavasya – Full Moon and New Moon rituals</li>
                                <li>Vaikunta Ekadashi – Major event with special darshan</li>
                                <li>Sankranti, Ugadi, Rama Navami, Krishna Janmashtami</li>
                            </ul>
                            <p className={styles.example}>
                                “On Vaikunta Ekadashi, devotees walk through the symbolic Vaikunta
                                Dwaram and receive Lord Venkateshwara’s grace.”
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Annual Festivals */}
            <section className={styles.festivalSection}>
                <h2 className={styles.heading}>Annual Temple Festivals</h2>
                <p className={styles.subtext}>
                    “Celebrate the grandeur and divine traditions of Lord Venkateshwara Swami.”
                </p>

                <div className={styles.content}>
                    <p>
                        <span className={styles.title}> Brahmotsavam – </span>
                        The grand nine-day festival of Lord Venkateshwara, marked by vibrant vahana
                        processions, music, and devotion. Each day, the deity is carried on beautifully
                        adorned vahanas such as Garuda, Hanuman, and Simha, blessing thousands of devotees.
                    </p>

                    <p>
                        <span className={styles.title}> Kalyanotsavam – </span>
                        The celestial wedding ceremony of Lord Venkateshwara and Goddess Padmavathi,
                        performed every Friday. Symbolizes divine union, prosperity, and blessings for
                        family harmony.
                    </p>

                    <p>
                        <span className={styles.title}> Pavitrotsavam – </span>
                        A sacred three-day purification ritual conducted to cleanse any errors or omissions
                        in the daily temple worship. Includes homas, abhishekam, and chanting of Vedic hymns.
                    </p>

                    <p>
                        <span className={styles.title}> Pushpayagam – </span>
                        A floral festival where the Lord is worshipped with thousands of fragrant flowers —
                        a symbol of beauty, purity, and devotion.
                    </p>

                    <p>
                        <span className={styles.title}> Teppotsavam (Float Festival) – </span>
                        A stunning five-day celebration held in the temple tank, where the deity is taken
                        around on a beautifully decorated float, accompanied by music, lamps, and chants.
                    </p>

                    <p>
                        <span className={styles.title}> Vaikunta Ekadasi – </span>
                        Celebrated in December–January, devotees pass through the sacred Vaikunta Dwaram to
                        seek moksha. One of the most spiritually significant events in Vishnu temples.
                    </p>

                    <p>
                        <span className={styles.title}> Rathasapthami – </span>
                        Held in February, symbolizing the Sun God's chariot ride. Lord Venkateshwara is taken
                        out on seven different vahanas from sunrise to sunset, representing light, energy, and renewal.
                    </p>
                </div>
            </section>


            <section className={styles.gallerySection}>
                <h2 className={styles.heading}>Festival Gallery</h2>
                <div className={styles.imageContainer}>
                    <img
                        src={festivalGalleryImg}
                        alt="Festival Gallery"
                        className={styles.image}
                    />
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