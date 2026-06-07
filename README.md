# Alberta Vision Care

An Astro site built with [Bookshop](https://github.com/cloudcannon/bookshop) components, edited through [Decap CMS](https://decapcms.org/) (a free, open-source, git-based CMS).

Content lives as markdown/JSON in this repo. Editors make changes at `/admin/`, which commits straight to GitHub — no separate hosted CMS service required.

## Getting Started

### Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Local Development

1. Clone the repository
2. Run `npm install`
3. Run `npm start`

## Content Editing (Decap CMS)

Visit `/admin/` on a deployed build (or locally — see below) to edit pages, team member bios, blog posts, and sitewide data (navigation, SEO, colors, icons).

The CMS config lives at [public/admin/config.yml](public/admin/config.yml). Each page's `content_blocks` is a list of typed Bookshop component blocks — Decap's `list` widget with `types` mirrors Bookshop's `_bookshop_name` discriminator directly, so what an editor builds in the CMS is exactly what Bookshop renders, with no transformation step in between.

### Editing locally

1. Run `npm run dev`
2. In a second terminal, run `npx decap-server`
3. Open `http://localhost:4321/admin/index.html` — Decap detects `localhost` and offers to use the local backend, reading and writing your working tree directly (no GitHub login needed for local testing)

In production, the CMS authenticates editors via GitHub OAuth (configured through Netlify's Access Control settings) and commits changes directly to this repo's `main` branch.

### Adding a new field to an existing component

1. Update the component's `.astro` file and its `.bookshop.yml` `blueprint` (Bookshop still uses `blueprint` to register the component and its default shape — the `_inputs`/`preview` sections that CloudCannon used for its visual editor are no longer needed)
2. Add the matching field to that component's entry under `content_block_types` in [public/admin/config.yml](public/admin/config.yml)

## Features

### Bookshop

[Bookshop](https://github.com/cloudcannon/bookshop) is a component development workflow for static websites — pages are built by composing small, self-contained components driven by data in frontmatter.

Bookshop is already set up on this project, so that you can start building components straight away.

To add a new component:

1. Create a new folder in `src/components` using the component name as the folder name.
   - Note: If using .mdx snippets, as we are in this template, avoid using kebab-case naming conventions. Use snake_case or camelCase instead.
2. Create two files in this folder
   `src/components/ExampleComponent/ExampleComponent.astro`

```Astro
---
interface Props {
  background_color: string;
  text_color: string;
}

const block = Astro.props;
---

<section style={`background-color: ${block.background_color}; color: ${block.text_color};`}>
  <div class="container">
    Replace me
  </div>
</section>

<style>
  .container {
    max-width: var(--pageContainer);
    margin: 0 auto;
    padding-inline: var(--pagePadding);
  }
</style>
```

---

`src/components/ExampleComponent/ExampleComponent.bookshop.yml`

```yaml
# Registers the component with Bookshop and defines its default shape
spec:
  structures:
    - content_blocks
  label: Example Component
  description: A short description.
  icon: 'cottage'
  tags:
    - Example

blueprint:
  background_color: '#ffffff'
  text_color: '#000000'
```

Then add a matching entry under `content_block_types` in [public/admin/config.yml](public/admin/config.yml) so editors can configure it through the CMS — see [Content Editing](#content-editing-decap-cms) above.

### Blog & Documentation Pages

Blog section with tags and pagination included.

Documentation, blog and other text heavy sections should replicate how the blog section is implemented in this template.

The blog pages in this template use MDX to allow for snippets. Snippets allow you to use HTML components throughout your markdown text.

A common layout, with changing markdown content is favored for these kinds of text heavy pages, rather than using Bookshop components - which are defined and managed in your markdown pages frontmatter.

These text-heavy pages are edited as plain markdown/MDX through the `blog` collection in Decap, rather than as Bookshop content blocks.

### Image Optimization

[Astro `<Image />`](https://docs.astro.build/en/guides/images/#image--astroassets) is used in the two placeholder components in this template.
An Astro `<Image />` will process an image in your src/assets/images folder, and output an optimized image, like below:

```html
<img
  src="/_astro/my_image.hash.webp"
  srcset="
    /_astro/my_image.hash.webp  240w,
    /_astro/my_image.hash.webp  540w,
    /_astro/my_image.hash.webp  720w,
    /_astro/my_image.hash.webp 1600w
  "
  sizes="
    (max-width: 360px) 240px,
    (max-width: 720px) 540px,
    (max-width: 1600px) 720px,
    1600px
  "
  alt="A description of my image."
  width="1600"
  height="900"
  loading="lazy"
  decoding="async" />
```

By default, image fields in the CMS upload to `public/images` (`media_folder` in [public/admin/config.yml](public/admin/config.yml)), meaning they're served unprocessed.

Components that use the Astro `<Image />` component should source their images from `src/assets/images` instead, so they're processed and optimized on build.

### SEO Controls

SEO inputs come set up and configured to allow editors to control SEO on a page-by-page, and sitewide basis.

### Tailwind CSS

Use Tailwind to add utility classes to your HTML, allowing you to style your components without leaving your HTML.
This can be used in combination with normal CSS and SCSS styling, leaving you to add styles to your site however you want.

To remove Tailwind CSS:

1. Remove the following packages from your `package.json`:

```json
"dependencies": {
  "tailwindcss": "^3.3.3",
  "@astrojs/tailwind": "^5.0.0"
}
```

2. Remove mentions of Tailwind from your `astro.config.mjs`

```mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // ...
  integrations: [tailwind()],
});
```

3. Delete your `tailwind.config.mjs` file.

### Font Awesome Icons

A Font Awesome Icon free icon pack is included, without having to set up your own kit in Font Awesome.

To add more icons:

1. Go to the [Font Awesome icon list](https://fontawesome.com/search?o=r&m=free)
2. Pick a free icon
3. Go to `src/components/utility/icon.jsx`
4. Import the component from `'@fortawesome/free-solid-svg-icons'`, `'@fortawesome/free-regular-svg-icons'`, or `'@fortawesome/free-brands-svg-icons'`, depending on which kind of icon it is. Tip: After entering 'fa' into one of the destructured objects, you should see an autocomplete dropdown list to help you with the correct syntax.
5. Add another if statement following the format the other icons use.
6. Add the name you just used in the conditional of the if statement to `data/icons.json`, which populates the icon dropdown list used for icons in the placeholder components.

To remove Font Awesome Icons:

1. Remove the following packages from your `package.json`:

```json
  "dependencies": {
  "@fortawesome/fontawesome-svg-core": "^6.5.2",
  "@fortawesome/free-brands-svg-icons": "^6.5.2",
  "@fortawesome/free-regular-svg-icons": "^6.5.2",
  "@fortawesome/free-solid-svg-icons": "^6.5.2",
  "@fortawesome/react-fontawesome": "^0.2.0"
  }
```

2. Remove `src/components/utility/icon.jsx`
3. Remove any imports of the icon

```Astro
import Icon from '../utility/icon';
```

4. Remove `data/icons.json`
5. Remove the `button_icon` / `social_icon` fields referencing it from [public/admin/config.yml](public/admin/config.yml)

### Data files

`data/*.json` holds sitewide values editable through the `data` collection in Decap (see [public/admin/config.yml](public/admin/config.yml)):

- `site.json` — sitewide SEO/share defaults
- `navigation.json` — header and footer links, logos, and social profiles
- `colors.json` — the color palette offered in color-picker fields across the site
- `icons.json` — the list of Font Awesome icon names available to `button_icon`/`social_icon` fields (must stay in sync with `src/components/utility/icon.jsx`)

### CMS Config

[public/admin/config.yml](public/admin/config.yml) defines every collection and field exposed to editors at `/admin/` — see [Content Editing](#content-editing-decap-cms) above for how it maps onto Bookshop's component blueprints.

### CSS Variables

Shows how to set global CSS variables in Astro, to set commonly used values like `pagePadding`, and `pageContainer`.

Extra work could be done to write a `node fs` script to write said values from a data file to the appropriate places in the code, which would then allow editors to control sitewide styles like page max-width and padding.

### Coming Soon

- Scheduling blog posts for a future date
- Editor links to colors data file
- Writing CSS vars (padding, page max-width, etc.) through an editable data file
