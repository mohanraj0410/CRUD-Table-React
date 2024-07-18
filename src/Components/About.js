// AboutPage.js
import React from 'react';
import styles from '../style/about.css'; // Import CSS module for styling

const AboutPage = () => {
    return (

        <div className={styles.aboutContainer}>
            <div className="about-container">
                <header className="header">
                    <h1 className="title">About Us</h1>
                    <p className="subtitle"><h1>About FitLife: Your Ultimate Gym Companion</h1></p>
                </header>
                <main className="main-content">
                    <section className="section">
                        <h2>Our Mission</h2>
                        <p>
                            At FitLife, our mission is to empower individuals on their journey to
                            a healthier, fitter lifestyle...
                        </p>
                    </section>
                    <section className="section">
                        <h2>Personalized Workouts</h2>
                        <p>
                            Say goodbye to generic workout plans that don't suit your needs...
                        </p>
                    </section>
                    <section className="section">
                        <h2>Comprehensive Tracking</h2>
                        <p>
                            Track your progress with ease using FitLife's intuitive tracking
                            features...
                        </p>
                    </section>
                </main>
                <footer className="footer">
                    <p>&copy; 2024 MyReactWebsite. All rights reserved.</p>
                </footer>
            </div>

        </div>
    );
};

export default AboutPage;
