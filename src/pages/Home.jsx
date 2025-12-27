import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="headline-label">
            <span className="line"></span>
            <span className="label-text">Jazz Society</span>
            <span className="line"></span>
          </div>

          <h1 className="title">
            <span className="title-line white">Blue Note</span>
            <span className="title-line brass">Sessions</span>
          </h1>

          <p className="intro">
            An intimate gathering of artists, dreamers, and night owls.  
            Where the music breathes and every note tells a story.
          </p>

          <Link to="/artists" className="cta">See Tonight&apos;s Lineup</Link>
        </div>
      </section>

      <section className="philosophy">
        <div className="philosophy-grid">
          <div className="philosophy-item">
            <h3 className="philosophy-title">The Stage</h3>
            <p className="philosophy-text">
              Where legends are born and every performance is a conversation between artist and audience.
            </p>
          </div>
          <div className="philosophy-item">
            <h3 className="philosophy-title">The Sound</h3>
            <p className="philosophy-text">
              Raw, unfiltered, authentic. No backing tracks, no autotune just pure musical expression.
            </p>
          </div>
          <div className="philosophy-item">
            <h3 className="philosophy-title">The Spirit</h3>
            <p className="philosophy-text">
              A community bound by rhythm. We don't just listen to jazz, we live it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}