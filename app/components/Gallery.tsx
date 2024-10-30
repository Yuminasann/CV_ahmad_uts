import React from 'react';
import Image from 'next/image'; // Import Image dari Next.js
import gambar from '../image/gambar.jpg';
import games from '../image/games.jpg';
import gitar from '../image/gitarr.jpg';
import volly from '../image/volly.jpg';
import '../Hobbies.css'; // Import file CSS untuk styling

const MyGallery = () => {
  const Hobbies = [
    { name: "menggambar", image: gambar },
    { name: "bermain game", image: games },
    { name: "bermain gitar", image: gitar },
    { name: "volly", image: volly }
  ];

  return (
    <section className="gallery-container">
      <h2 className="gallery-title">My Gallery</h2>
      <div className="gallery">
        {Hobbies.map((hobby, index) => (
          <div key={index} className="gallery-card">
            <Image src={hobby.image} alt={hobby.name} className="gallery-image" layout="responsive" width={150} height={100} />
            <div className="gallery-caption">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyGallery;