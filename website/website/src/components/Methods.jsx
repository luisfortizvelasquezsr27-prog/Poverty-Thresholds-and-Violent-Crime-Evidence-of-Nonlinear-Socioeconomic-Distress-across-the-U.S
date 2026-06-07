const steps = [
  {
    num: '01',
    title: 'OLS Regression (Baseline)',
    desc: 'Linear OLS with HC3 heteroskedasticity-robust standard errors. Establishes direction and magnitude of each predictor, assuming a constant marginal effect across the full range.',
  },
  {
    num: '02',
    title: 'Nonlinear OLS Specifications',
    desc: 'Quadratic and quintile-bin models for unemployment. Lower AIC/BIC than the linear baseline confirms that the relationship is not constant-marginal across all counties.',
  },
  {
    num: '03',
    title: 'Random Forest',
    desc: '500-tree ensemble with depth and leaf-size constraints. Captures complex feature interactions and nonlinear patterns that OLS cannot represent directly.',
  },
  {
    num: '04',
    title: 'XGBoost',
    desc: 'Gradient-boosted trees with regularization (λ = 5). Achieves the highest out-of-sample R² and serves as the primary model for threshold analysis.',
  },
  {
    num: '05',
    title: 'SHAP Values',
    desc: 'Shapley Additive Explanations decompose each XGBoost prediction into per-feature contributions. Used to rank predictors by mean absolute impact across all test-set counties.',
  },
  {
    num: '06',
    title: 'Threshold Detection',
    desc: 'Counties are grouped into narrow fixed-width bins. A threshold is flagged when the slope of predicted crime vs. the predictor accelerates by more than 1.5× the average rate of change.',
  },
]

export default function Methods() {
  return (
    <section className="section" id="methods">
      <div className="container">
        <span className="section__label">Methods</span>
        <h2 className="section__title">From linear baseline to nonlinear threshold detection</h2>
        <p className="section__body">
          We move from a simple OLS benchmark through increasingly flexible models, ending
          with a data-driven search for the poverty and unemployment levels at which the
          crime relationship changes most sharply.
        </p>

        <div className="methods__steps">
          {steps.map((s) => (
            <div key={s.num} className="method-card">
              <div className="method-card__num">Step {s.num}</div>
              <div className="method-card__title">{s.title}</div>
              <div className="method-card__desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
