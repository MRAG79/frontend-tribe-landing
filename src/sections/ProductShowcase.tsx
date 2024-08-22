"use client";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortleddly turn your ideas a fully functional, responsive, website
            in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} className="mt-5" alt="product Image" />
          <motion.img
            src={pyramidImage.src}
            width={262}
            height={262}
            className="absolute hidden md:block -right-36 -top-32"
            alt="pyramidImage"
            style={{
              translateY
            }}
          />
          <motion.img
            src={tubeImage.src}
            width={248}
            height={248}
            className="absolute hidden md:block bottom-24 -left-36"
            alt="tubeImage"
            style={{
              translateY
            }}
          />
        </div>
      </div>
    </section>
  );
};
