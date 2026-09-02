import { useEffect, useState } from "react";

const EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif", "gif"];

function loadImage(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

async function findImageForIndex(index: number): Promise<string | null> {
  for (const ext of EXTENSIONS) {
    const src = `/profile/${index}.${ext}`;
    if (await loadImage(src)) return src;
  }
  return null;
}

export function useProfileImages() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const found: string[] = [];
      let index = 1;

      while (true) {
        const src = await findImageForIndex(index);
        if (!src) break;
        found.push(src);
        index += 1;
      }

      if (!cancelled) setImages(found);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return images;
}
