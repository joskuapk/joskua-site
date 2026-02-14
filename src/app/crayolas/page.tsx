"use client";

import { useRef, useState } from "react";

export default function CrayolasPage() {
  const [accepted, setAccepted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleYes = () => {
    setAccepted(true);

    if (audioRef.current) {
      const audio = audioRef.current;
      audio.currentTime = 55;
      audio.volume = 0;
      audio.play();

      const fade = setInterval(() => {
        if (audio.volume < 1) {
          audio.volume = Math.min(audio.volume + 0.05, 1);
        } else {
          clearInterval(fade);
        }
      }, 200);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <img
        src="https://i.pinimg.com/originals/2a/2b/23/2a2b23d8700f9a42f30a53583d55ba8e.jpg"
        alt="San Valentin"
        style={{
          maxWidth: "350px",
          borderRadius: "16px",
          marginBottom: "30px",
        }}
      />

      {!accepted ? (
        <>
          <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
            ¿Monquiña quieres ser mi San Valentín? 💖
          </h1>

          <div style={{ display: "flex", gap: "20px" }}>
            <button
              onClick={handleYes}
              style={{
                padding: "12px 20px",
                fontSize: "16px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                backgroundColor: "#ff4d6d",
                color: "white",
              }}
            >
              Sí mi amor 🥰
            </button>

            <button
              onMouseEnter={(e) => {
                const button = e.currentTarget;
                button.style.position = "absolute";
                button.style.top = Math.random() * 80 + "%";
                button.style.left = Math.random() * 80 + "%";
              }}
              style={{
                padding: "12px 20px",
                fontSize: "16px",
                borderRadius: "12px",
                border: "1px solid #ccc",
                cursor: "pointer",
                backgroundColor: "white",
              }}
            >
              no
            </button>
          </div>
        </>
      ) : (
        <h1 style={{ fontSize: "32px", color: "#ff4d6d" }}>
          Sabía que dirías que sí 💘✨
        </h1>
      )}
      <audio ref={audioRef} src="/audio/romantic-waltz.mp3" />
    </main>
  );
}
