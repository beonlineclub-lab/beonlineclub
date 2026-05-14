"use client";

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large cyan glow blob */}
      <div
        className="absolute rounded-full animate-float-1 animate-glow-pulse"
        style={{
          width: 480,
          height: 480,
          top: "10%",
          right: "8%",
          background: "radial-gradient(circle, #00F5FF18 0%, #00F5FF06 50%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Purple glow blob */}
      <div
        className="absolute rounded-full animate-float-2 animate-glow-pulse"
        style={{
          width: 360,
          height: 360,
          bottom: "15%",
          left: "5%",
          background: "radial-gradient(circle, #7B2FFF22 0%, #7B2FFF08 50%, transparent 70%)",
          filter: "blur(50px)",
          animationDelay: "1.5s",
        }}
      />

      {/* Small cyan accent top-left */}
      <div
        className="absolute rounded-full animate-float-3"
        style={{
          width: 200,
          height: 200,
          top: "30%",
          left: "12%",
          background: "radial-gradient(circle, #00F5FF10 0%, transparent 70%)",
          filter: "blur(30px)",
          animationDelay: "3s",
        }}
      />

      {/* Floating geometric shape — rotating ring */}
      <div
        className="absolute animate-spin-slow"
        style={{
          width: 320,
          height: 320,
          top: "15%",
          right: "15%",
          border: "1px solid #00F5FF1A",
          borderRadius: "50%",
          boxShadow: "0 0 40px #00F5FF0A",
        }}
      />

      {/* Inner ring */}
      <div
        className="absolute"
        style={{
          width: 200,
          height: 200,
          top: "calc(15% + 60px)",
          right: "calc(15% + 60px)",
          border: "1px solid #7B2FFF22",
          borderRadius: "50%",
          animation: "spin 14s linear infinite reverse",
        }}
      />

      {/* Floating cube wireframe top-left */}
      <div
        className="absolute animate-float-1"
        style={{
          width: 80,
          height: 80,
          top: "20%",
          left: "20%",
          border: "1px solid #00F5FF30",
          transform: "rotate(45deg)",
          animationDelay: "2s",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 12,
            border: "1px solid #00F5FF20",
          }}
        />
      </div>

      {/* Floating diamond bottom-right */}
      <div
        className="absolute animate-float-3"
        style={{
          width: 60,
          height: 60,
          bottom: "25%",
          right: "20%",
          border: "1px solid #7B2FFF40",
          transform: "rotate(45deg)",
          animationDelay: "1s",
        }}
      />

      {/* Neural node dots scattered */}
      {[
        { top: "18%", left: "35%", delay: "0s" },
        { top: "65%", left: "70%", delay: "0.8s" },
        { top: "45%", right: "30%", delay: "1.6s" },
        { top: "78%", left: "25%", delay: "2.4s" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute"
          style={{ ...pos } as React.CSSProperties}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#00F5FF",
              boxShadow: "0 0 8px #00F5FF",
              position: "relative",
            }}
          >
            <div
              className="node-ring"
              style={{
                position: "absolute",
                inset: -4,
                borderRadius: "50%",
                border: "1px solid #00F5FF44",
                animationDelay: pos.delay,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
