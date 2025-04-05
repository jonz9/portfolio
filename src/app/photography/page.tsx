"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { createClient } from "@supabase/supabase-js";
import { LottieRefCurrentProps } from "lottie-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import camWhite from "../../../public/static/icons/cam-white.json";
import camBlack from "../../../public/static/icons/cam-black.json";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
  ),
});

const Photography = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const theme = useTheme();

  // cam icon
  const camRef = useRef<LottieRefCurrentProps>(null);
  const cam = theme.theme === "dark" ? camWhite : camBlack;
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isLottieLoaded, setIsLottieLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const imageCache = useRef<string[] | null>(null);

  // supabase client
  const supabaseUrl = `https://${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID}.supabase.co`;
  const supabase = createClient(
    supabaseUrl,
    `${process.env.NEXT_PUBLIC_SUPABASE_API_KEY}`
  );

  const fetchPhotos = async () => {
    setIsLoading(true);
    const { data, error } = await supabase.storage
      .from("flicks")
      .list("flicks", { limit: 100 });

    if (error) {
      console.error("Error fetching photos:", error);
      setIsLoading(false);
      return [];
    }

    const urls: string[] = [];

    for (const image of data) {
      const { data: urlData } = await supabase.storage
        .from("flicks")
        .createSignedUrl(`flicks/${image.name}`, 60 * 60 * 24 * 30);

      if (urlData?.signedUrl) {
        urls.push(urlData.signedUrl);
      }
    }

    setImageUrls(urls);
    setIsLoading(false);
    return urls;
  };

  useEffect(() => {
    const preloadLottie = async () => {
      try {
        await import("lottie-react");
        setIsLottieLoaded(true);
      } catch (error) {
        console.error("Error preloading Lottie:", error);
      }
    };
    preloadLottie();
  }, []);

  useEffect(() => {
    if (imageCache.current) {
      setImageUrls(imageCache.current);
      setIsLoading(false);
      return;
    }

    fetchPhotos().then((urls) => {
      imageCache.current = urls || [];
    });
  }, []);

  return (
    <div className="relative left-[50%] right-[50%] mx-[-50vw] w-screen pb-15 min-h-screen">
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-8 px-4 my-10 md:px-48 lg:px-60"
      >
        <motion.h1
          variants={itemVariants}
          className="flex flex-row items-center w-full max-w-screen-xl gap-2 mx-auto my-4 text-xl font-bold transition-all duration-300 hover:cursor-pointer hover:pl-4"
        >
          <div className="flex items-center justify-between w-full">
            <div
              className="flex items-center gap-3 text-6xl font-bold"
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
              {isLottieLoaded ? (
                <Lottie
                  lottieRef={camRef}
                  animationData={cam}
                  loop={false}
                  style={{ width: 60, height: 60 }}
                />
              ) : (
                <div className="rounded-md w-60 h-60 bg-muted animate-pulse" />
              )}
              Shots of Everything
            </div>
            <ul className="flex flex-col items-end text-sm font-light">
              {["sony a7iv", "sony 85mm f1.8", "sigma 24-70mm f2.8"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1 + index * 0.25 }}
                    className="transition-all duration-300 hover:translate-x-[-5px]"
                  >
                    {item}
                  </motion.li>
                )
              )}
            </ul>
          </div>
        </motion.h1>

        {/* Loading state */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center min-h-[50vh]"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-4 rounded-full border-muted-foreground/20 border-t-muted-foreground animate-spin" />
              <p className="text-muted-foreground">Loading photos...</p>
            </div>
          </motion.div>
        )}

        {/* Photo grid */}
        {!isLoading && (
          <motion.div
            variants={itemVariants}
            className="gap-4 px-2 space-y-4 columns-1 sm:columns-2 lg:columns-3"
          >
            {imageUrls.map((url, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg break-inside-avoid bg-muted"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={url}
                    alt="shot on a7iv"
                    width={800}
                    height={600}
                    className="object-cover w-full h-auto transition-opacity duration-300 rounded-lg opacity-30"
                    loading="eager"
                    loader={({ src }) => src}
                    onLoadingComplete={(img) => {
                      img.classList.remove("opacity-30");
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Photography;
