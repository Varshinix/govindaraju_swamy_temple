import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import styles from "./login.module.css";
import godImage from "../../assets/login_img.jpg";

export default function Login() {
    

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard"); 
    };

    return (
        <>

            {/*<section className={styles.loginSection}>
                <div className={styles.loginCard}>
                    
                    left img
                    <div className={styles.imageContainer}>
                        <img src={godImage} alt="Temple Deity" className={styles.image} />
                    </div>

                    Right 
                    <div className={styles.formContainer}>
                        <h2 className={styles.title}>Devotee Login</h2>
                        <form className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" placeholder="Enter your username" />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Enter your password" />
                            </div>

                            <button type="submit" className={styles.loginButton}>Login</button>
                        </form>

                        <p className={styles.registerText}>
                            Don’t have an account? <a href="#">Register here</a>
                        </p>
                    </div>
                </div>
            </section> */}

            <section className={styles.loginSection}>
                <div className={styles.loginCard}>
                    {/* Left side - Image */}
                    <div className={styles.imageContainer}>
                        <img src={godImage} alt="Temple Deity" className={styles.image} />
                    </div>

                    {/* Right side - Login Form */}
                    <div className={styles.formContainer}>
                        <h2 className={styles.title}>Devotee Login</h2>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" placeholder="Enter your username" />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Enter your password" />
                            </div>

                            <button type="submit" className={styles.loginButton}>Login</button>
                        </form>

                        <p className={styles.registerText}>
                            Don’t have an account? <a href="#">Register here</a>
                        </p>
                    </div>
                </div>
            </section>

        </>
    )

}



