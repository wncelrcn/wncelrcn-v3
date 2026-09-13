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
The 50×50 Lucide stand-in (`Building2` for a Company, `GraduationCap` for an Institution) until the real mark is dropped in.
_Avoid_: brand icon, company icon (until the real file exists)

## Relationships

- The **About section** contains exactly three tabs: **About Me**, **Work Experience**, **Education**
- **About Me** has no designed body yet; it is still the default tab
- Visitors land on **About Me**, then can switch to **Work Experience** or **Education**
- **Work Experience** and **Education** share a grouped layout (logo + name, then entries) but are distinct tabs
- **Education** currently contains one Institution; ACM and JPCS are not Education entries
- A **Company** has one or more **Roles**; an **Institution** has one or more **Programs**
- Each **Company** and **Institution** uses a **Placeholder logo** until the real mark is provided

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

## Flagged ambiguities

- "About" was used for both the homepage section and the first tab — resolved: **About section** vs **About Me**.
- "Education" was used to include student orgs (ACM, JPCS) — resolved: **Education** is the degree/program frame only; those orgs are out until designed elsewhere.
