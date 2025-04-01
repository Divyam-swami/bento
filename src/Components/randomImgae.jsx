import React, { useEffect, useState } from "react";

const RandomImage = () => {
  const [path, setPath] = useState("");
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
    let index = 0;
    setPath(images[index].url);

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        index = (index + 1) % images.length;
        setPath(images[index].url);
        setFade(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={path}
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
