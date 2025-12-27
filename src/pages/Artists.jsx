import { useEffect, useState } from 'react';

export default function Artists() {
  const [artists, setArtists] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        setStatus('loading');
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();
        setArtists(data);
        setStatus('idle');
      } catch {
        setStatus('error');
      }
    };

    fetchArtists();
  }, []);

  return (
    <section className="artists">
      <h2 className="section-title">Tonight’s Featured Artists</h2>

      {status === 'loading' && (
        <div className="list-note">Tuning up the room…</div>
      )}

      {status === 'error' && (
        <div className="list-note error">
          Couldn’t fetch the lineup. Try refreshing in a moment.
        </div>
      )}

      <div className="artist-grid">
        {artists.map((a) => (
          <article
            key={a.id}
            className="artist-card"
            aria-label={`${a.name}, featured artist`}
          >
            <header className="card-header">
              <span className="artist-name">{a.name}</span>
              <span className="artist-tag">@{a.username}</span>
            </header>

            <div className="card-body">
              <div className="card-line">
                <span className="label">Email</span>
                <span className="value">{a.email}</span>
              </div>
              <div className="card-line">
                <span className="label">City</span>
                <span className="value">{a.address?.city}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}