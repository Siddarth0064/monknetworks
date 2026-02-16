import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// Fix for default Leaflet marker icons in React/Vite
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom Marker using SVG Logo
const officeIcon = L.divIcon({
    className: 'custom-icon',
    html: `
        <div style="
            width: 40px;
            height: 40px;
            background: rgba(0, 0, 0, 0.8);
            border: 2px solid #00f2ea;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 15px #00f2ea;
            position: relative;
        ">
            <svg width="24" height="24" viewBox="0 0 40 40" style="overflow: visible;">
                <path d="M 12 30 L 12 10 L 20 20 L 28 10 L 28 30"
                      fill="transparent"
                      stroke="#00f2ea"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
            </svg>
            <div style="
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                animation: pulse 2s infinite;
                box-shadow: 0 0 10px #00f2ea;
            "></div>
        </div>
        <style>
            @keyframes pulse {
                0% { transform: scale(1); opacity: 0.8; }
                70% { transform: scale(1.5); opacity: 0; }
                100% { transform: scale(1); opacity: 0; }
            }
        </style>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -25],
});

// Component to handle smooth zooming/panning
const FlyToLocation = ({ center, zoom }) => {
    const map = useMap();
    useEffect(() => {
        map.flyTo(center, zoom, {
            duration: 2.5, // Animation duration in seconds
            easeLinearity: 0.25,
        });
    }, [center, zoom, map]);
    return null;
};

const GlobalOffices = () => {
    // View States: "Global", "India", "Bangalore"
    const [viewState, setViewState] = useState("Global");

    // Coordinates
    const coordinates = {
        Global: { center: [20, 0], zoom: 2 },
        India: { center: [20.5937, 78.9629], zoom: 5 },
        Bangalore: { center: [12.9716, 77.5946], zoom: 12 },
    };

    // Bangalore Office Locations
    const offices = [
        {
            id: 1,
            name: "Monk Networks HQ",
            position: [12.9716, 77.5946],
            address: "Level 12, Monk Towers\nOuter Ring Road, Marathahalli\nBangalore, Karnataka - 560037",
            phone: "+91 80 4567 8900",
            email: "bangalore@monknetworks.com",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80",
            type: "Global Headquarters"
        },
        // Uncommonent when ready
        // { id: 2, name: "Innovation Hub", position: [12.9352, 77.6245], desc: "Koramangala R&D Center." },
    ];

    const handleViewChange = (view) => {
        setViewState(view);
    };

    return (
        <section id="offices" style={{ padding: "80px 20px", background: "linear-gradient(to bottom, #050505, #101010)" }}>
            <div className="container" style={{ textAlign: "center", maxWidth: "1200px", margin: "0 auto" }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: "2.5rem", color: "white", marginBottom: "3rem" }}
                >
                    Our <span style={{ color: "#00f2ea" }}>Global Presence</span>
                </motion.h2>

                {/* Controls */}
                <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center", gap: "10px" }}>
                    {Object.keys(coordinates).map((view) => (
                        <button
                            key={view}
                            onClick={() => handleViewChange(view)}
                            style={{
                                padding: "10px 20px",
                                background: viewState === view ? "#00f2ea" : "transparent",
                                color: viewState === view ? "#000" : "#00f2ea",
                                border: "1px solid #00f2ea",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontSize: "1rem",
                                fontWeight: "bold",
                                transition: "all 0.3s ease"
                            }}
                        >
                            {view === "Global" ? "World View" : view}
                        </button>
                    ))}
                </div>

                {/* Map Container */}
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "500px",
                        margin: "0 auto",
                        borderRadius: "20px",
                        overflow: "hidden",
                        border: "2px solid #333",
                        boxShadow: "0 0 30px rgba(0, 242, 234, 0.1)",
                        zIndex: 0
                    }}
                >
                    <MapContainer
                        center={coordinates.Global.center}
                        zoom={coordinates.Global.zoom}
                        scrollWheelZoom={false}
                        attributionControl={false}
                        zoomControl={false}
                        style={{ height: "100%", width: "100%" }}
                    >
                        {/* Dark Matter Tile Layer */}
                        <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        />

                        {/* Programmatic Zoom Control */}
                        <FlyToLocation center={coordinates[viewState].center} zoom={coordinates[viewState].zoom} />

                        {offices.map((office) => (
                            <Marker key={office.id} position={office.position} icon={officeIcon}>
                                <Popup className="custom-popup" closeButton={false}>
                                    <div style={{ width: "260px", padding: "0" }}>
                                        {/* Image Header */}
                                        <div style={{
                                            position: "relative",
                                            height: "140px",
                                            width: "100%",
                                            borderRadius: "12px 12px 0 0",
                                            overflow: "hidden",
                                            marginBottom: "10px"
                                        }}>
                                            <img
                                                src={office.image || "https://placehold.co/400x300"}
                                                alt={office.name}
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            />
                                            <div style={{
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                width: "100%",
                                                background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                                                padding: "10px",
                                                boxSizing: "border-box"
                                            }}>
                                                <span style={{
                                                    background: "#00f2ea",
                                                    color: "#000",
                                                    padding: "2px 8px",
                                                    borderRadius: "4px",
                                                    fontSize: "0.7rem",
                                                    fontWeight: "bold",
                                                    textTransform: "uppercase"
                                                }}>
                                                    {office.type}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div style={{ padding: "0 10px 10px 10px" }}>
                                            <h3 style={{ margin: "0 0 10px 0", fontSize: "1.1rem", fontWeight: "bold", color: "#fff" }}>
                                                {office.name}
                                            </h3>

                                            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "8px" }}>
                                                <FaMapMarkerAlt style={{ color: "#00f2ea", marginTop: "3px", flexShrink: 0 }} />
                                                <p style={{ margin: 0, fontSize: "0.85rem", color: "#ccc", whiteSpace: "pre-line", lineHeight: "1.4" }}>
                                                    {office.address}
                                                </p>
                                            </div>

                                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                                                <FaPhoneAlt style={{ color: "#00f2ea", fontSize: "0.8rem", flexShrink: 0 }} />
                                                <p style={{ margin: 0, fontSize: "0.85rem", color: "#ccc" }}>{office.phone}</p>
                                            </div>

                                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                                <FaEnvelope style={{ color: "#00f2ea", fontSize: "0.8rem", flexShrink: 0 }} />
                                                <p style={{ margin: 0, fontSize: "0.85rem", color: "#ccc" }}>{office.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}

                        <style>{`
                            .leaflet-popup-content-wrapper, .leaflet-popup-tip {
                                background: #1a1a1a !important;
                                color: #fff !important;
                                border: 1px solid #00f2ea !important;
                                box-shadow: 0 0 20px rgba(0, 242, 234, 0.3) !important;
                                border-radius: 12px !important;
                            }
                            .leaflet-popup-content {
                                margin: 0 !important;
                                width: 260px !important;
                            }
                            .leaflet-container a.leaflet-popup-close-button {
                                color: #fff !important;
                            }
                        `}</style>
                    </MapContainer>
                </div>

                <p style={{ color: "#777", marginTop: "20px", fontSize: "0.9rem" }}>
                    Explore our network. Click "Bangalore" to see our local hubs.
                </p>
            </div>
        </section>
    );
};

export default GlobalOffices;
