
import { useEffect, useState } from "react";
import styles from "./home.module.css";
import aboutImg from "../../assets/about_tempel.jpg";
import event1 from "../../assets/event1.jpg";
import event2 from "../../assets/event2.jpg";
import event3 from "../../assets/event3.jpg";
import event4 from "../../assets/event4.jpg";
import event5 from "../../assets/event5.jpg";
import event6 from "../../assets/event6.jpg";
import annadanamImg from "../../assets/annadanam_temple.jpg";
import squareImg from "../../assets/construction_temple.jpg";
import festivalImg from "../../assets/festivalss.jpg";


export default function Home() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 4;

    const eventData = [
        {
            img: event1,
            title: "Brahmotsavam",
            desc: "The grand annual festival lasting nine days, featuring majestic processions of Lord Venkateswara on various vahanas (vehicles). It’s the most celebrated event at Tirumala."
        },
        {
            img: event2,
            title: "Pavitrotsavam",
            desc: "A three-day purification ritual to cleanse any lapses in daily worship. Includes homas, abhishekam, and special pujas."
        },
        {
            img: event3,
            title: "Pushpayagam",
            desc: "A floral offering ceremony where the deity is worshipped with thousands of fresh flowers, symbolizing devotion and beauty."
        },
        {
            img: event4,
            title: "Teppotsavam",
            desc: "Held in the temple tank, where the deity is taken on a decorated float for five days, accompanied by music and lights."
        },
        {
            img: event5,
            title: "Vaikunta Ekadasi",
            desc: "Held in December–January, devotees enter the sacred “Vaikunta Dwaram” for moksha blessings. Considered one of the holiest days for Vishnu worship."
        },
        {
            img: event6,
            title: "Rathasapthami",
            desc: "Celebrated in February, symbolizing the Sun God's chariot ride. Lord Venkateswara is taken out on seven different vahanas from sunrise to sunset."
        },
    ];


    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === eventData.length - visibleCards ? 0 : prev + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? eventData.length - visibleCards : prev - 1
        );
    };

    return (
        <>
            {/* Navbar */}
            <nav className={styles.navbar}>
                <div className={styles.logo}>🛕 Govindaraja Swamy Temple</div>
                <ul className={styles.navLinks}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Darshan</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Seva</a></li>
                    <li><a href="#">Donate</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>


            {/* Header / Hero Section */}
            <header className={styles.hero}>
                <div className={styles.overlay}>
                    <div className={styles.heroContent}>
                        <h1>Welcome to Sri Govindaraja Swamy Temple</h1>
                        <p>Experience peace, devotion and blessings in the presence of Lord Govindaraja. <br></br>
                            Let your heart find serenity as you embark on a spiritual journey filled with grace and tradition
                        </p>
                        <button className={styles.ctaButton}>Book Darshan</button>
                    </div>
                </div>
            </header>


            {/* About Section */}
            <section className={styles.aboutSection}>
                <div className={styles.aboutContent}>
                    <h2>About Sri Govindaraja Swamy Devasthanam</h2>
                    <p>
                        Sri Govindaraja Swamy Devasthanam at Jagadgiri Gutta, Hyderabad is a revered temple
                        dedicated to Lord Govindaraja Swamy. The temple preserves local legends, traditional rituals,
                        and seasonal festivals that draw devotees from across Telangana. Our puja schedule, Annadanam
                        programs, and community events are organized to welcome families and pilgrims with devotion and hospitality.
                    </p>
                    <p>
                        The temple’s architecture reflects South Indian temple traditions blended with local Telangana craftsmanship —
                        carved pillars, colorful mandapams, and a peaceful sanctum for uninterrupted darshan. Learn more about the
                        temple history, deity, and traditions on the About page.
                    </p>
                    <button className={styles.readMoreBtn}>Read More</button>
                </div>

                <div className={styles.aboutImage}>
                    <img src={aboutImg} alt="About Sri Govindaraja Swamy Devasthanam" />
                </div>
            </section>


            {/* Darshan Section */}
            <section className={styles.darshanSection}>
                <h2>Darshan Seva Schedule</h2>
                <div className={styles.darshanCards}>
                    <div className={styles.card}>
                        <h3>Suprabhatam</h3>
                        <p>A devotional hymn recited in the early morning to awaken the Lord.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Archana & Abhishekam</h3>
                        <p>Chanting of divine names and sacred bath to the deity.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Alankarana Seva</h3>
                        <p>Decoration and dressing of Lord Govindaraja Swamy in divine attire.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Nitya Kalyanam / Special Seva</h3>
                        <p>Daily divine wedding or special pooja as per bookings.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Sarva Darshanam</h3>
                        <p>The open viewing of the deity, accessible to all devotees.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Sahasranama Archana / Vishnu Sahasranamam</h3>
                        <p>Recitation of the thousand names of Lord Vishnu.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Archana / Deepa Harathi</h3>
                        <p>A ritual of offering light and prayers to the deity during evening worship.</p>
                    </div>
                </div>

                <button className={styles.bookBtn}>Book Ticket</button>
            </section>


            {/* Events Section */}
            <section className={styles.eventsSection}>
                <div className={styles.eventsTop}>
                    <h2>Temple Events</h2>
                    <div className={styles.eventArrows}>
                        <button className={styles.arrow} onClick={() => handlePrev()}>&#10094;</button>
                        <button className={styles.arrow} onClick={() => handleNext()}>&#10095;</button>
                    </div>
                </div>

                <div className={styles.eventSlider}>
                    <div
                        className={styles.eventTrack}
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                    >
                        {eventData.map((event, index) => (
                            <div className={styles.eventCard} key={index}>
                                <img src={event.img} alt={event.title} />
                                <h3>{event.title}</h3>
                                <p>{event.desc}</p>
                            </div>
                        ))}
                    </div>
                    <button className={styles.knowBtn}>Know More</button>
                </div>
            </section>


            {/* Seva Section */}
            <section className={styles.sevaSection}>
                <div className={styles.sevaContent}>
                    <h2>Seva List</h2>
                    <div className={styles.sevaList}>
                        <ul>
                            <li>Archana Seva</li>
                            <li>Ekantha Seva</li>
                            <li>Vishesha Pooja</li>
                            <li>Sahasra Kalasabhishekam</li>
                            <li>Abhishekam Seva</li>
                            <li>Dhanurmasa Tiruppavai Seva</li>
                            <li>Pournami Garuda Seva</li>
                            <li>Sahasra Deepalankarana Seva</li>
                            <li>Vasantotsavam</li>
                        </ul>
                    </div>
                    <button className={styles.knowBtn}>Know More</button>
                </div>
            </section>


            {/* Donations Section 
            <section className={styles.donationSection}>
                <div className={styles.donationContent}>
                    <h2>Donations</h2>
                    <p>
                        Extend your support to Sri Govindaraja Swamy Devasthanam and be part of divine service.
                        Donations help in temple maintenance and Annadanam.
                    </p>
                    <button className={styles.donateBtn}>Donate</button>
                </div>
            </section> */}


            {/* Donations Section  */}
            <section className={styles.donationSection}>
                <h2 className={styles.donationTitle}>Donations</h2>

                <div className={styles.donationCards}>
                    <div className={styles.donationCard}>
                        <img src={annadanamImg} alt="Annadanam" />
                        <h3>Annadanam</h3>
                        <p>
                            Your open-hearted contribution may make a difference in lives of
                            millions of needy people.
                        </p>
                    </div>

                    <div className={styles.donationCard}>
                        <img src={squareImg} alt="Mark Your Square" />
                        <h3>Mark Your Square</h3>
                        <p>
                            Donate per square feet space for temple construction. Brick donated
                            by you will be a part of the temple forever.
                        </p>
                    </div>

                    <div className={styles.donationCard}>
                        <img src={festivalImg} alt="Festival Fund" />
                        <h3>Festival Fund</h3>
                        <p>
                            Support the celebration of major festivals with devotion. Your
                            donation helps provide decorations, prasadam, and more.
                        </p>
                    </div>
                </div>

                <button className={styles.donateButton}>Donate Now</button>
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
                    <p>© 2025 Sri Govindaraja Swamy | All Rights Reserved</p>
                </div>
            </footer>



        </>
    )
}