# Certifications

Certifications lists credential cards. Each card has a shared course title, an issuer, and a View Certification link that points off-site.

## Sub-features

- `cert-grid` shows the Certifications heading and the course cards.
- `cert-issuer` exposes IBM on the first card and Databricks on the fourth.
- `cert-link` exposes the view link and its href without leaving the page.

## How to get to it (user POV)

- Choose `Certifications` in the nav, or open `/certifications`.

## Driving it with verify-portfolio

Preconditions:

- `verify.sh doctor` prints `ok`.
- Viewport is 1280×800.
- The browser tab is locked.

- **Open the page.** Choose the nav link `Certifications`, or open `$URL/certifications` if you are proving the direct URL after the click path has already been recorded. The heading is `Certifications`.
- **First card.** The first heading is `Exploratory Data Analysis for Machine Learning`. Its issuer text is `IBM`. Its link name is `View Certification for Exploratory Data Analysis for Machine Learning from IBM`.
- **Fourth card.** The fourth card's issuer text is `Databricks`. Its link name ends in `from Databricks`.
- **Href.** Read the first view link's href. It is `https://example.com/certification`. Do not activate the link.
- **Proof.** Save `artifacts/certifications/grid.aria.txt`, `artifacts/certifications/grid.png`, and `artifacts/certifications/action.txt`. The snapshot includes the page heading, `IBM`, and the View Certification link name.

## Gotchas

- All twelve cards use the same course title. Tell them apart by the link's accessible name, which includes the issuer.
- The issuer is also in the accessibility tree as text, not only inside the link name.
- The view link opens a new tab on a placeholder host. Observing `href` is the proof. Activating it leaves the portfolio.
- Cards fade in on scroll. Scroll the heading into view and wait until the first course title is present before snapshotting.
