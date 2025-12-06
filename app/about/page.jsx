"use client"
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import BackgroundEffects from '@/components/ui/background-effects';
import dynamic from 'next/dynamic';

const LanyardCard = dynamic(() => import('../(home)/components/ui/LanyardCard'), { ssr: false });

const AboutPage = () => {
  return (
    <section className="py-16 sm:py-20 relative min-h-screen" id="about">
      <BackgroundEffects
        variant="diagonal"
        colors={{ first: "secondary", second: "secondary" }}
        intensity="10"
        blurAmount="3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto"
        >
          {/* Left Side - Photo with Lanyard (Frame lebih lebar dan tengah) */}
          <div className="flex justify-center lg:justify-center px-6 max-w-[480px] w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-[400px]"
            >
              <Suspense fallback={<div className="w-full h-[480px] bg-slate-900 rounded-2xl animate-pulse" />}>
                <LanyardCard />
              </Suspense>
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-6">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                Eza Aditya Nugroho
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full" />
            </motion.div>

            {/* Title/Role */}
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-yellow-400 font-semibold"
            >
              Full-Stack Developer | UI/UX Enthusiast | Tech Learner
            </motion.p>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Hi! I'm Eza Aditya Nugroho, a passionate full-stack developer from Indonesia with a strong commitment to creating intuitive and impactful digital solutions. With 2+ years of experience in web development, I specialize in building responsive applications using modern technologies like React, Next.js, and Node.js.
              </p>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                My journey in tech started with a curiosity about how things work on the web. Since then, I've developed a deep interest in both frontend and backend development, always striving to bridge the gap between design and functionality. I believe in writing clean, maintainable code and delivering exceptional user experiences.
              </p>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Beyond coding, I'm a lifelong learner who loves exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community. When I'm not coding, you can find me learning new skills, reading tech blogs, or working on personal projects that challenge me to grow.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">15+</div>
                <p className="text-xs sm:text-sm text-white/60 mt-2">Certificates</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">15+</div>
                <p className="text-xs sm:text-sm text-white/60 mt-2">Projects</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">2+</div>
                <p className="text-xs sm:text-sm text-white/60 mt-2">Years Exp</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;