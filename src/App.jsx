import profileImg from "./assets/profile.jpg";

export default function App() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* HEADER */}
        <div style={styles.header}>
          <img src={profileImg} alt="profile" style={styles.profileImg} />

          <div>
            <h1 style={styles.name}>Maryhelen Gonzalez</h1>
            <p style={styles.subtitle}>
              Cybersecurity • Software Engineering • Network Security
            </p>
            <p style={styles.location}>📍 New York</p>
          </div>
        </div>

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

            <p style={styles.text}>
              AI-powered financial dashboard designed to analyze income, expenses,
              and financial behavior through real-time analytics and interactive charts.
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

        {/* CONTACT */}
        <section style={styles.section}>
          <h2 style={styles.heading}>Contact</h2>

          <p>Email: your-email@gmail.com</p>

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

  header: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "40px",
  },

  profileImg: {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #22c55e",
  },

  name: {
    fontSize: "42px",
    margin: 0,
  },

  subtitle: {
    color: "#94a3b8",
    marginTop: "6px",
  },

  location: {
    color: "#60a5fa",
  },

  section: {
    marginTop: "50px",
  },

  heading: {
    fontSize: "22px",
    marginBottom: "12px",
  },

  text: {
    color: "#cbd5e1",
    lineHeight: 1.7,
  },

  card: {
    background: "#0f172a",
    padding: "20px",
    borderRadius: "12px",
    marginTop: "15px",
  },

  links: {
    display: "flex",
    gap: "12px",
    marginTop: "12px",
  },

  link: {
    color: "#22c55e",
    textDecoration: "none",
  },
};
