# Portfolio

Personal site of Wince Larcen Rivano. The homepage About block is the source of professional history shown to visitors.

## Language

**About section**:
The homepage block with avatar, greeting, role line, and three tabs.
_Avoid_: About page (that implies a separate route)

**About Me**:
The first tab in the About section, and the default selected tab. Currently empty until a Figma frame exists; the tab still ships so the body can be filled later.
_Avoid_: bio, bio tab

**Work Experience**:
The second tab: company-grouped roles matching Figma Desktop - 4 (`38:158`).
_Avoid_: timeline, jobs list

**Education**:
The third tab: school-grouped programs matching Figma Desktop - 4 (`4:150`). For now that is Mapúa Malayan Colleges Laguna only.
_Avoid_: academics, school tab, student orgs (ACM, JPCS)

**Company**:
An employer grouping on Work Experience: placeholder logo, name, then one or more roles.
_Avoid_: job, timeline row

**Role**:
A job under a Company. Title in sans, then a serif-italic meta line (`period • location • type`).
_Avoid_: job title, position

**Institution**:
A school grouping on Education: placeholder logo, name, then one or more programs.
_Avoid_: school, university (as a layout term)

**Program**:
A degree or course of study under an Institution, with optional italic highlight bullets.
_Avoid_: major, course

**Placeholder logo**:
The Lucide stand-in until the real mark is dropped in. 50×50 `Building2` for a Company, 50×50 `GraduationCap` for an Institution, and a small glyph in the name pill for a Project highlight.
_Avoid_: brand icon, company icon (until the real file exists)

**Project**:
A software case study. Every Project appears on the Projects page.
_Avoid_: featured card, project card (as a layout term — use **Project highlight** or **Project listing**)

**Projects page**:
The `/projects` route. It lists every software Project.
_Avoid_: project archive, work page

**Project highlight**:
A named tile on the Projects page (preview well + name pill). Currently six: Airphabets, Kusho', Tala, Rippl, SanKa, MindMap.
_Avoid_: featured project, featured card (those names belong to the homepage section)

**Project listing**:
A wide row on the Projects page for a Project that is not a highlight (title, Tagline, Blurb, arrow). Placeholder listings follow the Figma “To-do List” rows until real Projects replace them.
_Avoid_: other project, archive row, non-featured, empty listing

**Featured Projects**:
The homepage section with five blank cards. Those cards will later show a cover picture, and they are a different design from a Project highlight. Its count stays five even though the Projects page has six Project highlights.
_Avoid_: using this name for the six tiles on the Projects page

**Project modal**:
The overlay opened from a Project on the Projects page. Left: name, tech stack, extended description, optional Project links. Right: a carousel of Project media.
_Avoid_: project page, case study page, dialog

**Tagline**:
The italic line on a Project listing. A short read on what kind of project or app it is.
_Avoid_: kind, category, tech stack

**Blurb**:
The short regular paragraph on a Project listing, under the Tagline.
_Avoid_: extended description, summary, bio

**Tech stack**:
The italic line in the Project modal that lists the tools used.
_Avoid_: tags, skills, tagline

**Extended description**:
The body copy in the Project modal. Distinct from the Blurb on a Project listing.
_Avoid_: bio, summary, blurb

**Project link**:
An optional outbound URL on a Project. Kinds include GitHub, live site, Figma, slides, PDF, Colab, and others as needed. Omit a kind when that Project has none.
_Avoid_: href, social link (footer)

**Project media**:
A screenshot or mockup in the Project modal carousel.
_Avoid_: cover picture (that belongs to Featured Projects)

## Relationships

