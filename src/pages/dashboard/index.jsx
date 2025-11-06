import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./dashboard.module.css";
import aboutNamalu from "../../assets/namalu.png";


export default function Dashboard() {

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const username = "Varshini";


    const [activeTab, setActiveTab] = useState("history");

    const [showForm, setShowForm] = useState(false);


    const menuItems = [
        { id: "about", label: "About" },
        { id: "history", label: "History" },
        { id: "darshan-tickets", label: "Darshan Tickets" },
        { id: "book-seva", label: "Book Your Seva" },
        { id: "donations", label: "Donations" },
        { id: "e-hundi", label: "e-Hundi" },
        { id: "updates", label: "Latest Updates" },
    ];

    const handleLogout = () => {
        navigate("/");
    };


    const donationOptions = [
        "Annadanam",
        "Govu Danam",
        "Donate a Brick",
        "Deepa Danam",
        "Festival Fund",
        "Vahana Seva",
        "Prasadam Seva",
    ];

    const [selected, setSelected] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", amount: "" });
    const openModal = (type) => {
        setSelected(type);
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
        setSelected(null);
        setForm({ name: "", email: "", amount: "" });
    };

    const handleChange = (e) =>
        setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Donation:", { type: selected, ...form });
        alert(`Thank you! Donation for "${selected}" received (simulated).`);
        closeModal();
    };

    const handleDonate = () => {
        alert("🙏 Thank you for your kind donation! 🙏");
    };

    const updates = [
        {
            title: "Vaikunta Ekadashi Celebrations",
            date: "Nov 15, 2025",
            detail:
                "Join us for the grand Vaikunta Ekadashi celebrations with special darshan and cultural programs.",
        },
        {
            title: "New Temple Annadanam Hall Inauguration",
            date: "Oct 30, 2025",
            detail:
                "A new Annadanam hall is now open to serve thousands of devotees daily.",
        },
        {
            title: "Online Seva Bookings Open",
            date: "Oct 25, 2025",
            detail:
                "Devotees can now book daily and festival sevas through the dashboard for convenience.",
        },
    ];

    return (
        <>
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
                    onClick={() => setMenuOpen(false)} 
                >
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Home</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/about"); }}>About</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/darshan"); }}>Darshan</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/events"); }}>Events</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/seva"); }}>Seva</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/donate"); }}>Donate</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/contact"); }}>Contact</a></li>
                    {/*<li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Log Out</a></li> */}
                    {/* 👇 Profile + Username instead of Login */}
                    <li className={styles.profileContainer}>
                        <span className={styles.username}>{username}</span>
                        <div className={styles.profileCircle}>
                            {username.charAt(0).toUpperCase()}
                        </div>

                    </li>

                </ul>
            </nav>


            <div className={styles.dashboardContainer}>
                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarContent}>
                        <h2 className={styles.sidebarTitle}>Devotee Dashboard</h2>

                        <ul className={styles.menuList}>
                            {menuItems.map((item) => (
                                <li
                                    key={item.id}
                                    className={`${styles.menuItem} ${activeTab === item.id ? styles.active : ""
                                        }`}
                                    onClick={() => setActiveTab(item.id)}
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Logout */}
                    <div className={styles.logoutSection}>
                        <button onClick={handleLogout} className={styles.logoutButton}>
                            Log Out
                        </button>
                    </div>
                </aside>

                {/* Right content  

                <main className={styles.mainContent}>
                    <h1 className={styles.pageTitle}>
                        {menuItems.find((item) => item.id === activeTab)?.label}
                    </h1>
                    <p className={styles.pageDescription}>
                        Content for <strong>{activeTab}</strong> section goes here.
                    </p>
                </main> */}


                {/* Right content  */}
                <main className={styles.mainContent}>
                    {/* about */}
                    {activeTab === "about" && (
                        <div className={styles.aboutSection}>
                            <img src={aboutNamalu} alt="About Dashboard" className={styles.aboutImage} />
                            <p className={styles.aboutText}>
                                Welcome to your <strong>Devotee Dashboard</strong>!
                                Here you can easily <strong>book temple sevas, check upcoming events,</strong>
                                and make <strong>donations</strong> directly through the portal.
                                Stay connected with the temple and receive the latest updates effortlessly.
                            </p>
                        </div>
                    )}

                    {/* history */}
                    {activeTab === "history" && (
                        <div className={styles.historySection}>
                            <h1 className={styles.pageTitle}>Your History</h1>

                            <div className={styles.historyContent}>
                                <div className={styles.historyCard}>
                                    <h3 className={styles.cardTitle}>Venkateshwara Abhishekam</h3>
                                    <p className={styles.cardDetail}>Booked on: 12th September 2025</p>
                                    <p className={styles.cardDetail}>Status: Completed</p>
                                </div>

                                <div className={styles.historyCard}>
                                    <h3 className={styles.cardTitle}>Donation - Annadanam</h3>
                                    <p className={styles.cardDetail}>Donated on: 25th August 2025</p>
                                    <p className={styles.cardDetail}>Amount: ₹1,001 | Blessings Sent 💫</p>
                                </div>

                                <div className={styles.historyCard}>
                                    <h3 className={styles.cardTitle}>Festival Seva - Ganesh Chaturthi</h3>
                                    <p className={styles.cardDetail}>Booked on: 1st September 2025</p>
                                    <p className={styles.cardDetail}>Status: Upcoming</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* darshan tickets */}
                    {activeTab === "darshan-tickets" && (
                        <div className={styles.bookTicketSection}>
                            <div className={styles.bookTicketContainer}>
                                <h2>Book Darshan Tickets</h2>
                                <p className={styles.subtitle}>
                                    Plan your divine visit in advance for a peaceful and convenient
                                    darshan experience. Book your slot and avoid long waiting times.
                                </p>

                                <button className={styles.openBtn} onClick={() => setShowForm(true)}>
                                    Book Tickets
                                </button>
                            </div>

                            {showForm && (
                                <div className={styles.modalOverlay}>
                                    <div className={styles.modalContent}>
                                        <button className={styles.closeBtn} onClick={() => setShowForm(false)}>
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
                        </div>
                    )}


                    {/* book sevas */}
                    {activeTab === "book-seva" && (
                        <div className={styles.bookSevaContainer}>
                            <h1 className={styles.title}>Book Your Seva</h1>
                            <p className={styles.subtitle}>
                                Reserve your seva or donation slot with ease. Choose your preferred seva, enter your details, and confirm your booking.
                            </p>

                            <form className={styles.sevaForm}>
                                <div className={styles.formGroup}>
                                    <label>Name</label>
                                    <input type="text" placeholder="Enter your full name" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Email</label>
                                    <input type="email" placeholder="Enter your email address" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Seva Type</label>
                                    <select required>
                                        <option value="">Select a seva</option>
                                        <option value="archana">Archana</option>
                                        <option value="abhisheka">Abhisheka</option>
                                        <option value="special_pooja">Special Pooja</option>
                                        <option value="festival_seva">Festival Seva</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Date</label>
                                    <input type="date" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Donation Amount (optional)</label>
                                    <input type="number" placeholder="₹ Enter amount" />
                                </div>

                                <button type="submit" className={styles.submitBtn}>
                                    Book Now
                                </button>
                            </form>
                        </div>
                    )}


                    {/* donations */}
                    {activeTab === "donations" && (
                        <div className={styles.donationsContainer}>
                            <h1 className={styles.title}>Offer Your Contribution to the Divine</h1>
                            <p className={styles.subtitleSmall}>
                                Select a donation type and click Donate. Enter minimal details and confirm.
                            </p>

                            <div className={styles.donationGrid}>
                                {donationOptions.map((title) => (
                                    <div key={title} className={styles.cardSimple}>
                                        <div className={styles.cardHeader}>{title}</div>
                                        <button
                                            className={styles.donateBtn}
                                            onClick={() => openModal(title)}
                                            aria-label={`Donate for ${title}`}
                                        >
                                            Donate Now
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {showModal && (
                                <div className={styles.modalOverlay}>
                                    <div className={styles.modalContent}>
                                        <button className={styles.closeBtn} onClick={closeModal}>
                                            ✕
                                        </button>

                                        <h3 className={styles.modalTitle}>Donate — {selected}</h3>

                                        <form className={styles.simpleForm} onSubmit={handleSubmit}>
                                            <label>Name</label>
                                            <input
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Full name"
                                                required
                                            />

                                            <label>Email</label>
                                            <input
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="you@example.com"
                                                required
                                            />

                                            <label>Amount (₹)</label>
                                            <input
                                                name="amount"
                                                type="number"
                                                min="1"
                                                value={form.amount}
                                                onChange={handleChange}
                                                placeholder="Enter amount"
                                                required
                                            />

                                            <button type="submit" className={styles.confirmBtn}>
                                                Confirm & Donate
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* e-Hundi */}
                    {activeTab === "e-hundi" && (
                        <section className={styles.ehundiSection}>
                            <h2 className={styles.heading}>e-Hundi – Offer Your Donation</h2>
                            <p className={styles.description}>
                                Contribute to temple services and spiritual activities through our secure online Hundi.
                            </p>

                            <div className={styles.ehundiContainer}>
                                <div className={styles.inputBox}>
                                    <input type="number" placeholder="Enter donation amount (₹)" />
                                    <button className={styles.donateBtn} onClick={handleDonate}>
                                        Donate Now
                                    </button>
                                </div>
                            </div>

                            <p className={styles.footerText}>
                                Your generous contributions support temple maintenance, pujas, and community seva.
                            </p>
                        </section>
                    )}

                    {/* Latest Updates */}
                    {activeTab === "updates" && (
                        <section className={styles.updatesSection}>
                            <h2 className={styles.heading}>Latest Updates</h2>
                            <div className={styles.updatesContainer}>
                                {updates.map((update, index) => (
                                    <div key={index} className={styles.updateCard}>
                                        <h3 className={styles.updateTitle}>{update.title}</h3>
                                        <p className={styles.updateDate}>{update.date}</p>
                                        <p className={styles.updateDetail}>{update.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                </main>

            </div>


        </>
    )
};