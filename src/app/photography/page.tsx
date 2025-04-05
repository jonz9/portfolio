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
  const [camHovered, setCamHovered] = useState(false);
  const camRef = useRef<LottieRefCurrentProps>(null);
  const cam = theme.theme === "dark" ? camWhite : camBlack;
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isLottieLoaded, setIsLottieLoaded] = useState(false);

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

  // supabase client
  const supabaseUrl = `https://${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID}.supabase.co`;
  const supabase = createClient(
    supabaseUrl,
    `${process.env.NEXT_PUBLIC_SUPABASE_API_KEY}`
  );

  const fetchPhotos = async () => {
    const { data, error } = await supabase.storage
      .from("flicks")
      .list("flicks", { limit: 100 });

    if (error) {
      console.error("Error fetching photos:", error);
      return [];
    }

    for (const image of data) {
      const { data: urlData } = await supabase.storage
        .from("flicks")
        .createSignedUrl(`flicks/${image.name}`, 60 * 60 * 24 * 30);

      if (urlData?.signedUrl) {
        setImageUrls((prev) => [...prev, urlData.signedUrl]);
      }
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="relative left-[50%] right-[50%] mx-[-50vw] w-screen mb-10 min-h-screen">
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-8 px-4 my-10 md:px-48 lg:px-60"
      >
        <motion.h1
          variants={itemVariants}
          className="flex flex-row items-center w-full max-w-screen-xl gap-4 mx-auto my-4 text-xl font-bold transition-all duration-300 hover:cursor-pointer hover:pl-4 hover:text-gradient-to-r hover:from-yellow-500 hover:to-orange-600"
          onMouseEnter={() => {
            setCamHovered(true);
            if (camRef.current) {
              camRef.current.goToAndPlay(0);
            }
          }}
          onMouseLeave={() => {
            setCamHovered(false);
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
              style={{ width: 40, height: 40 }}
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
          )}
          <p className="text-4xl font-bold">Shots of Everything</p>
        </motion.h1>

        {/* Improved photo grid */}
        <motion.div
          variants={itemVariants}
          className="gap-4 px-2 space-y-4 columns-1 sm:columns-2 lg:columns-3"
        >
          {imageUrls.map((url, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg bg-muted"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              style={{
                gridRow: "span 2",
                height: "100%",
              }}
            >
              <Image
                src={url}
                alt="flick"
                fill
                className="object-cover w-full h-full transition-opacity duration-300 rounded-lg opacity-30"
                loader={({ src }) => {
                  return src;
                }}
                onLoadingComplete={(img) => {
                  img.classList.remove("opacity-30");
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photography;
