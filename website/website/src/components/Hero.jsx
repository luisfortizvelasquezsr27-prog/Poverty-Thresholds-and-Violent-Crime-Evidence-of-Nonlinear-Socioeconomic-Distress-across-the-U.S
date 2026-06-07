export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <p className="hero__eyebrow">QSS 45 &nbsp;·&nbsp; Dartmouth College &nbsp;·&nbsp; 2025</p>
        <h1 className="hero__title">
          Socioeconomic Distress<br />and Violent Crime
        </h1>
        <p className="hero__subtitle">
          Do poverty and unemployment predict violent crime at a constant rate — or does
          crime accelerate once U.S. counties cross critical socioeconomic thresholds?
        </p>
        <div className="hero__stat">
          <span className="hero__stat-number">16.6%</span>
          <span className="hero__stat-label">
            Poverty rate at which predicted violent crime begins to accelerate
            substantially across U.S. counties
          </span>
        </div>
      </div>
    </section>
  )
}
