import { useState } from "react";

const FeedbackForm = () => {
  const [futsalCourt, setFutsalCourt] = useState("");
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!rating) {
      alert("Please select a rating before submitting.");
      return;
    }

    const formData = { futsalCourt, rating, comments };

    try {
      const response = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you for your feedback!");
        setFutsalCourt("");
        setRating(0);
        setComments("");
      } else {
        alert("Error submitting feedback. Please try again.");
      }
    } catch (error) {
      alert("Failed to connect to the server.");
    }
  };

  // Inline styles
  const styles = {
    overlay: {
      top: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      background: "rgba(255, 255, 255, 0.1)",
      padding: "50px 30px",
      borderRadius: "12px",
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
      maxWidth: "350px",
      width: "100%",
      textAlign: "center",
      color: "white",
    },
    inputGroup: {
      width: "100%",
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "12px",
      borderRadius: "6px",
      border: "none",
      background: "rgba(255, 255, 255, 0.2)",
      color: "white",
      fontSize: "16px",
      boxSizing: "border-box",
      textAlign: "left",
    },
    textarea: {
      height: "120px",
      resize: "none",
      fontFamily: "Arial, sans-serif",
      fontSize: "16px",
    },
    stars: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginTop: "10px",
    },
    star: {
      fontSize: "30px",
      color: "gray",
      cursor: "pointer",
    },
    starFilled: {
      color: "gold",
    },
    button: {
      backgroundColor: "#FF6600",
      color: "white",
      padding: "12px",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
      width: "100%",
      display: "block",
      textAlign: "center",
      marginTop: "15px",
      boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)",
      transition: "background 0.3s ease, transform 0.1s ease",
    },
    buttonHover: {
      backgroundColor: "#FF5500",
      transform: "scale(1.05)",
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <h2>Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label>Futsal Court Name:</label>
            <input
              type="text"
              value={futsalCourt}
              onChange={(e) => setFutsalCourt(e.target.value)}
              required
              placeholder="Enter the court name"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Overall Rating:</label>
            <div style={styles.stars}>
              {[1, 2, 3, 4, 5].map((num) => (
                <span
                  key={num}
                  style={rating >= num ? { ...styles.star, ...styles.starFilled } : styles.star}
                  onClick={() => setRating(num)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label>Additional Comments:</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              required
              placeholder="Enter your comments..."
              style={{ ...styles.input, ...styles.textarea }}
            ></textarea>
          </div>

          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;