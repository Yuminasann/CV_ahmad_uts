import React from 'react';
import { useTheme } from './ThemeContext'; // Import hook untuk mengakses tema

// Data informasi pribadi
const personalInfo = {
  TTL: 'Sumedang, 19 Juni 2001',
  Gender: 'Laki-Laki',
  TinggiBadan: '169 cm',
  BeratBadan: '49 kg',
  StatusPernikahan: 'Lajang',
  Whatsapp: '08289382910',
  Email: 'cooldadang95@gmail.com',
};

// Styling untuk komponen
const styles = {
  section: {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '20px auto',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '15px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  label: {
    fontWeight: 'bold',
  },
};

// Komponen MyInfos
const MyInfos = () => {
  const { theme } = useTheme(); // Mengakses tema yang aktif

  return (
    <section
      style={{
        ...styles.section,
        backgroundColor: theme.backgroundColor, // Terapkan background sesuai tema
        color: theme.color, // Terapkan warna teks sesuai tema
      }}
    >
      <h2 style={{ ...styles.heading, color: theme.color }}>Personal Info</h2>
      <ul style={styles.list}>
        {Object.entries(personalInfo).map(([key, value]) => (
          <li
            key={key}
            style={{
              ...styles.listItem,
              backgroundColor: theme.backgroundColor, // Terapkan tema untuk setiap item
              color: theme.color,
            }}
          >
            <span style={styles.label}>{key}:</span> {value}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MyInfos;