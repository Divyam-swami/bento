import React, { useEffect, useState } from "react";

const RandomImage = () => {
    const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const images = [
    {
      url: "https://cdn.vox-cdn.com/thumbor/jTGkMaegShKJRLeHeep3xhrjXnI=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/69634267/GoodtimeHotel_52.0.jpg",
    },
    {
      url: "https://offloadmedia.feverup.com/secretchicago.com/wp-content/uploads/2021/09/14233610/Alla-Vita-1-1024x554.jpg",
    },
    {
      url: "https://www.granadatile.com/blog/wp-content/uploads/2018/10/Otium-Restaurant-Hexagons-Granada-Cement-Tile.jpg",
    },
    {
      url: "https://buildit.ca/wp-content/uploads/2018/06/inside-picture-mira-restaurant-location-420A-Wellington-St-W-Toronto-ON-M5V-1E3-1-4-720x480.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out effect

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length); // Update index safely
        setFade(true); // Fade-in new image
      }, 1000); // Wait 1 sec before changing image
    }, 5000); // Change image every 5 sec

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <img
      src={images[index].url}
      alt="Slideshow"
      style={{
        height: "100%",
        width: "100%",
        opacity: fade ? 1 : 0,
        transition: "opacity 1s ease-in-out",
      }}
    />
  );
};

export default RandomImage;
