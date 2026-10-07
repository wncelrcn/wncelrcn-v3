# Site navigation

The sticky nav sends a visitor home, to Projects, to Certifications, and to the Awards placeholder. On a narrow screen those links sit behind an Open menu button.

## Sub-features

- `nav-home` shows the hero on `/`.
- `nav-desktop` opens Projects, Certifications, and Awards from the inline links.
- `nav-brand` returns home from an inner page via `Wince Larcen`.
- `nav-mobile` opens the same three destinations from the menu button.

## How to get to it (user POV)

- Load `/`.
- Choose `Projects`, `Certifications`, or `Awards` in the desktop nav.
- Choose `Wince Larcen` to return home.
- On a narrow viewport, choose `Open menu`, then one of those links.

## Driving it with verify-portfolio

Preconditions:

- `verify.sh doctor` prints `ok` and a URL. Call that origin `$URL`.
- Desktop steps use `Emulation.setDeviceMetricsOverride` at 1280×800. The mobile step uses 390×844.
- The browser tab is locked.

- **Home.** Open `$URL/`. The link `Wince Larcen` is present, and the heading text includes `I`, `turn`, and `use.` after the hero entrance finishes.
- **Desktop Projects.** Choose the link named `Projects`. The path becomes `/projects` and the heading is `Projects`.
- **Desktop Certifications.** From the nav, choose `Certifications`. The path becomes `/certifications` and the heading is `Certifications`.
- **Desktop Awards.** Choose `Awards`. The path becomes `/awards`, the heading is `Awards`, and the page includes `coming soon`.
- **Brand.** From `/awards`, choose `Wince Larcen`. The path becomes `/` and the hero heading is back.
- **Mobile menu.** Set the viewport to 390×844, reload `$URL/`, and choose the button `Open menu` (`aria-expanded` becomes true). Choose `Projects`. The path becomes `/projects` and the heading is `Projects`. The button name returns to `Open menu` after the menu closes.
- **Proof.** After the Projects click, save `artifacts/navigation/projects.aria.txt`, `artifacts/navigation/projects.png`, and `artifacts/navigation/action.txt`. The snapshot includes the `Projects` link and the `Projects` heading.

## Gotchas

- Below 768px the inline links are not shown. The control is the button `Open menu`, then `Close menu` while the panel is open.
- At 768px and above the menu button is not shown. Do not fail desktop proof because that button is absent.
- The brand name in the nav is `Wince Larcen`, not the full document title.
- The current route is underlined. That style is not a separate control.
- `/awards` is a placeholder with the coming-soon sentence. It is not a 404.
- Hero words start transparent. Wait until `use.` is visible before calling the home screen proved.
- A nav click updates the URL a moment later. Snapshot again until the path and heading match. The first snapshot can still show the previous page.
- `Open Next.js Dev Tools` is the dev-server overlay. It is not part of the portfolio. Do not click it.
