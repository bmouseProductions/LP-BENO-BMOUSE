import React, { useEffect, useState } from "react";

const ScrollGradientBackground: React.FC = () => {
  const [gradientOpacity, setGradientOpacity] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const scrollPercent =
        (scrollTop / (scrollHeight - window.innerHeight)) * 100;

      // Ajuste para tornar o início mais escuro e ir clareando
      const startOpacity = 0; // Opacidade inicial (começa totalmente escuro)
      const endOpacity = 1; // Opacidade máxima (totalmente claro)
      const adjustedOpacity =
        startOpacity + (scrollPercent / 100) * (endOpacity - startOpacity);

      // Atualiza o estado da opacidade
      setGradientOpacity(adjustedOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
        background: `linear-gradient(to bottom, rgba(0, 0, 0, ${gradientOpacity}), rgba(0, 179, 179, ${gradientOpacity}))`,
      }}
    />
  );
};

export default ScrollGradientBackground;
