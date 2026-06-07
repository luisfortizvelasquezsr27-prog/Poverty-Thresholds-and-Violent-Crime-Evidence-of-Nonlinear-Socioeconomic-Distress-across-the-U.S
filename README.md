# Poverty Thresholds and Violent Crime: Evidence of Nonlinear Socioeconomic Distress Across the United States

## Overview

<table>
  <tr>
    <td align="center">
      <img src="output/poverty_threshold_curve.png" width="450"><br>
      <b>Poverty Threshold (16.6%)</b>
    </td>
    <td align="center">
      <img src="output/unemployment_threshold_curve.png" width="450"><br>
      <b>Unemployment Relationship</b>
    </td>
  </tr>
</table>

This project investigates whether the two most correlated variables with crime, poverty and unemployment, influence violent crime at a constant rate across U.S. counties or whether threshold effects arise when communities reach sufficiently high levels of socioeconomic distress.

For this purpose, I use county-level crime data and socioeconomic indicators from the American Community Survey (ACS), and then compare traditional econometric models with machine learning approaches to identify nonlinear relationships and potential tipping points.

The central finding is that poverty exhibits a threshold effect around **16.6%**, beyond which predicted violent crime rates increase substantially more rapidly. Unemployment, however, displays a positive but more gradual relationship with crime.

## Research Question

> Do poverty and unemployment predict violent crime at a constant rate, or do threshold effects emerge once counties reach sufficiently high levels of socioeconomic distress?

## Data Sources

### Crime Data
- FBI Uniform Crime Reporting (UCR) Program
- County-level violent crime rates per 100,000 residents

### Socioeconomic Data
- American Community Survey (ACS) 2023
- Poverty rate
- Unemployment rate
- Median household income
- Educational attainment

### Final Sample
- 3,123 U.S. counties

## Methods

## Methods

I begin the analysis with Ordinary Least Squares (OLS) regression to establish a baseline relationship between poverty, unemployment, and violent crime, and although OLS provides interpretable coefficients, it assumes that these relationships are linear and constant across counties.

Now, to evaluate whether this assumption is appropriate, I estimate nonlinear OLS specifications and then apply Random Forest and XGBoost models, which can capture more complex patterns like nonlinear relationships. 

Finally, I use SHAP values to identify the most important predictors of violent crime and conduct threshold detection analysis to determine whether poverty or unemployment exhibit evidence of socioeconomic tipping points.

## Main Findings

- Poverty is the strongest predictor of county-level violent crime.
- Machine learning models outperform linear regression in predictive accuracy.
- A poverty threshold emerges at approximately **16.6%**.
- Counties above this threshold experience substantially higher predicted violent crime rates.
- Unemployment is positively associated with crime but does not exhibit a comparable breakpoint.

## Repository Structure

```text
## Repository Structure

```text
.
├── code/
│   ├── 01_data_preprocessing.py
│   ├── 02_workflow_eda.py
│   └── 03_analysis.py
│
├── data/
│   ├── raw/
│   └── processed/
│
├── output/
│   ├── crime_hist.png
│   ├── ols_coefficients.png
│   ├── model_comparison.png
│   ├── shap_importance.png
│   ├── poverty_threshold_curve.png
│   └── unemployment_threshold_curve.png

```

## Key Results

### Model Performance

| Model | Test R² |
|---------|---------|
| OLS | 0.101 |
| Random Forest | 0.197 |
| XGBoost | 0.207 |


### Poverty Threshold

- Estimated threshold: **16.6% poverty**
- Predicted crime rates increase sharply beyond this level
- Evidence of a nonlinear relationship between poverty and violent crime


## Author

Luis Ortiz Velasquez  
Dartmouth College  
QSS 45 – AI and Machine Learning for Social Science
