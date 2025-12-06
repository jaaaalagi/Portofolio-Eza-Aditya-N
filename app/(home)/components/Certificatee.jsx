"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaAward, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const CertificatesPreview = () => {
    const certificates = [
        {
            id: 1,
            title: "Upload your project by using Github best practices",
            issuer: "Microsoft",
            date: "March 26, 2025",
            image: "/certificate/upload-your-project-by-using-github-best-practices-6818103981641-4-1.png",
        },
        {
            id: 2,
            title: "Introduction to HTML",
            issuer: "Sololearn",
            date: "August 31, 2025",
            image: "/certificate/sertifikat_sololearn_Eza Aditya N.jpg",
        },
        {
            id: 3,
            title: "Java Fundamentals",
            issuer: "Oracle Academy",
            date: "February 10, 2025",
            image: "/certificate/eza-aditya-nugroho-2304140083-java-fundamentals-english-award-of-completion-2-10-2025-1-680653f513f23-1-1.png",
        },
    ];

    return (
        <div className="w-full space-y-8 sm:space-y-12">
            {/* Header Section */}
            <div className="space-y-3 sm:space-y-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-white backdrop-blur-sm shadow-lg"
                >
                    <FaAward className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-semibold">My Achievements</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                >
                    Certificates & Awards
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto"
                >
                    Professional certifications and achievements I've earned through dedicated learning and skill development
                </motion.p>
            </div>

            {/* Certificates Grid */}
            <motion.div
                variants={containerAnimation}
                initial="hidden"
                animate="show"
                className="flex justify-center"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 w-full max-w-6xl">
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert.id}
                            variants={itemAnimation}
                            className="group relative bg-black/40 backdrop-blur-xl border-white/20 border rounded-lg overflow-hidden flex flex-col hover:border-white/60 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3),0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.1)]"
                        >
                            {/* Top accent */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

                            {/* Certificate Image */}
                            {cert.image && (
                                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-white/5 flex items-center justify-center">
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                            )}

                            {/* Content */}
                            <div className="p-4 sm:p-5 flex flex-col flex-1">
                                {/* Award Icon */}
                                <div className="mb-3 inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-yellow-500/20 rounded-lg group-hover:bg-yellow-500/30 transition-colors">
                                    <FaAward className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-yellow-500" />
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-white text-sm sm:text-base mb-2.5 line-clamp-2">
                                    {cert.title}
                                </h3>

                                {/* Info */}
                                <div className="space-y-1.5 text-xs sm:text-sm">
                                    <div className="flex items-center gap-2 text-white/70">
                                        <FaBuilding className="w-3.5 h-3.5 flex-shrink-0" />
                                        <span className="line-clamp-1">{cert.issuer}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/70">
                                        <FaCalendarAlt className="w-3.5 h-3.5 flex-shrink-0" />
                                        <span>{cert.date}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* See More Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center pt-4"
            >
                <Link
                    href="/certificates"
                    className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white text-black font-semibold text-sm sm:text-base hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    See All Certificates
                </Link>
            </motion.div>
        </div>
    );
};

export default CertificatesPreview;