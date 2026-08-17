# A YXUNG SHOT — Editorial Photography Portfolio & Exhibition

Digital exhibition catalogue, photography portfolio, and commission booking system for **A Yxung Shot** (operated by Tana, Cape Town).

---

## 📸 How to Feed Your Own Images into This Repository

### 1. Place Images in the `public/` Folder
Create subfolders for each shoot or series inside `public/images/`:

```
public/
└── images/
    ├── coastal-silhouettes/
    │   ├── cover.jpg
    │   ├── plate-01.jpg
    │   └── plate-02.jpg
    ├── cape-dusk/
    │   ├── cover.jpg
    │   └── plate-01.jpg
    └── wedding-archives/
        └── cover.jpg
```

### 2. Register Your Projects in `src/data/projects.ts`
Open `src/data/projects.ts` and set `coverImage` and `allImages` paths pointing to your local files (or any remote CDN URL):

```typescript
{
  id: '01',
  number: '01',
  catalogCode: 'AYS-2026-01',
  title: 'COASTAL SILHOUETTES',
  slug: 'coastal-silhouettes',
  category: 'Portraits',
  subcategory: 'High Contrast Study',
  year: '2026',
  location: 'Camps Bay, Cape Town',
  client: 'Private Editorial Commission',
  coverImage: '/images/coastal-silhouettes/cover.jpg',
  description: 'An editorial series exploring evening shadow against the Atlantic horizon.',
  allImages: [
    {
      url: '/images/coastal-silhouettes/cover.jpg',
      caption: 'Plate 01 — Ocean Twilight',
      alt: 'Portrait in evening light',
      aspectRatio: 'landscape'
    },
    {
      url: '/images/coastal-silhouettes/plate-01.jpg',
      caption: 'Plate 02 — Granite Formations',
      alt: 'Wide landscape detail',
      aspectRatio: 'ultrawide'
    }
  ]
}
```

---

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` to preview your site.

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🚀 Deployment
This project is built with Vite + React and can be deployed directly with zero configuration to **Vercel**, **Netlify**, or **GitHub Pages**.
