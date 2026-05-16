export default function App() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* HEADER */}
        <h1 style={styles.name}>Maryhelen Gonzalez</h1>

        <p style={styles.subtitle}>
          Cybersecurity • Software Engineering • Network Security
        </p>

        <p style={styles.location}>📍 New York</p>

        {/* ABOUT */}
        <section style={styles.section}>
          <h2 style={styles.heading}>About Me</h2>
          <p style={styles.text}>
            I specialize in cybersecurity, system security, and software engineering.
            I build secure, scalable systems and full-stack applications.
          </p>
        </section>

        {/* PROJECTS */}
        <section style={styles.section}>
          <h2 style={styles.heading}>Projects</h2>

          <div style={styles.card}>
            <h3>📊 FinPilot AI Dashboard</h3>
            <a
              style={styles.link}
              href="https://finpilot-ai-beta.vercel.app/"
              target="_blank"
            >
              Live Demo →
            </a>
          </div>

          <div style={styles.card}>
            <h3>📊 Loan AI Platform</h3>
            <a
              style={styles.link}
              href="https://loan-ai-platform.vercel.app/"
              target="_blank"
            >
              Live Demo →
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section style={styles.section}>
          <h2 style={styles.heading}>Contact</h2>

          <p>Email: your-email@gmail.com</p>

          <p>
            GitHub:{" "}
            <a
              style={styles.link}
              href="https://github.com/maryhelengonzalez"
              target="_blank"
            >
              github.com/maryhelengonzalez
            </a>
          </p>
        </section>

      </div>
    </div>
  );
}

/* STYLES */

const styles = {
  page: {
    background: "#020617",
    color: "white",
    minHeight: "100vh",
    fontFamily: "Arial",
    display: "flex",
    justifyContent: "center",
  },

  container: {
    maxWidth: "900px",
    width: "100%",
    padding: "60px 20px",
  },

  name: {
    fontSize: "48px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
    color: "#94a3b8",
  },

  location: {
    color: "#60a5fa",
    marginTop: "8px",
  },

  section: {
    marginTop: "50px",
  },

  heading: {
    fontSize: "24px",
    marginBottom: "15px",
  },

  text: {
    color: "#cbd5e1",
    lineHeight: 1.7,
  },

  card: {
    background: "#0f172a",
    padding: "18px",
    borderRadius: "12px",
    marginTop: "12px",
  },

  link: {
    color: "#22c55e",
    display: "inline-block",
    marginTop: "8px",
    textDecoration: "none",
  },
};
