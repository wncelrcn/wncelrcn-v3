# Project modal

On Projects, a highlight or a listing opens a dialog with the project title, a tech line, a Github link, and a Close project button.

## Sub-features

- `project-highlight` opens Airphabets from a highlight tile.
- `project-listing` opens a To-do List row.
- `project-close` dismisses the dialog and leaves the Projects heading in place.
- `project-see-all` reaches the same page from the homepage link `See all Projects`.

## How to get to it (user POV)

- Choose `Projects` in the nav, or `See all Projects` under Featured Projects on `/`.
- Choose a highlight named `Airphabets`, `Kusho'`, `Tala`, `Rippl`, `SanKa`, or `MindMap`.
- Choose a row named `To-do List`.
- Choose `Close project`, press Escape, or click the dimmed backdrop.

## Driving it with verify-portfolio

Preconditions:

- `verify.sh doctor` prints `ok`.
- Viewport is 1280×800.
- The browser tab is locked.
- Start from `$URL/projects` unless the step says otherwise.

- **See all.** Open `$URL/`, scroll to the heading `Featured Projects`, and choose the link `See all Projects`. The path becomes `/projects` and the heading is `Projects`.
- **Highlight.** Choose the button named `Airphabets` (`aria-haspopup="dialog"`). A dialog appears whose heading is `Airphabets`, with the text `React, Supabase, Gemini` and a link named `Github`. The button `Close project` is present.
- **Confirm the link without leaving.** Read the `Github` href. It is `https://github.com`. Do not activate it.
- **Close.** Choose `Close project`. The dialog and the `Close project` button are gone. The heading `Projects` remains, and `Airphabets` is still a button.
- **Listing.** Choose the button whose accessible name starts with `To-do List` and includes `AI-Powered App`. The dialog heading is `To-do List` and the text `React, Supabase, Gemini` is visible. `AI-Powered App` stays on the row; it is not dialog text. Close it with `Close project`. Snapshot again until the heading is present; the first snapshot can show only `Close project`.
- **Proof.** While the Airphabets dialog is open, save `artifacts/project-modal/airphabets.aria.txt`, `artifacts/project-modal/airphabets.png`, and `artifacts/project-modal/action.txt`. The snapshot shows `Airphabets` and `Close project`.

## Gotchas

- Homepage featured covers are not buttons and have no titles. They do not open a dialog. The homepage path into this feature is `See all Projects`.
- Three listings share a name that starts with `To-do List` and includes the tagline `AI-Powered App` and a blurb. The snapshot marks the duplicates with `nth`. Opening any one shows the heading `To-do List` and the tech line `React, Supabase, Gemini`.
- `Open Next.js Dev Tools` is the dev-server overlay. It is not a project. Do not click it.
- Highlight names are unique. `Kusho'` includes the apostrophe.
- Current projects have no screenshots, so `Previous screenshot` and `Next screenshot` are absent. Do not treat that absence as a failure.
- The dialog animates in. `Close project` is in the accessibility tree as soon as the dialog is open. The heading and tech line start transparent and appear a moment later. Snapshot again until the heading is present.
- `Github` leaves the origin. Observe the href only.
