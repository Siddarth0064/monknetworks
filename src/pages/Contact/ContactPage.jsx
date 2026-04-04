import React, { useState } from 'react';
import GlobalOffices from '../../components/GlobalOffices';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import useMobile from '../../hooks/useMobile';

const ContactPage = () => {
    const isMobile = useMobile();
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        contactNumber: '',
        email: '',
        address: '',
        enquiry: ''
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        // URL provided by the user
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzcA5xqbg_IFDoi0324GUa8w8okqnAU_mXwAAE-6rqOBmMpOg6NcbNTRQ6uGJ05U0Xjqw/exec';

        try {
            const params = new URLSearchParams();
            // Using exact matching for your script parameters
            // params.append('Name ', formData.name); // Note the space after Name
            // params.append('Company Name', formData.companyName);
            // params.append('Contact number', formData.contactNumber); 
            // params.append('Mail Id', formData.email);
            // params.append('Address', formData.address);
            // params.append('Enquiry', formData.enquiry);
            params.append('name', formData.name);
            params.append('companyName', formData.companyName);
            params.append('contactNumber', formData.contactNumber);
            params.append('mailId', formData.email);
            params.append('address', formData.address);
            params.append('enquiry', formData.enquiry);


            // await fetch(scriptURL, {
            //     method: 'POST',
            //     mode: 'no-cors', // Critical: Bypasses CORS preflight
            //     cache: 'no-cache',
            //     headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded'
            //     },
            //     body: params.toString()
            // });
            await fetch(scriptURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: params.toString()
            });
            // Since we use no-cors, we can't read the response body or status, 
            // but we assume success if no error was thrown.
            setStatus({ loading: false, success: true, error: null });

            // Reset form
            setFormData({
                name: '',
                companyName: '',
                contactNumber: '',
                email: '',
                address: '',
                enquiry: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);

        } catch (error) {
            console.error('Error!', error.message);
            setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again later.' });
        }
    };
    return (
        <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: 'transparent' }}>

            {/* Header - "Signal Lock" Cinematic Hero */}
            <section style={{ padding: isMobile ? "100px 5% 40px" : "140px 5% 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>

                {/* Decorative radial glow */}
                <div style={{
                    position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)",
                    width: isMobile ? "300px" : "600px", height: isMobile ? "200px" : "400px",
                    background: "radial-gradient(ellipse, rgba(0,242,234,0.07) 0%, transparent 70%)",
                    pointerEvents: "none", zIndex: 0
                }} />

                {/* Scanning horizontal line */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: [0, 0.6, 0] }}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                    style={{
                        position: "absolute", top: "50%", left: 0, right: 0,
                        height: "1px",
                        background: "linear-gradient(90deg, transparent, var(--primary-energy), transparent)",
                        zIndex: 1, pointerEvents: "none"
                    }}
                />

                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "28px", position: "relative", zIndex: 2 }}
                >
                    <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{
                            width: "8px", height: "8px", borderRadius: "50%",
                            background: "var(--primary-energy)",
                            boxShadow: "0 0 8px var(--primary-energy)",
                            display: "block", flexShrink: 0
                        }}
                    />
                    <span style={{
                        fontSize: "0.72rem", fontWeight: "700", letterSpacing: "3px",
                        textTransform: "uppercase", color: "var(--primary-energy)",
                        fontFamily: "Orbitron, sans-serif"
                    }}>CONNECTION ESTABLISHED</span>
                </motion.div>

                {/* Main Title — staggered word reveal */}
                <div style={{ position: "relative", zIndex: 2, overflow: "hidden", marginBottom: "8px" }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                        style={{
                            fontSize: "clamp(2.8rem, 6vw, 5rem)",
                            fontWeight: "900",
                            fontFamily: "Orbitron, sans-serif",
                            color: "white",
                            margin: 0,
                            lineHeight: 1.1,
                            letterSpacing: "-1px"
                        }}
                    >
                        Get in{" "}
                        <motion.span
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
                            style={{
                                color: "transparent",
                                WebkitTextStroke: "2px var(--primary-energy)",
                                display: "inline-block"
                            }}
                        >Touch</motion.span>
                    </motion.h1>
                </div>

                {/* Subtle divider line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                    style={{
                        width: "80px", height: "2px",
                        background: "linear-gradient(90deg, var(--primary-energy), #F05A28)",
                        margin: "24px auto",
                        borderRadius: "2px",
                        position: "relative", zIndex: 2
                    }}
                />

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    style={{
                        fontSize: "1.1rem", color: "rgba(255,255,255,0.55)",
                        maxWidth: "560px", margin: "0 auto",
                        lineHeight: "1.8", position: "relative", zIndex: 2
                    }}
                >
                    Have a question or looking to start a project? We're here to help you{" "}
                    <span style={{ color: "rgba(255,255,255,0.85)" }}>navigate your digital journey.</span>
                </motion.p>

            </section>

            {/* Contact Grid */}
            <section style={{ padding: "60px 5% 100px" }}>
                <div style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: isMobile ? "40px" : "60px"
                }}>
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            flex: isMobile ? "1" : "1.5", // Added Flex constraint to prevent extreme stretching
                            background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))", // Richer Glassmorphism
                            padding: isMobile ? "30px 20px" : "50px",
                            borderRadius: "24px",
                            border: "1px solid rgba(255,255,255,0.08)",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.3)", // Depth shadow
                            backdropFilter: "blur(10px)",
                            width: "100%"
                        }}
                    >
                        <h3 style={{ color: "white", fontSize: "1.8rem", marginBottom: "30px" }}>Send us a Message</h3>

                        <AnimatePresence>
                            {status.success && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    style={{
                                        padding: "15px",
                                        borderRadius: "12px",
                                        background: "rgba(40, 167, 69, 0.15)",
                                        border: "1px solid rgba(40, 167, 69, 0.3)",
                                        color: "#28a745",
                                        marginBottom: "20px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        fontSize: "0.95rem"
                                    }}
                                >
                                    <FaCheckCircle /> Thank you! Your inquiry has been sent successfully.
                                </motion.div>
                            )}

                            {status.error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    style={{
                                        padding: "15px",
                                        borderRadius: "12px",
                                        background: "rgba(220, 53, 69, 0.15)",
                                        border: "1px solid rgba(220, 53, 69, 0.3)",
                                        color: "#dc3545",
                                        marginBottom: "20px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        fontSize: "0.95rem"
                                    }}
                                >
                                    <FaExclamationCircle /> {status.error}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "20px" }}>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    onFocus={e => { e.target.style.borderColor = "var(--primary-energy)"; e.target.style.boxShadow = "0 0 10px rgba(240, 90, 40, 0.2)"; }}
                                    onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                                    style={{
                                        flex: 1,
                                        padding: "16px",
                                        borderRadius: "12px",
                                        background: "rgba(0,0,0,0.4)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        color: "white",
                                        outline: "none",
                                        fontSize: "1rem",
                                        transition: "all 0.3s ease"
                                    }}
                                />
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    placeholder="Company Name"
                                    onFocus={e => { e.target.style.borderColor = "var(--primary-energy)"; e.target.style.boxShadow = "0 0 10px rgba(240, 90, 40, 0.2)"; }}
                                    onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                                    style={{
                                        flex: 1,
                                        padding: "16px",
                                        borderRadius: "12px",
                                        background: "rgba(0,0,0,0.4)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        color: "white",
                                        outline: "none",
                                        fontSize: "1rem",
                                        transition: "all 0.3s ease"
                                    }}
                                />
                            </div>

                            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "20px" }}>
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    required
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    placeholder="Contact Number"
                                    onFocus={e => { e.target.style.borderColor = "var(--primary-energy)"; e.target.style.boxShadow = "0 0 10px rgba(240, 90, 40, 0.2)"; }}
                                    onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                                    style={{
                                        flex: 1,
                                        padding: "16px",
                                        borderRadius: "12px",
                                        background: "rgba(0,0,0,0.4)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        color: "white",
                                        outline: "none",
                                        fontSize: "1rem",
                                        transition: "all 0.3s ease"
                                    }}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Mail Id"
                                    onFocus={e => { e.target.style.borderColor = "var(--primary-energy)"; e.target.style.boxShadow = "0 0 10px rgba(240, 90, 40, 0.2)"; }}
                                    onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                                    style={{
                                        flex: 1,
                                        padding: "16px",
                                        borderRadius: "12px",
                                        background: "rgba(0,0,0,0.4)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        color: "white",
                                        outline: "none",
                                        fontSize: "1rem",
                                        transition: "all 0.3s ease"
                                    }}
                                />
                            </div>

                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Address"
                                onFocus={e => { e.target.style.borderColor = "var(--primary-energy)"; e.target.style.boxShadow = "0 0 10px rgba(240, 90, 40, 0.2)"; }}
                                onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                                style={{
                                    padding: "16px",
                                    borderRadius: "12px",
                                    background: "rgba(0,0,0,0.4)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    color: "white",
                                    outline: "none",
                                    fontSize: "1rem",
                                    transition: "all 0.3s ease"
                                }}
                            />

                            <textarea
                                name="enquiry"
                                required
                                value={formData.enquiry}
                                onChange={handleChange}
                                placeholder="Enquiry (How can we help you?)"
                                rows="5"
                                onFocus={e => { e.target.style.borderColor = "var(--primary-energy)"; e.target.style.boxShadow = "0 0 10px rgba(240, 90, 40, 0.2)"; }}
                                onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                                style={{
                                    padding: "16px",
                                    borderRadius: "12px",
                                    background: "rgba(0,0,0,0.4)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    color: "white",
                                    outline: "none",
                                    resize: "none",
                                    fontSize: "1rem",
                                    transition: "all 0.3s ease"
                                }}
                            ></textarea>

                            <motion.button
                                type="submit"
                                disabled={status.loading}
                                whileHover={{ scale: status.loading ? 1 : 1.02, boxShadow: "0 10px 25px rgba(240, 90, 40, 0.3)" }}
                                whileTap={{ scale: status.loading ? 1 : 0.98 }}
                                style={{
                                    padding: "16px",
                                    background: status.loading ? "rgba(255,255,255,0.1)" : "linear-gradient(45deg, var(--primary-energy), #ff7a45)",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "12px",
                                    fontSize: "1.1rem",
                                    fontWeight: "800",
                                    fontFamily: "Orbitron, sans-serif",
                                    letterSpacing: "1px",
                                    cursor: status.loading ? "not-allowed" : "pointer",
                                    marginTop: "10px",
                                    boxShadow: "0 5px 15px rgba(240, 90, 40, 0.2)",
                                    opacity: status.loading ? 0.7 : 1
                                }}
                            >
                                {status.loading ? "SENDING..." : "SEND INQUIRY"}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ flex: isMobile ? "1" : "1" }} // Ensure Info block stays balanced
                    >
                        <h3 style={{ color: "white", fontSize: "1.8rem", marginBottom: "40px" }}>Corporate Info</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                            <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                                <div style={{
                                    width: "50px",
                                    height: "50px",
                                    background: "rgba(240, 90, 40, 0.1)",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--primary-energy)",
                                    fontSize: "1.2rem",
                                    flexShrink: 0
                                }}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 style={{ color: "white", fontSize: "1.2rem", marginBottom: "5px" }}>Headquarters</h4>
                                    <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                                        No.112, AKR Tech Park, B and,<br />
                                        7th Mile Hosur Rd, Krishna Reddy Industrial Area,<br />
                                        Bengaluru, Karnataka 560068.
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                                <div style={{
                                    width: "50px",
                                    height: "50px",
                                    background: "rgba(0, 242, 234, 0.1)",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#00f2ea",
                                    fontSize: "1.2rem",
                                    flexShrink: 0
                                }}>
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 style={{ color: "white", fontSize: "1.2rem", marginBottom: "5px" }}>Email Us</h4>
                                    <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.6" }}>
                                        support@monknetworks.com<br />
                                        info@monknetworks.com
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                                <div style={{
                                    width: "50px",
                                    height: "50px",
                                    background: "rgba(255, 255, 255, 0.1)",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    fontSize: "1.2rem",
                                    flexShrink: 0
                                }}>
                                    <FaPhone />
                                </div>
                                <div>
                                    <h4 style={{ color: "white", fontSize: "1.2rem", marginBottom: "5px" }}>Call Us</h4>
                                    <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.6" }}>
                                        +91 93 80 38 7110<br />
                                        Mon - Fri, 9am - 6pm IST
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Interactive Map Section */}
            <div id="office-map">
                <GlobalOffices />
            </div>

        </div>
    );
};

export default ContactPage;
