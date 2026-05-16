export default function App() {
  return (
    <div style={styles.page}>
      <h1 style={styles.name}>Maryhelen Gonzalez</h1>

      <p style={styles.subtitle}>
        Cybersecurity • Software Engineering • Network Security
      </p>

      <p style={styles.location}>📍 New York</p>

      {/* ABOUT */}
      <section style={styles.section}>
        <h2>About Me</h2>

        <p style={styles.text}>
          I specialize in cybersecurity, system security, and software engineering.
          I build secure, scalable systems and full-stack applications.
        </p>
      </section>

      {/* PROJECTS */}
      <section style={styles.section}>
        <h2>Projects</h2>

        <div style={styles.card}>
          <h3>📊 FinPilot AI Dashboard</h3>
          <a href="https://finpilot-ai-beta.vercel.app/" target="_blank">
            Live Demo
          </a>
        </div>

        <div style={styles.card}>
          <h3>📊 Loan AI Platform</h3>
          <a href="https://loan-ai-platform.vercel.app/" target="_blank">
            Live Demo
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section style={styles.section}>
        <h2>Contact</h2>

        <p>Email: your-email@gmail.com</p>

        <p>
          GitHub:{" "}
          <a href="https://github.com/maryhelengonzalez" target="_blank">
            github.com/maryhelengonzalez
          </a>
        </p>
      </section>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial",
    padding: "40px",
    maxWidth: "900px",
    margin: "0 auto",
    background: "#020617",
    color: "white",
    minHeight: "100vh",
  },

  name: { fontSize: "40px" },
  subtitle: { color: "#94a3b8" },
  location: { color: "#60a5fa" },

  section: { marginTop: "40px" },

  text: { color: "#cbd5e1", lineHeight: 1.6 },

  card: {
    background: "#0f172a",
    padding: "15px",
    marginTop: "10px",
    borderRadius: "10px",
  },
};
