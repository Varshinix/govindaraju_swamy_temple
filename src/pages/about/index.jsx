import { useState } from "react";
import styles from "./about.module.css";
import { useNavigate } from "react-router-dom";
import aboutTempleImg from "../../assets/about_main.jpg";
import aboutHistoryImg from "../../assets/about_history.jpg";
import aboutBlessingImg from "../../assets/blessings_about.png";

export default function About() {
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


            {/* About Main */}
            <section className={styles.aboutMain}>
                <h2>About Sri Govindaraja Swamy Temple</h2>

                <div className={styles.aboutImageContainer}>
                    <img src={aboutTempleImg} alt="Sri Govindaraja Swamy Temple" />
                </div>

                <p>
                    The Govindaraja Swamy Temple history Hyderabad is deeply rooted in
                    devotion, spirituality, and tradition. Located at Jagadgiri Gutta,
                    Hyderabad, Telangana, the temple is dedicated to Lord Govindaraja
                    Swamy, an incarnation of Lord Vishnu. This sacred shrine stands as a
                    spiritual hub for thousands of devotees who seek blessings, peace, and
                    divine grace.
                    <br />
                    <br />
                    The history of Govindaraja Swamy Temple in Hyderabad highlights its
                    role as a Vaishnava temple that upholds ancient rituals and practices
                    of Sanatana Dharma. Over the years, the temple has become a center of
                    faith, offering daily poojas, monthly sevas, annadanam (free food
                    service), and vibrant festival celebrations.
                </p>
            </section>


            {/* History Section */}
            <section className={styles.historySection}>
                <div className={styles.historyImageContainer}>
                    <img src={aboutHistoryImg} alt="Temple Heritage" className={styles.historyImage} />
                </div>
                <div className={styles.historyContent}>
                    <h2 className={styles.historyHeading}>Temple History & Heritage</h2>
                    <p>
                        The <strong>Sri Govindaraja Swamy Temple, Hyderabad</strong>, stands as a sacred abode of Lord Vishnu in His divine form as Sri Govindaraja Swamy, the elder brother of Lord Venkateshwara. Built to uphold the principles of Sanatana Dharma, the temple preserves devotion, discipline, and timeless Vaishnavite traditions.
                    </p>
                    <p>
                        Inspired by the ancient Govindaraja Swamy Temple of Tirupati, this shrine reflects the same spiritual heritage, symbolizing the bond between Govindaraja and Venkateshwara. Devotees believe that sincere prayers to the Lord bring prosperity, good health, and spiritual upliftment.
                    </p>
                    <p>
                        Situated at Jagadgiri Gutta, Hyderabad, the temple has evolved into a center of faith and community service. It follows the Vaikhanasa Agama tradition, performing daily poojas, Annadanam, and festivals that unite devotees through culture, compassion, and divine grace.
                    </p>
                </div>
            </section>


            {/* Deity Section */}
            <section className={styles.deitySection}>
                <h2 className={styles.deityHeading}>Deity & Idol Details</h2>
                <p>
                    The presiding deity of the temple is Sri Govindaraja Swamy, an incarnation of Lord Vishnu, who symbolizes prosperity, dharma, and divine grace. The Lord is depicted in a majestic standing posture, holding the Shankha (conch) and Chakra (discus) — representing creation and destruction, the eternal balance of the universe. His serene expression inspires peace and faith among devotees.
                </p>
                <p>
                    Alongside the main sanctum, the temple also houses the idols of Goddess Lakshmi (Sri Devi) and Goddess Bhudevi, signifying wealth and fertility. Their divine presence beside Lord Govindaraja Swamy completes the Vaishnavite triad — representing compassion, abundance, and righteousness in perfect harmony.
                </p>
                <p>
                    Daily sevas, archanas, and poojas are performed with great devotion, following Vaikhanasa Agama traditions. During festivals and special occasions, Utsava Murthis (processional deities) of Lord Govindaraja Swamy and His consorts are taken on grand processions, allowing devotees to receive divine darshan and blessings closely.
                </p>
            </section>


            {/* Timings Section */}
            <section className={styles.timingsSection}>
                <h2 className={styles.timingsMainHeading}>Temple Timings</h2>
                <div className={styles.timingsContent}>
                    <h3 className={styles.timingsSubHeading}>Darshan & Pooja Hours:</h3>
                    <p className={styles.timingsText}>
                        <strong>Morning:</strong> 6:00 AM – 11:30 AM <br />
                        <strong>Evening:</strong> 5:00 PM – 9:00 PM
                    </p>
                    <p className={styles.timingsNote}>
                        Special pooja timings are announced during festivals and Ekadasi
                        celebrations.
                    </p>
                </div>
            </section>


            {/* Blessings Section */}
            <section className={styles.blessingSection}>
                <div className={styles.blessingQuote}>
                    “Sarve Jana Sukhino Bhavantu – May all beings live in happiness and peace.”
                </div>

                <div className={styles.blessingImageWrap}>
                    <img
                        src={aboutBlessingImg}
                        alt="Divine Blessings"
                        className={styles.blessingImage}
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