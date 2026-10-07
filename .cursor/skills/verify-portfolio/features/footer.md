# Footer

Every page ends with social profiles, an email link, and a copyright line.

## Sub-features

- `footer-socials` lists LinkedIn, GitHub, Instagram, and TikTok with their off-site hrefs.
- `footer-email` shows the mailto address.
- `footer-copy` shows the 2026 copyright line.

## How to get to it (user POV)

- Scroll to the bottom of any page.
- The footer heading is `Thanks for stopping by!`.

## Driving it with verify-portfolio

Preconditions:

- `verify.sh doctor` prints `ok`.
- Viewport is 1280×800.
- The browser tab is locked.
- Start from `$URL/` after the nav proof, or from the page you are already verifying. The footer is the same on each route.

- **Reach it.** Scroll until the heading `Thanks for stopping by!` is visible.
- **Socials.** The links `Wince Larcen Rivano`, `wncelrcn`, `wince.lrcn`, and `wncelrcn_dev` are present. Their hrefs are `https://www.linkedin.com/in/wincelarcen`, `https://github.com/wncelrcn`, `https://www.instagram.com/wince.lrcn`, and `https://www.tiktok.com/@wncelrcn_dev`. Do not activate them.
- **Email.** The link text is `rivanowincelarcen@gmail.com` and the href is `mailto:rivanowincelarcen@gmail.com`. Do not activate it.
- **Copyright.** The footer includes `© Wince Larcen Rivano 2026. All Rights Reserved.`
- **Proof.** Save `artifacts/footer/footer.aria.txt`, `artifacts/footer/footer.png`, and `artifacts/footer/action.txt` with the heading and the email visible.

## Gotchas

- Social and email links leave the page or the browser. Read `href`. Do not click through.
- The footer is below the fold. A viewport screenshot of the hero does not prove it.
- `Wince Larcen Rivano` in the footer is the LinkedIn link. `Wince Larcen` in the nav is the home link. Do not confuse them.
