import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useProfileImages } from "@/hooks/useProfileImages";

const SLIDE_DURATION_MS = 40000;

const ProfileImageSlider = ({ alt }: { alt: string }) => {
  const images = useProfileImages();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION_MS);

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.img
          key={images[current]}
          src={images[current]}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
};

export default ProfileImageSlider;
