import React, { useState } from "react";

const FreelancerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    skills: "",
    experience: "",
    portfolio: "",
    hourlyRate: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Join Our Freelancer Community</h1>
        <p style={styles.headerSubtitle}>
          Showcase your skills and connect with clients worldwide
        </p>
      </div>

      <div style={styles.container}>
        <div style={styles.formHeader}>
          <h2 style={styles.formTitle}>Freelancer Registration</h2>
          <p style={styles.formIntro}>
            Fill out this form to create your freelancer profile and start
            getting projects.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.twoColumn}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="fullName">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                style={styles.input}
                placeholder="John Doe"
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="email">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div style={styles.twoColumn}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
                placeholder="+1234567890"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="hourlyRate">
                Hourly Rate ($) *
              </label>
              <input
                type="number"
                id="hourlyRate"
                name="hourlyRate"
                value={formData.hourlyRate}
                onChange={handleChange}
                style={styles.input}
                min="0"
                placeholder="50"
                required
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="skills">
              Your Skills (comma separated) *
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              style={styles.input}
              placeholder="Web Design, JavaScript, React, etc."
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="experience">
              Years of Experience *
            </label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              style={styles.input}
              min="0"
              placeholder="3"
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="portfolio">
              Portfolio/Website URL
            </label>
            <input
              type="url"
              id="portfolio"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              style={styles.input}
              placeholder="https://yourportfolio.com"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="bio">
              Bio/Introduction *
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              style={{ ...styles.input, height: "120px" }}
              placeholder="Tell us about yourself, your experience, and what you can offer to clients..."
              required
            />
          </div>

          <div style={styles.terms}>
            <input
              type="checkbox"
              id="terms"
              required
              style={styles.checkbox}
            />
            <label htmlFor="terms" style={styles.termsText}>
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>

          <button type="submit" style={styles.submitButton}>
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
    padding: "0 20px",
  },
  header: {
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "40px 20px",
    textAlign: "center",
    marginBottom: "30px",
  },
  headerTitle: {
    fontSize: "2.5rem",
    margin: "0",
    fontWeight: "600",
  },
  headerSubtitle: {
    fontSize: "1.2rem",
    margin: "10px 0 0",
    opacity: "0.9",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto 50px",
    padding: "30px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  },
  formHeader: {
    textAlign: "center",
    marginBottom: "30px",
  },
  formTitle: {
    fontSize: "2rem",
    color: "#2c3e50",
    margin: "0 0 10px",
  },
  formIntro: {
    color: "#7f8c8d",
    fontSize: "1rem",
    margin: "0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  twoColumn: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontWeight: "600",
    color: "#34495e",
    fontSize: "0.95rem",
  },
  input: {
    padding: "12px 15px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "16px",
    transition: "border 0.3s, box-shadow 0.3s",
    ":focus": {
      outline: "none",
      borderColor: "#3498db",
      boxShadow: "0 0 0 3px rgba(52, 152, 219, 0.2)",
    },
  },
  terms: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "10px 0",
  },
  checkbox: {
    width: "18px",
    height: "18px",
  },
  termsText: {
    fontSize: "0.9rem",
    color: "#7f8c8d",
  },
  submitButton: {
    backgroundColor: "#3498db",
    color: "white",
    padding: "15px 25px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "600",
    marginTop: "10px",
    transition: "background-color 0.3s, transform 0.2s",
    ":hover": {
      backgroundColor: "#2980b9",
      transform: "translateY(-2px)",
    },
    ":active": {
      transform: "translateY(0)",
    },
  },
};

export default FreelancerForm;
