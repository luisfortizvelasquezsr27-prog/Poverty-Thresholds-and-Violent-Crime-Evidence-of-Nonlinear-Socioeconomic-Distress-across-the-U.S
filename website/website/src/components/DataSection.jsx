export default function DataSection() {
  return (
    <section className="section section--alt" id="data">
      <div className="container">
        <span className="section__label">Data</span>
        <h2 className="section__title">County-level crime and socioeconomic data</h2>
        <p className="section__body">
          Two nationally representative datasets are merged on 5-digit FIPS county codes,
          producing a cross-sectional sample covering virtually all U.S. counties.
        </p>

        <div className="data__grid">
          <div className="data__stat">
            <div className="data__stat-number">3,123</div>
            <div className="data__stat-label">U.S. counties in final sample</div>
          </div>
          <div className="data__stat">
            <div className="data__stat-number">2023</div>
            <div className="data__stat-label">Reference year for all ACS variables</div>
          </div>
          <div className="data__stat">
            <div className="data__stat-number">235</div>
            <div className="data__stat-label">Mean violent crimes per 100,000 residents</div>
          </div>
          <div className="data__stat">
            <div className="data__stat-number">14.5%</div>
            <div className="data__stat-label">Mean county poverty rate</div>
          </div>
        </div>

        <div className="data__sources">
          <div className="data__source">
            <div className="data__source-title">FBI Uniform Crime Reporting (UCR)</div>
            <div className="data__source-desc">
              County-level violent crime counts converted to rates per 100,000 residents.
              Outcome variable: <code>crime_rate_per_100,000</code>.
            </div>
          </div>
          <div className="data__source">
            <div className="data__source-title">American Community Survey (ACS) 2023</div>
            <div className="data__source-desc">
              Unemployment, poverty, household income, and educational attainment at the
              county level. Merged from USDA ERS public-use files.
            </div>
          </div>
        </div>

        <div className="data__variables">
          <h3>Key predictors</h3>
          <ul className="data__var-list">
            <li>Poverty rate (all ages)</li>
            <li>Unemployment rate</li>
            <li>Median household income</li>
            <li>% adults without HS diploma</li>
            <li>% adults with bachelor's degree or higher</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
