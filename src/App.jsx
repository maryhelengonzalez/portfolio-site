export default function App() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
<div style={styles.hero}>

  {/* LEFT SIDE */}
  <div style={styles.heroText}>
    <h1 style={styles.name}>Maryhelen Gonzalez</h1>

    <p style={styles.tagline}>
      Building secure systems and intelligent financial applications
    </p>

    <p style={styles.subtitle}>
      Cybersecurity Engineer • Software Engineer • Systems Architecture & Security
    </p>

    <p style={styles.location}>📍 New York</p>
  </div>

  {/* RIGHT SIDE */}
  <div style={styles.heroRight}>

    <img
      src="https://i.imgur.com/LBMmEzW.jpeg"
      alt="profile"
      style={styles.image}
    />

    <div style={styles.skillsRow}>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style={styles.skillIcon} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style={styles.skillIcon} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" style={styles.skillIcon} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" style={styles.skillIcon} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" style={styles.skillIcon} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" style={styles.skillIcon} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" style={styles.skillIcon} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" style={styles.skillIcon} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" style={styles.skillIcon} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" style={styles.skillIcon} />
    </div>

  </div>

</div>

       <section style={styles.section}>
  <h2 style={styles.sectionTitle}>About Me</h2>

  <div style={styles.aboutCard}>

    <p style={styles.aboutText}>
      My interest in technology began in high school, where I was originally drawn to
      creative and design-focused fields. That curiosity led me into Industrial Design
      Technology and Architecture Technology, where I learned how systems, structure,
      and problem-solving come together to build real-world solutions.
    </p>

    <p style={styles.aboutText}>
      Over time, I became more interested in the logic and security behind digital systems,
      which led me to transition into Computer Science with a focus on Information Security.
      Throughout college, I developed a strong passion for cybersecurity, system security,
      and software engineering.
    </p>

    <p style={styles.aboutText}>
      Today, I focus on building secure and scalable applications, with particular interest
      in cybersecurity, backend systems, and data-driven platforms. I enjoy working on
      projects that combine security, performance, and real-world impact.
    </p>

  </div>
</section>
        <section style={styles.section}>
          <h2>Projects</h2>

          <div style={styles.card}>
            <h3>📊 FinPilot AI Dashboard</h3>

            <p style={styles.text}>
              AI-powered financial dashboard with real-time analytics,
              account tracking, interactive charts, and intelligent
              financial insights.
            </p>

            <div style={styles.links}>
              <a
                href="https://finpilot-ai-beta.vercel.app/"
                target="_blank"
                style={styles.link}
              >
                Live Demo →
              </a>

              <a
                href="https://github.com/maryhelengonzalez"
                target="_blank"
                style={styles.link}
              >
                GitHub Code →
              </a>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2>Contact</h2>

          <p>Email: maryhelengonzalez51@gmail.com</p>

          <p>
            GitHub:{" "}
            <a
              href="https://github.com/maryhelengonzalez"
              target="_blank"
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

const styles = {
  page: {
    minHeight: "100vh",
    color: "white",
    fontFamily: "Arial",
    display: "flex",
    justifyContent: "center",
    fontFamily: "'Poppins', 'Inter', sans-serif",

    /* 🌈 GRADIENT BACKGROUND */
    background: "linear-gradient(135deg, #020617 0%, #0f172a 40%, #020617 100%)",
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

  image: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #3b82f6",
    marginTop: "16px",
    display: "block",
    boxShadow: "0 0 20px rgba(59,130,246,0.4)",
  },

  name: {
    fontSize: "48px",
    marginBottom: "8px",
    color: "#ffffff",
    fontWeight: "700",
    letterSpacing: "-0.5px",
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: "18px",
  },

  location: {
    color: "#60a5fa",
    marginTop: "8px",
  },

  section: {
    marginTop: "50px",
  },

  text: {
    color: "#cbd5e1",
    lineHeight: 1.8,
  },

  card: {
    marginTop: "20px",

    /* 🌟 GLASS CARD EFFECT */
    background: "rgba(15, 23, 42, 0.6)",
    padding: "24px",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",

    /* soft glow */
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },

  links: {
    display: "flex",
    gap: "14px",
    marginTop: "18px",
  },

  link: {
    color: "#22c55e",
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid rgba(34,197,94,0.3)",
    background: "rgba(34,197,94,0.08)",
  },
  tagline: {
  color: "#60a5fa",
  fontSize: "16px",
  marginTop: "4px",
  marginBottom: "8px",
  fontWeight: "500",
  letterSpacing: "0.2px",
},
skillsRow: {
  display: "flex",
  gap: "12px",
  marginTop: "14px",
  alignItems: "center",
  flexWrap: "wrap",
},

skillIcon: {
  width: "28px",
  height: "28px",
  filter: "drop-shadow(0 0 6px rgba(59,130,246,0.4))",
  transition: "transform 0.2s ease",
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

skillsWrap: {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "10px",
  maxWidth: "140px",
},
sectionTitle: {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: "600",
  marginBottom: "16px",
  letterSpacing: "0.3px",
},

aboutCard: {
  background: "rgba(15, 23, 42, 0.6)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "18px",
  padding: "26px",
  backdropFilter: "blur(12px)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
},

aboutText: {
  color: "#cbd5e1",
  lineHeight: "1.8",
  fontSize: "15.5px",
  marginBottom: "14px",
},
};
