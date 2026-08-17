# Image Storage for A Yxung Shot Portfolio

You can place your photos and project folders directly here in `public/images/`.

## Folder Structure Example:

```
public/
└── images/
    ├── projects/
    │   ├── solo-portraits/
    │   │   ├── cover.jpg
    │   │   ├── plate-01.jpg
    │   │   └── plate-02.jpg
    │   └── fashion-editorial/
    │       ├── cover.jpg
    │       └── plate-01.jpg
    └── studio/
        └── tana-portrait.jpg
```

## Referencing Images in Code

Any image placed in `public/images/...` can be referenced starting with `/images/...` in `/src/data/projects.ts` or `/src/data/services.ts`.

For example:
```typescript
coverImage: '/images/projects/solo-portraits/cover.jpg'
```
