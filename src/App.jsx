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
  projectTitle: {
  fontSize: "20px",
  fontWeight: "700",
  marginBottom: "6px",
  color: "#ffffff",
},

projectSubtitle: {
  fontSize: "14px",
  color: "#60a5fa",
  marginBottom: "12px",
  fontWeight: "500",
},

bullets: {
  marginTop: "12px",
  paddingLeft: "18px",
  color: "#cbd5e1",
  lineHeight: "1.8",
},
};

export default function App() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* HERO */}
        <div style={styles.hero}>
          <div style={styles.heroText}>
            <h1>Maryhelen Gonzalez</h1>

            <p style={styles.tagline}>
              Building secure systems and intelligent financial applications
            </p>

            <p style={styles.subtitle}>
              Cybersecurity Engineer • Software Engineer • Systems Architecture & Security
            </p>

            <p style={styles.location}>📍 New York</p>
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
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" style={styles.skillIcon} />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" style={styles.skillIcon} />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" style={styles.skillIcon} />
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>About Me</h2>

          <div style={styles.aboutCard}>
            <p style={styles.aboutText}>
              My interest in technology began in high school...
            </p>

            <p style={styles.aboutText}>
              That curiosity led me into Computer Science...
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Projects</h2>

          <div style={styles.card}>
            <h3>📊 FinPilot AI Dashboard</h3>

            <p style={styles.text}>
              AI powered financial dashboard with analytics and intelligent insights.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.projectTitle}>
              🚚 Intelligent Delivery Dispatch System
            </h3>

            <p style={styles.projectSubtitle}>
              Full-stack logistics & real-time dispatch platform
            </p>

            <ul style={styles.bullets}>
              <li>📍 Real-time tracking</li>
              <li>🚗 Driver dispatch</li>
              <li>🗺️ Leaflet routing</li>
              <li>⚙️ Backend API system</li>
            </ul>
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

