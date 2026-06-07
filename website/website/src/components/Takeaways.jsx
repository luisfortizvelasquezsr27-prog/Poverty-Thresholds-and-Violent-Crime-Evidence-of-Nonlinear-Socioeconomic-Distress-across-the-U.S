const cards = [
  {
    title: 'Poverty exhibits a nonlinear relationship with violent crime',
    body: 'The linear OLS assumption — that each percentage-point increase in poverty has the same effect — is inconsistent with the data. Crime accelerates sharply past the estimated 16.6% threshold, a pattern captured by XGBoost but missed by OLS.',
  },
  {
    title: 'The 16.6% poverty threshold marks a meaningful break',
    body: 'Communities above this level experience substantially higher predicted violent crime rates than those just below it. This breakpoint is data-driven and consistent across the fixed-width binning and model-based detection approaches.',
  },
  {
    title: 'Poverty matters more than unemployment for county-level crime',
    body: 'SHAP importance rankings place poverty rate at the top among all predictors. Unemployment has a positive, significant association with crime, but its relationship is more gradual and does not exhibit a comparable nonlinear acceleration.',
  },
]

export default function Takeaways() {
  return (
    <section className="section" id="takeaways">
      <div className="container">
        <span className="section__label">Takeaways</span>
        <h2 className="section__title">What this analysis tells us</h2>
        <p className="section__body">
          Three conclusions emerge consistently across OLS, nonlinear specifications,
          and the XGBoost threshold analysis. This is a predictive, correlational study —
          causal claims require additional identification strategy beyond the scope of
          this project.
        </p>

        <div className="takeaways__grid">
          {cards.map((c) => (
            <div key={c.title} className="takeaway-card">
              <div className="takeaway-card__title">{c.title}</div>
              <div className="takeaway-card__body">{c.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
