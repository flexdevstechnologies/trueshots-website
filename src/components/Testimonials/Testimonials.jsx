// src/components/Testimonials/Testimonials.jsx
import { motion } from "framer-motion";
import "./testimonials.css";

const testimonials = [
  {
    text: "From the very first click to the final album delivery, this talented team of two young women managed everything flawlessly. They made us feel completely comfortable on our wedding day and captured every moment so naturally and beautifully. They even created lovely frames for us, adding an extra special touch to our memories. We are more than happy with their splendid work. Thank you, Trueshots, for making our wedding day truly unforgettable.",
    author: "Monika",
    role: "Wedding"
  },
  {
    text: "Thank you True Shots Photography for capturing my maternity shoot, baby shower, and newborn shoots so beautifully! Everything was done in such a friendly, comfortable way. I truly recommend this wonderful team to all my friends and family. 💛 Special thanks to Aishu ,Shreya and Sarasu — Get ready, guys 😁🔥for the next bdy shoot❤️",
    author: "Neema",
    role: "Maternity & Family"
  },
  {
    text: "True Shots Photography delivers exceptional image quality and beautifully captures genuine, emotional moments with an artistic touch. Their professional and friendly team ensures a smooth experience—highly recommended!",
    author: "Padmaja",
    role: "Client"
  },
  {
    text: "Had a wonderful experience with \"Trueshots\". The quality of the photos exceeded our expectations — every image was beautifully composed, well-lit, and full of natural emotion. The team's professionalism and friendly approach made the process comfortable and enjoyable. They nailed every important moment, and we're thrilled with the results! Highly recommended for capturing life's precious moments 💫. \"Photography is the story we fail to put into words\" 📸📸",
    author: "Venkat Ragavan",
    role: "Client"
  },
  {
    text: "I had an amazing experience with this young photographers. I truly appreciate the effort and creativity they put into capturing my photos. The way they handled the shoot and delivered the final output was impressive. I was able to see a completely different version of myself through their lens, and that made the experience even more special. I would highly recommend them without a second thought!",
    author: "Kiran Kumar",
    role: "Portrait"
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper">
      <motion.h2
        className="testimonials-title glow-gold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Client Testimonials
      </motion.h2>

      <div className="testimonials-grid">
        {testimonials.map((item, i) => (
          <motion.div
            className="testimonial-card"
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="quote-icon">“</div>
            <p className="testimonial-review">{item.text}</p>
            <div className="testimonial-meta">
              <h4 className="testimonial-name">{item.author}</h4>
              <span className="testimonial-role">{item.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
