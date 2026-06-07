export default function ResearchQuestion() {
  return (
    <section className="section" id="question">
      <div className="container">
        <span className="section__label">Research Question</span>
        <h2 className="section__title">What drives violent crime across U.S. counties?</h2>

        <blockquote className="rq__quote">
          Do poverty and unemployment predict violent crime at a constant rate, or does
          crime increase more rapidly once counties reach sufficiently high levels of
          socioeconomic distress?
        </blockquote>

        <p className="section__body">
          A large body of research links socioeconomic conditions to crime, but most studies
          assume the relationship is linear — a one-percentage-point increase in poverty
          or unemployment carries the same effect at every level. This project tests whether
          that assumption holds. Using county-level data for over 3,000 U.S. counties, we
          ask whether there exist <em>threshold effects</em>: critical points past which
          concentrated disadvantage is associated with sharply higher violent crime rates.
        </p>
      </div>
    </section>
  )
}
