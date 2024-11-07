import "./Header.css";
export default function Header() {
  return (
    <>
      <div className="header">
        <a href="#default" className="logo">
          <img
            src="/src/assets/latest-transformed.webp"
            alt="app logo"
            width={100}
          />
          <div className="app-name">𝓢𝓹𝓵𝓲𝓽𝓮𝓻𝓪𝓽𝓸𝓻</div>
        </a>
      </div>
    </>
  );
}
