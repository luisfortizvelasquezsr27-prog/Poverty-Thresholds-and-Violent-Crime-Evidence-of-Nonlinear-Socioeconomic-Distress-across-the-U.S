export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__name">Luis Ortiz Velasquez</div>
        <div className="footer__meta">Dartmouth College &nbsp;·&nbsp; QSS 45 Final Project &nbsp;·&nbsp; 2025</div>
        <div className="footer__meta" style={{ marginTop: '4px' }}>
          Data: FBI UCR &amp; ACS 2023 &nbsp;·&nbsp; Analysis: OLS, Random Forest, XGBoost, SHAP
        </div>
      </div>
    </footer>
  )
}
