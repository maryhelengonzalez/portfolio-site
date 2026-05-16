export default function App() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <div style={styles.hero}>
         <img
  src="https://i.imgur.com/rSuGcFR.jpeg"
  alt="profile"
  style={styles.image}
/>

          <div>
            <h1 style={styles.name}>Maryhelen Gonzalez</h1>

            <p style={styles.subtitle}>
              Cybersecurity • Software Engineering • Network Security
            </p>

            <p style={styles.location}>📍 New York</p>
          </div>
        </div>

        <section style={styles.section}>
          <h2>About Me</h2>

          <p style={styles.text}>
            I specialize in cybersecurity, system security, and software engineering.
            I build secure, scalable systems and full-stack applications focused on
            security, analytics, and intelligent systems.
          </p>
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
    background: "#020617",
    minHeight: "100vh",
    color: "white",
    fontFamily: "Arial",
    display: "flex",
    justifyContent: "center",
  },

  container: {
    width: "100%",
    maxWidth: "950px",
    padding: "60px 24px",
  },

  hero: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    marginBottom: "50px",
  },

  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #22c55e",
  },

  name: {
    fontSize: "48px",
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

  section: {
    marginTop: "50px",
  },

  text: {
    color: "#cbd5e1",
    lineHeight: 1.8,
  },

  card: {
    marginTop: "20px",
    background: "#0f172a",
    padding: "24px",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.08)",
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
};
