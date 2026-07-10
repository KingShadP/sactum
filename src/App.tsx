import { useMemo } from "react";

type NavItem = {
  id: string;
  label: string;
};

type MediaImage = {
  src: string;
  title: string;
};

type MediaVideo = {
  src: string;
  title: string;
};

const navItems: NavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "gallery", label: "Gallery" },
  { id: "video", label: "Video" },
  { id: "contact", label: "Contact" },
];

const imageAssets: MediaImage[] = [
  { src: "/media/image-01.png", title: "Collection 01" },
  { src: "/media/image-02.png", title: "Collection 02" },
  { src: "/media/image-03.png", title: "Collection 03" },
  { src: "/media/image-04.png", title: "Collection 04" },
  { src: "/media/image-05.png", title: "Collection 05" },
  { src: "/media/image-06.png", title: "Collection 06" },
  { src: "/media/image-07.png", title: "Collection 07" },
  { src: "/media/image-08.png", title: "Collection 08" },
  { src: "/media/image-09.png", title: "Collection 09" },
  { src: "/media/image-10.png", title: "Collection 10" },
  { src: "/media/image-11.png", title: "Collection 11" },
  { src: "/media/image-12.png", title: "Collection 12" },
  { src: "/media/image-13.png", title: "Collection 13" },
  { src: "/media/image-14.png", title: "Collection 14" },
  { src: "/media/image-15.png", title: "Collection 15" },
  { src: "/media/image-16.png", title: "Collection 16" },
];

const videoAssets: MediaVideo[] = [
  { src: "/media/video-01.mp4", title: "Feature Film 01" },
  { src: "/media/video-02.mp4", title: "Feature Film 02" },
  { src: "/media/video-03.mp4", title: "Feature Film 03" },
  { src: "/media/video-04.mp4", title: "Feature Film 04" },
];

export default function App() {
  const heroVideo = videoAssets[0];
  const galleryPreview = useMemo(() => imageAssets.slice(0, 8), []);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a href="#overview" className="brand">
          SACTUM
        </a>
        <nav className="topnav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="topnav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="overview" className="section hero">
          <div className="hero-copy">
            <p className="eyebrow">Official Experience</p>
            <h1>Clean, fast, and production-ready presentation.</h1>
            <p>
              The interface now prioritizes clarity, speed, and direct content access. Heavy overlays and cluttered
              controls were replaced with a simple structure optimized for real users.
            </p>
            <div className="hero-actions">
              <a href="#gallery" className="button primary">
                Browse gallery
              </a>
              <a href="#video" className="button ghost">
                Watch videos
              </a>
            </div>
          </div>
          <div className="hero-media">
            <video
              src={heroVideo.src}
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
              aria-label={heroVideo.title}
            />
          </div>
        </section>

        <section id="gallery" className="section">
          <div className="section-head">
            <h2>Image gallery</h2>
            <p>Curated media grid with lazy loading and cleaner hierarchy.</p>
          </div>
          <div className="image-grid">
            {galleryPreview.map((image, index) => (
              <figure key={image.src} className="media-card">
                <img
                  src={image.src}
                  alt={image.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  decoding="async"
                />
                <figcaption>{image.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="video" className="section">
          <div className="section-head">
            <h2>Video library</h2>
            <p>Independent players with metadata preloading to keep initial render light.</p>
          </div>
          <div className="video-grid">
            {videoAssets.map((video, index) => (
              <article key={video.src} className="video-card">
                <video
                  src={video.src}
                  controls
                  preload={index === 0 ? "metadata" : "none"}
                  playsInline
                  className="video-player"
                  aria-label={video.title}
                />
                <h3>{video.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section cta">
          <h2>Built for launch readiness</h2>
          <p>
            Structure, copy hierarchy, and media handling now follow production patterns that scale better and reduce
            user confusion.
          </p>
        </section>
      </main>
    </div>
  );
}