- The **About section** contains exactly three tabs: **About Me**, **Work Experience**, **Education**
- **About Me** has no designed body yet; it is still the default tab
- Visitors land on **About Me**, then can switch to **Work Experience** or **Education**
- **Work Experience** and **Education** share a grouped layout (logo + name, then entries) but are distinct tabs
- **Education** currently contains one Institution; ACM and JPCS are not Education entries
- A **Company** has one or more **Roles**; an **Institution** has one or more **Programs**
- Each **Company** and **Institution** uses a **Placeholder logo** until the real mark is provided
- Every **Project** appears on the **Projects page**
- Six **Projects** are **Project highlights**; the rest are **Project listings**
- A **Project** is either a **Project highlight** or a **Project listing**, not both
- Each **Project highlight** uses a **Placeholder logo** until the real mark is provided
- **Project listings** currently follow the Figma “To-do List” placeholder rows
- **Featured Projects** on the homepage is five blank cover cards, independent of the six **Project highlights**
- A **Featured Projects** card and a **Project highlight** are different visuals; they do not share a tile
- Clicking a **Project highlight** or a **Project listing** opens its **Project modal**, not a new route
- A **Project listing** shows title, **Tagline**, and **Blurb**; the **Project modal** shows **Tech stack** and **Extended description**
- A **Tagline** is not a **Tech stack**; a **Blurb** is not an **Extended description**
- A **Project modal** may include zero or more **Project links** and **Project media**
- Until real copy exists, a **Project** may ship with placeholder **Tagline**, **Blurb**, **Tech stack**, **Extended description**, **Project links**, and **Project media**; swapping those fields later must not require layout changes

## Example dialogue

> **Dev:** "Should **About Me** show a placeholder bio until the Figma frame is ready?"
> **Domain expert:** "No. Keep **About Me** blank. Copy **Work Experience** and **Education** from the frames; don't invent **About Me** copy."
>
> **Dev:** "The data file also has ACM and JPCS under Education. Keep them?"
> **Domain expert:** "No. Follow the frame. Drop ACM and JPCS from **Education** for now."
>
> **Dev:** "Default tab is **Work Experience** so nobody lands on empty **About Me**?"
> **Domain expert:** "No. Default to **About Me**. I'll fill that tab; implement it in code first."
>
> **Dev:** "Should we download the Figma org marks now?"
> **Domain expert:** "No. Use **Placeholder logos** until I drop in the real files."
>
> **Dev:** "Homepage **Featured Projects** has five slots and the **Projects page** has six **Project highlights**. Unify the count?"
> **Domain expert:** "No. Keep five on the homepage and six highlights on the **Projects page**. The homepage is a subset, not a mirror."
>
> **Dev:** "Fill the **Project listings** with the Figma 'To-do List' copy?"
> **Domain expert:** "Yes, those rows are placeholders. Keep the Figma listing layout and dummy copy until real Projects replace them. They still open the **Project modal**."
>
> **Dev:** "Reuse the **Project highlight** tile for homepage **Featured Projects** so the five slots match?"
> **Domain expert:** "No. Keep the old blank cards on the homepage. Those get cover pictures later. **Project highlights** are a different tile on the **Projects page**."
>
> **Dev:** "Should a **Project** click go to `/projects/[slug]`?"
> **Domain expert:** "No. Open the **Project modal**. Links live inside it, and only the ones that Project actually has. Both **Project highlights** and **Project listings** use that modal."
>
> **Dev:** "Reuse the listing italic 'AI-Powered App' as the **Tech stack** in the **Project modal**?"
> **Domain expert:** "No. That line is the **Tagline**, a brief read on what kind of app it is. **Tech stack** in the modal is the specific tools."
>
> **Dev:** "Is the listing paragraph the same as the **Extended description**?"
> **Domain expert:** "No. That paragraph is the **Blurb**. The modal body is the **Extended description**."
>
> **Dev:** "Leave **Project highlight** modals title-only until real copy exists?"
> **Domain expert:** "No. Use placeholder **Tech stack**, **Extended description**, **Project links**, and **Project media** too. Keep it data-driven so filling real Projects is an edit to the records, not the layout."

## Flagged ambiguities

- "About" was used for both the homepage section and the first tab — resolved: **About section** vs **About Me**.
- "Education" was used to include student orgs (ACM, JPCS) — resolved: **Education** is the degree/program frame only; those orgs are out until designed elsewhere.
- "Featured" was used for both the homepage five-slot section and the six named tiles on `/projects` — resolved: **Featured Projects** is homepage-only; the six tiles are **Project highlights**.
- Project `href` was a single destination — resolved: a **Project** opens a **Project modal**; outbound URLs are **Project links** of optional kinds.
- Listing italic vs modal italic — resolved: **Tagline** on the listing, **Tech stack** in the modal. They are not the same field.
- Listing body vs modal body — resolved: **Blurb** on the listing, **Extended description** in the modal. They are not the same field.
- Highlight modal day-one copy — resolved: placeholder fields are allowed on **Project highlights** too; configuration lives on the **Project** record.
