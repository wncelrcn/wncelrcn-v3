# About tabs

On the homepage, About Me, Work Experience, and Education swap one panel. About Me is showing when the page loads.

## Sub-features

- `about-me` shows the intro and names GoTymeX and Neko Labs.
- `about-work` lists each role, including AI Engineer at GoTymeX and AI Engineer Rookie at GoTyme Bank.
- `about-education` shows the Mapúa Malayan Colleges Laguna program.

## How to get to it (user POV)

- Load `/` and move to the About section, or open `/#about`.
- Choose `About Me`, `Work Experience`, or `Education`.

## Driving it with verify-portfolio

Preconditions:

- `verify.sh doctor` prints `ok`.
- Viewport is 1280×800.
- The browser tab is locked.

- **Reach the section.** Open `$URL/#about`. Scroll the group named `About` into view. The buttons `About Me`, `Work Experience`, and `Education` are visible. `About Me` has `aria-pressed` true.
- **About Me.** Choose `About Me` if it is not already pressed. The panel includes `thinks like a designer` and the link text `GoTymeX`. Its `href` is `https://www.gotyme.com/gotyme-x`.
- **Work Experience.** Choose `Work Experience`. `aria-pressed` is true on that button and false on `About Me`. The panel shows `GoTymeX`, `AI Engineer`, `GoTyme Bank`, and `Neko Labs`. The About Me sentence `thinks like a designer` is gone.
- **Education.** Choose `Education`. The panel shows `Mapúa Malayan Colleges Laguna` and `BS in Computer Science with Specialization in Machine Learning`. The role `AI Engineer` from the work panel is gone.
- **Proof.** Save `artifacts/about/education.aria.txt`, `artifacts/about/education.png`, and `artifacts/about/action.txt` while Education is the pressed tab and the program title is visible.

## Gotchas

- The tabs are a `group` named `About` with `aria-pressed` buttons. There is no `tablist`.
- About Me lines start at opacity 0 until the section is on screen. Scroll it into view and wait for `thinks like a designer` in the snapshot and in the screenshot.
- `GoTymeX` is a link that opens a new tab. Read its `href`. Do not activate it.
- Only one panel is mounted. Proving Work Experience does not prove Education.
