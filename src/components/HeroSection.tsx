import React from "react";
import { useRouter } from "next/router";

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, ctaText, ctaLink }) => {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center text-center p-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 mb-6">{description}</p>
      <button
        onClick={() => router.push(ctaLink)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {ctaText}
      </button>
    </section>
  );
};

export default HeroSection;

