// src/components/Services/Services.jsx
import { motion } from "framer-motion";
import { FaCamera, FaGlassCheers, FaTree, FaBaby, FaBoxOpen, FaUserTie, FaGift, FaHandshake, FaPortrait } from "react-icons/fa";
import "./services.css";

const services = [
  {
    icon: <FaCamera />,
    title: "Wedding Photography",
    desc: "Elegant and timeless captures for your special day. We document every emotion.",
  },
  {
    icon: <FaBaby />,
    title: "Maternity Shoots",
    desc: "Celebrating the beauty of motherhood with artistic and tender portraits.",
  },
  {
    icon: <FaGlassCheers />,
    title: "Event Coverage",
    desc: "Professional photography for birthdays, engagements, and corporate events.",
  },

  {
    icon: <FaUserTie />,
    title: "Portfolio Shoots",
    desc: "Professional headshots and modeling portfolios to help you stand out.",
  },
  {
    icon: <FaTree />,
    title: "Outdoor Shoots",
    desc: "Creative outdoor portraits filled with life, color, and natural beauty.",
  },
  {
    icon: <FaGift />,
    title: "Baby Shower",
    desc: "Joyful and intimate captures of your special anticipation and celebrations.",
  },
  {
    icon: <FaHandshake />,
    title: "Collaborative Works",
    desc: "Partnering with artists and brands to create stunning visual narratives.",
  },
  {
    icon: <FaPortrait />,
    title: "Portrait Shoots",
    desc: "Striking individual portraits focusing on personality, mood, and expression.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <div className="services-wrapper">
      <motion.h2
        className="services-title glow-gold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      <div className="services-grid">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="service-card"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="service-icon-wrapper">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
