type MediaVideo = {
  src: string;
  title: string;
  tag: string;
};

const navItems = ["All", "Music", "Films", "Drops"];

const videoAssets: MediaVideo[] = [
  { src: "/media/video-01.mp4", title: "Sanctum Feature 01", tag: "Featured" },
  { src: "/media/video-02.mp4", title: "Sanctum Feature 02", tag: "New" },
  { src: "/media/video-03.mp4", title: "Sanctum Feature 03", tag: "Trending" },
  { src: "/media/video-04.mp4", title: "Sanctum Feature 04", tag: "Archive" },
];

export default function App() {
  const heroVideo = videoAssets[0];

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand-wrap">
          <span className="brand-mark" aria-hidden="true">
            S
          </span>
          <strong>SACTUM</strong>
        </div>

        <nav className="main-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item} href="#catalog">
              {item}
            </a>
          ))}
        </nav>

        <label className="search" aria-label="Search">
          <input type="search" placeholder="Search releases..." />
        </label>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Official Storefront</p>
            <h1>Premium digital catalog with a clear, production-grade experience.</h1>
            <p>
              The page is rebuilt for clarity: lighter UI, faster loading, and no unwanted third-party branding.
              Approved media is presented in one clean flow.
            </p>
            <div className="hero-actions">
              <a href="#catalog" className="button primary">
                Explore catalog
              </a>
              <a href="#newsletter" className="button ghost">
                Join newsletter
              </a>
            </div>
            <ul className="hero-metrics">
              <li>
                <strong>Fast load</strong>
                <span>Video metadata strategy</span>
              </li>
              <li>
                <strong>Clear IA</strong>
                <span>Single navigation system</span>
              </li>
              <li>
                <strong>Brand-safe</strong>
                <span>No external storefront labels</span>
              </li>
            </ul>
          </div>

          <article className="hero-media">
            <video
              src={heroVideo.src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="hero-video"
              aria-label={heroVideo.title}
            />
            <div className="hero-media-meta">
              <p>{heroVideo.tag}</p>
              <h2>{heroVideo.title}</h2>
            </div>
          </article>
        </section>

        <section id="catalog" className="catalog">
          <div className="section-head">
            <h2>Video catalog</h2>
            <p>Curated media tiles with reduced noise and better readability.</p>
          </div>

          <div className="video-grid">
            {videoAssets.map((video, index) => (
              <article className="video-card" key={video.src}>
                <video
                  src={video.src}
                  controls
                  preload={index < 2 ? "metadata" : "none"}
                  playsInline
                  className="video-player"
                  aria-label={video.title}
                />
                <div className="video-meta">
                  <span>{video.tag}</span>
                  <h3>{video.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="newsletter" className="newsletter">
          <div>
            <p className="eyebrow">Newsletter</p>
            <h2>Get release updates first.</h2>
            <p>Receive drop alerts and official announcements without platform clutter.</p>
          </div>
          <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Email address" aria-label="Email address" />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </main>
    </div>
  );
}
