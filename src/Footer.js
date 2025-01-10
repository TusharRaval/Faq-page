import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    {/* About Section */}
                    <div className="col-md-3 footer-col">
                        <h5>About Us</h5>
                        <p>Pixel6 Web Studio provides top-notch CRM solutions to streamline business processes efficiently.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-3 footer-col">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/features">Features</a></li>
                            <li><a href="/pricing">Pricing</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-3 footer-col">
                        <h5>Contact Us</h5>
                        <p>Email: support@pixel6crm.com</p>
                        <p>Phone: +91 98765 43210</p>
                        <p>Location: Baner, Pune 411045</p>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="col-md-3 footer-col">
                        <h5>Newsletter</h5>
                        <p>Subscribe to our newsletter for updates.</p>
                        <input type="email" className="form-control" placeholder="Enter email" />
                        <button className="btn btn-3d">Subscribe</button>
                    </div>

                    

                </div>
            </div>
        </footer>
    );
};

export default Footer;
