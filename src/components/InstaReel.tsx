// src/components/InstagramReelsGallery.jsx
import { useEffect } from "react";

const InstagramReelsGallery = () => {
  useEffect(() => {
    // Load Instagram embed script (once)
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const reelLinks = [
    "https://www.instagram.com/reel/DECcY8VtO9W/?utm_source=ig_embed&utm_campaign=loading",
    "https://www.instagram.com/reel/DQXRq15CCX2/?utm_source=ig_embed&utm_campaign=loading",
    "https://www.instagram.com/reel/DHH7olYvi9S/?utm_source=ig_embed&utm_campaign=loading",
    "https://www.instagram.com/reel/DFp7eyTtswk/?utm_source=ig_embed&utm_campaign=loading",
  ];

  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-red-600 text-center mb-8">
        Follow Us on Instagram
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {reelLinks.map((link, idx) => (
          <blockquote
            key={idx}
            className="instagram-media rounded-lg overflow-hidden shadow-lg"
            data-instgrm-permalink={link}
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              margin: 1,
              minWidth: 300,
              width: "calc(100%/4 - 16px)",
              maxWidth: 270,
            }}
          ></blockquote>
        ))}
      </div>
    </section>
  );
};

export default InstagramReelsGallery;
