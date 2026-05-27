const styles = {
  page: {
    minHeight: "100vh",
    color: "white",
    display: "flex",
    justifyContent: "center",
    fontFamily: "'Poppins', sans-serif",
    background:
      "linear-gradient(135deg, #020617 0%, #0f172a 40%, #020617 100%)",
  },

  container: {
    width: "100%",
    maxWidth: "950px",
    padding: "60px 24px",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "40px",
    marginBottom: "50px",
    padding: "20px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
  },

  heroText: {
    flex: 1,
  },

  heroRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "14px",
  },

  image: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #3b82f6",
    boxShadow: "0 0 20px rgba(59,130,246,0.4)",
  },

  tagline: {
    color: "#60a5fa",
    fontSize: "16px",
    marginBottom: "8px",
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: "18px",
  },

  location: {
    color: "#60a5fa",
    marginTop: "8px",
  },

  skillsRow: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  skillIcon: {
    width: "28px",
    height: "28px",
  },

  section: {
    marginTop: "50px",
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: "22px",
    marginBottom: "16px",
  },

  aboutCard: {
    background: "rgba(15, 23, 42, 0.6)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "18px",
    padding: "26px",
    backdropFilter: "blur(12px)",
  },

  aboutText: {
    color: "#cbd5e1",
    lineHeight: "1.8",
    marginBottom: "14px",
  },

  card: {
    marginTop: "20px",
    background: "rgba(15, 23, 42, 0.6)",
    padding: "24px",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  text: {
    color: "#cbd5e1",
    lineHeight: 1.8,
  },

  links: {
    display: "flex",
    gap: "14px",
    marginTop: "18px",
  },

  link: {
    color: "#22c55e",
    textDecoration: "none",
  },
  name: {
  fontFamily: "'Inter', sans-serif",
  fontSize: "44px",
  fontWeight: "800",
  letterSpacing: "-1.2px",
  background: "linear-gradient(90deg, #ffffff, #60a5fa)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "8px",
},

tagline: {
  fontSize: "18px",
  color: "#93c5fd",
  marginBottom: "10px",
  fontWeight: "500",
},

subtitle: {
  fontSize: "14px",
  color: "#cbd5e1",
  marginBottom: "10px",
  letterSpacing: "0.3px",
},

location: {
  fontSize: "14px",
  color: "#60a5fa",
  fontWeight: "500",
},
};

export default function App() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* HERO */}
<div style={styles.hero}>
  <div style={styles.heroText}>

    <h1 style={styles.name}>
      Maryhelen Gonzalez
    </h1>

    <p style={styles.tagline}>
      Building secure systems and intelligent financial applications
    </p>

    <p style={styles.subtitle}>
      Cybersecurity Engineer • Software Engineer • Systems Architecture & Security
    </p>

    <p style={styles.location}>
      📍 New York
    </p>

  </div>

          <div style={styles.heroRight}>
            <img
              src="https://i.imgur.com/5ejoW3i.jpeg"
              alt="profile"
              style={styles.image}
            />

           <div style={styles.skillsRow}>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style={styles.skillIcon} />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style={styles.skillIcon} />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" style={styles.skillIcon} />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" style={styles.skillIcon} />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" style={styles.skillIcon} />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" style={styles.skillIcon} />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" style={styles.skillIcon} />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" style={styles.skillIcon} />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" style={styles.skillIcon} />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" style={styles.skillIcon} />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" style={styles.skillIcon} />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" style={styles.skillIcon} />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" style={styles.skillIcon} />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" style={styles.skillIcon} />
          </div>
          </div>
        </div>

       {/* ABOUT */}
<section style={styles.section}>
  <h2 style={styles.sectionTitle}>About Me</h2>

  <div style={styles.aboutCard}>
    <p style={styles.aboutText}>
      I started my academic journey with an Associate’s degree in Industrial Design, where I developed a strong foundation in design thinking, structure, and system-based problem solving. As I progressed, I explored architectural concepts, but became increasingly interested in the logic and engineering behind software systems. That shift led me to pursue a Bachelor’s degree in Computer Science and Information Security, where I transitioned fully into software and cybersecurity. Today, I focus on building secure and scalable applications.
    </p>
  </div>
</section>

       {/* PROJECTS */}
<section style={styles.section}>
  <h2 style={styles.sectionTitle}>Projects</h2>

  {/* PROJECT 1 */}
  <div style={styles.card}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h3 style={{ margin: 0, fontSize: "20px", color: "#ffffff" }}>
        📊 FinPilot AI Dashboard
      </h3>
      <span style={{ color: "#60a5fa", fontSize: "12px" }}>
        AI • Finance • Analytics
      </span>
    </div>

    <p style={styles.text}>
      AI powered financial dashboard with analytics and intelligent insights.
    </p>

    <div style={styles.links}>
      <a href="https://finpilot-ai-beta.vercel.app/" target="_blank" rel="noreferrer" style={styles.link}>
        Live Demo →
      </a>

      <a href="https://github.com/maryhelengonzalez" target="_blank" rel="noreferrer" style={styles.link}>
        GitHub →
      </a>
    </div>
  </div>

  {/* PROJECT 2 */}
  <div style={styles.card}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h3 style={{ margin: 0, fontSize: "20px", color: "#ffffff" }}>
        🚚 Intelligent Delivery Dispatch System
      </h3>

      <span style={{ color: "#60a5fa", fontSize: "12px" }}>
        Full Stack • Logistics • Maps
      </span>
    </div>

    <p style={styles.text}>
     Scalable logistics orchestration platform enabling real-time delivery tracking, intelligent driver assignment, and map-based route optimization.
    </p>

    <div style={styles.links}>
      <a href="https://delivery-optimizer-two.vercel.app" target="_blank" rel="noreferrer" style={styles.link}>
        Live Demo →
      </a>

      <a href="https://github.com/maryhelengonzalez/delivery-optimizer" target="_blank" rel="noreferrer" style={styles.link}>
        GitHub →
      </a>
    </div>
  </div>
</section>

        {/* CONTACT */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact</h2>

          <p>Email: maryhelengonzalez51@gmail.com</p>

          <p>
            GitHub:{" "}
            <a
              href="https://github.com/maryhelengonzalez"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              github.com/maryhelengonzalez
            </a>
          </p>
        </section>

      </div>
    </div>
  );
}
