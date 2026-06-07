export default function Results() {
  return (
    <section className="section section--alt" id="results">
      <div className="container">
        <span className="section__label">Results</span>
        <h2 className="section__title">A poverty threshold emerges at 16.6%</h2>

        <div className="results__finding">
          <span className="results__finding-icon">◆</span>
          <div>
            <div className="results__finding-title">Central finding</div>
            <div className="results__finding-body">
              XGBoost-predicted violent crime accelerates substantially once county poverty
              rates exceed approximately <strong>16.6%</strong>. Counties above this threshold
              show meaningfully higher predicted crime than those just below it — a pattern
              not captured by linear OLS models.
            </div>
          </div>
        </div>

        {/* Primary figures — full width */}
        <div className="results__figure">
          <span className="results__figure-label">Figure 1 — Primary finding</span>
          <img
            className="results__figure-img"
            src="/figures/poverty_threshold_curve.png"
            alt="Poverty threshold curve showing predicted violent crime accelerating past 16.6% poverty rate"
          />
          <p className="results__figure-caption">
            <strong>Poverty threshold curve.</strong> Bars show mean observed violent crime
            rate per poverty-rate bin. The dashed line shows XGBoost predictions. The vertical
            marker indicates the estimated threshold (≈ 16.6%) where predicted crime begins to
            accelerate — identified by a slope increase exceeding 1.5× the average rate of change.
          </p>
        </div>

        <div className="results__figure">
          <span className="results__figure-label">Figure 2 — Unemployment relationship</span>
          <img
            className="results__figure-img"
            src="/figures/unemployment_threshold_curve.png"
            alt="Unemployment threshold curve showing a more gradual relationship with violent crime"
          />
          <p className="results__figure-caption">
            <strong>Unemployment threshold curve.</strong> Unlike poverty, the unemployment–crime
            relationship is more gradual and monotonic. While unemployment carries a positive and
            statistically significant OLS coefficient, no sharp acceleration point is detected,
            suggesting a more linear pattern across the observed range.
          </p>
        </div>

        {/* Secondary figures — two columns */}
        <div className="results__secondary">
          <div className="results__figure">
            <span className="results__figure-label">Figure 3 — Model comparison</span>
            <img
              className="results__figure-img"
              src="/figures/model_comparison.png"
              alt="Bar chart comparing out-of-sample R² across Linear Regression, Random Forest, and XGBoost"
            />
            <p className="results__figure-caption">
              <strong>Out-of-sample R² comparison.</strong> XGBoost achieves the highest test-set R²,
              confirming that nonlinear structure is present in the data.
            </p>
          </div>

          <div className="results__figure">
            <span className="results__figure-label">Figure 4 — Feature importance</span>
            <img
              className="results__figure-img"
              src="/figures/shap_importance.png"
              alt="Bar chart of mean absolute SHAP values showing poverty rate as the top predictor"
            />
            <p className="results__figure-caption">
              <strong>SHAP feature importance.</strong> Poverty rate ranks as the most important
              predictor by mean absolute SHAP value, followed by median household income.
            </p>
          </div>
        </div>

        {/* Supporting bullets */}
        <div className="results__bullets">
          <div className="results__bullet">
            Poverty is the strongest individual predictor of violent crime across U.S.
            counties, outranking unemployment in SHAP importance rankings.
          </div>
          <div className="results__bullet">
            XGBoost outperforms OLS out-of-sample, confirming that nonlinear interactions
            between predictors contribute meaningfully to county-level crime variation.
          </div>
          <div className="results__bullet">
            Unemployment shows a positive, statistically significant linear association
            with crime, but no sharp tipping point comparable to poverty's 16.6% threshold.
          </div>
        </div>
      </div>
    </section>
  )
}
