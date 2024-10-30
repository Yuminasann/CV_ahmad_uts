"use client";

import React from 'react';
import Hero from "./components/hero";
import RiwayatPendidikan from "./components/RiwayatPendidikan";
import { RiwayatPekerjaan } from "./components/RiwayatPekerjaan";
import Warna from "./components/favColor";
import Input from "./components/Formkontak";
import Skill from "./components/skill";
import MyInfos from "./components/Myinfo";
import MyGallery from "./components/Gallery";
import { ThemeProvider, useTheme } from './components/ThemeContext';
import "./style.css";

function Content() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div className="theme-buttons">
  <button className="theme-button light" onClick={() => toggleTheme('light')}>Tema Terang</button>
  <button className="theme-button dark" onClick={() => toggleTheme('dark')}>Tema Gelap</button>
  <button className="theme-button blue-soft" onClick={() => toggleTheme('blueSoft')}>Tema Biru Soft</button>
</div>
      <Hero />
      <MyInfos />
      <MyGallery />
      <RiwayatPendidikan />
      <Skill />
      <RiwayatPekerjaan />
      <Warna />
      <Input />

      
    </section>
  );
}

export default function Gallery() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}