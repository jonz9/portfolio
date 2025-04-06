"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { createClient } from "@supabase/supabase-js";
import { LottieRefCurrentProps } from "lottie-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { CameraGear } from "@/data";
import { FaExternalLinkAlt } from "react-icons/fa";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
  ),
});

// supabase client
const supabaseUrl = `https://${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID}.supabase.co`;
const supabase = createClient(
  supabaseUrl,
  `${process.env.NEXT_PUBLIC_SUPABASE_API_KEY}`
);

const Photography = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const theme = useTheme();

  // cam icon
  const camRef = useRef<LottieRefCurrentProps>(null);
  const [camAnimationData, setCamAnimationData] = useState(null);
  const cam = theme.theme === "dark" ? "cam-white.json" : "cam-black.json";

  useEffect(() => {
    const loadLottie = async () => {
      const file = theme.theme === "dark" ? "cam-white.json" : "cam-black.json";
      const response = await fetch(`/static/icons/${file}`);
      const json = await response.json();
      setCamAnimationData(json);
    };
    loadLottie();
  }, [theme.theme]);

  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(
    new Set<number>()
  );
  const imageCache = useRef<string[] | null>(null);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  const fetchPhotos = async () => {
    if (imageCache.current) {
      setImageUrls(imageCache.current);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.storage
        .from("flicks")
        .list("flicks", { limit: 100 });

      if (error) throw error;

      const urls: string[] = [];
      const batchSize = 10;

      for (let i = 0; i < data.length; i += batchSize) {
        const batch = data.slice(i, i + batchSize);
        const batchUrls = await Promise.all(
          batch.map(async (image) => {
            const { data: urlData } = await supabase.storage
              .from("flicks")
              .createSignedUrl(`flicks/${image.name}`, 60 * 60 * 24 * 30);
            return urlData?.signedUrl || null;
          })
        );

        const validUrls = batchUrls.filter(
          (url): url is string => url !== null
        );
        urls.push(...validUrls);
        setImageUrls((prev) => [...prev, ...validUrls]);

        if (i === 0) {
          // Preload first 6 images
          const firstBatch = validUrls.slice(0, 6);
          await Promise.all(
            firstBatch.map((url, index) => {
              return new Promise<void>((resolve) => {
                const img = new window.Image();
                img.src = url;
                img.onload = () => {
                  handleImageLoad(index);
                  resolve();
                };
              });
            })
          );
          setIsLoading(false);
        }
      }

      imageCache.current = urls;
    } catch (error) {
      console.error("Error fetching photos:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="relative left-[50%] right-[50%] mx-[-50vw] w-screen pb-15 min-h-screen mt-10">
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-6 px-4 py-8 sm:gap-8 sm:px-8 md:px-12 lg:px-24 xl:px-32"
      >
        <motion.h1
          variants={itemVariants}
          className="flex flex-col items-start w-full max-w-screen-xl gap-4 mx-auto sm:flex-row sm:items-center"
        >
          <div className="flex flex-col items-start justify-between w-full gap-4 sm:items-center sm:flex-row">
            <div
              className="flex items-center gap-2 sm:gap-3"
              onMouseEnter={() => {
                if (camRef.current) {
                  camRef.current.goToAndPlay(0);
                }
              }}
              onMouseLeave={() => {
                if (camRef.current) {
                  camRef.current.goToAndStop(0);
                }
              }}
            >
              <Lottie
                lottieRef={camRef}
                animationData={camAnimationData}
                loop={false}
                style={{ width: 40, height: 40 }}
                className="sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]"
              />
              <span className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Shots of Everything
              </span>
            </div>
            <ul className="flex flex-wrap items-start gap-2 text-xs font-light sm:flex-col sm:items-end sm:text-sm sm:gap-1">
              {CameraGear.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.25 }}
                  className="transition-all duration-300 hover:translate-x-[-5px] group"
                >
                  <a
                    href={item.link}
                    target="_blank"
                    className="flex items-center gap-1"
                  >
                    {item.name}
                    <FaExternalLinkAlt
                      size={10}
                      className="hidden ml-1 group-hover:inline-block text-accent sm:size-3"
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.h1>

        {/* Loading state */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center min-h-[40vh] sm:min-h-[50vh]"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 rounded-full border-muted-foreground/20 border-t-muted-foreground animate-spin sm:w-16 sm:h-16" />
              <p className="text-sm text-muted-foreground sm:text-base">
                Loading photos...
              </p>
            </div>
          </motion.div>
        )}

        {/* Photo grid with progressive loading */}
        {!isLoading && (
          <motion.div
            variants={itemVariants}
            className="gap-2 space-y-2 columns-1 sm:gap-3 sm:space-y-3 sm:columns-2 lg:columns-3"
          >
            {imageUrls.map((url, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg break-inside-avoid bg-muted"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: loadedImages.has(index) ? 1 : 0.3,
                  scale: 1,
                }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={url}
                  alt="shot on a7iv"
                  width={800}
                  height={600}
                  className="object-cover w-full h-auto transition-opacity duration-300 rounded-lg"
                  loading={index < 6 ? "eager" : "lazy"}
                  priority={index < 6}
                  onLoadingComplete={() => handleImageLoad(index)}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Photography;
