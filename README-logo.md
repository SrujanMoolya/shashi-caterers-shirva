# Logo placement for project

This project expects a logo file to be served from the `public` folder at runtime.

Where to put the image
- Place the provided logo image file into the repository `public` folder as `logo.png`:

  public/logo.png

Recommended sizes
- Use a square or near-square image. Recommended sizes:
  - 256×256 (good for most uses)
  - 512×512 (retina/high-DPI)

If you want multiple sizes or better caching, add `logo-192.png` / `logo-512.png` and update references.

Notes
- The `Navbar` component references `/logo.png` (root-relative), so placing the file in `public/logo.png` will make it available at `https://<your-host>/logo.png`.
- If you'd rather keep assets in `src/assets`, import them in the component instead. For example:

```ts
import logo from "../assets/logo.png";
// then use <img src={logo} />
```

That's it — drop the attached image into `public/logo.png` and the navbar will show it.
