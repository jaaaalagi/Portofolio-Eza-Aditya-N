"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCalendarAlt, FaBuilding, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import BackgroundEffects from '@/components/ui/background-effects';

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

const CertificatesPage = () => {
    const certificates = [
        {
            id: 1,
            title: "Upload your project by using Github best practices",
            issuer: "Microsoft",
            date: "March 26, 2025",
            description: "Successfully completed Microsoft certification on uploading projects using Github best practices",
            image: "/certificate/upload-your-project-by-using-github-best-practices-6818103981641-4-1.png",
            credentialUrl: "#"
        },
        {
            id: 2,
            title: "Introduction to HTML",
            issuer: "Sololearn",
            date: "August 31, 2025",
            description: "Completed course demonstrating theoretical and practical understanding of HTML fundamentals",
            image: "/certificate/sertifikat_sololearn_Eza Aditya N.jpg",
            credentialUrl: "#"
        },
        {
            id: 3,
            title: "Migrate your repository by using Github best practices",
            issuer: "Microsoft",
            date: "March 26, 2025",
            description: "Successfully completed Microsoft certification on migrating repositories using Github best practices",
            image: "/certificate/migrate-your-repository-by-using-github-best-practices-6818108ad51a2-4-1.png",
            credentialUrl: "#"
        },
        {
            id: 4,
            title: "Manage an InnerSource program by using Github",
            issuer: "Microsoft",
            date: "March 26, 2025",
            description: "Successfully completed Microsoft certification on managing InnerSource programs using Github",
            image: "/certificate/manage-an-innersource-program-by-using-github-68180f4090333-4-1.png",
            credentialUrl: "#"
        },
        {
            id: 5,
            title: "Maintain a secure repository by using Github best practices",
            issuer: "Microsoft",
            date: "March 26, 2025",
            description: "Successfully completed Microsoft certification on maintaining secure repositories using Github best practices",
            image: "/certificate/maintain-a-secure-repository-by-using-github-best-practices-681810d9b9f80-4-1.png",
            credentialUrl: "#"
        },
        {
            id: 6,
            title: "Introduction to GitHub",
            issuer: "Microsoft",
            date: "March 26, 2025",
            description: "Successfully completed Microsoft certification on introduction to GitHub fundamentals",
            image: "/certificate/introduction-to-github-68180e11df095-4-1.png",
            credentialUrl: "#"
        },
        {
            id: 7,
            title: "CCNAv7: Introduction to Networks",
            issuer: "Cisco Networking Academy",
            date: "July 3, 2024",
            description: "Successfully achieved student level credential for completing CCNAv7: Introduction to Networks course",
            image: "/certificate/eza-adityanugroho-jaringan-kompute-certificate-6688b48f13aff-1-1.png",
            credentialUrl: "#"
        },
        {
            id: 8,
            title: "Java Fundamentals",
            issuer: "Oracle Academy",
            date: "February 10, 2025",
            description: "Award of completion for satisfactory completion of Java Fundamentals course",
            image: "/certificate/eza-aditya-nugroho-2304140083-java-fundamentals-english-award-of-completion-2-10-2025-1-680653f513f23-1-1.png",
            credentialUrl: "#"
        },
        {
            id: 9,
            title: "Create an open-source program by using Github best practices",
            issuer: "Microsoft",
            date: "March 26, 2025",
            description: "Successfully completed Microsoft certification on creating open-source programs using Github best practices",
            image: "/certificate/create-an-open-source-program-by-using-github-best-practices-68180fddc41ab-4-1.png",
            credentialUrl: "#"
        },
        {
            id: 10,
            title: "Introduction to Basic Game Development using Scratch",
            issuer: "Coursera",
            date: "September 19, 2025",
            description: "Successfully completed online non-credit project authorized by Coursera on game development fundamentals",
            image: "/certificate/Coursera Introduction to Basic Game Development using-1.png",
            credentialUrl: "#"
        },
        {
            id: 11,
            title: "Getting Started with Microsoft Excel",
            issuer: "Coursera",
            date: "September 19, 2025",
            description: "Successfully completed online non-credit project authorized by Coursera on Microsoft Excel basics",
            image: "/certificate/Coursera Getting Started with Microsoft Excel-1.png",
            credentialUrl: "#"
        },
        {
            id: 12,
            title: "Develop a Company Website with Wix",
            issuer: "Coursera",
            date: "September 19, 2025",
            description: "Successfully completed online non-credit project authorized by Coursera on website development with Wix",
            image: "/certificate/Coursera Develop a Company Website with Wix-1.png",
            credentialUrl: "#"
        },
        {
            id: 13,
            title: "Creating Engaging Presentations with Mentimeter",
            issuer: "Coursera",
            date: "September 19, 2025",
            description: "Successfully completed online non-credit project authorized by Coursera on creating engaging presentations",
            image: "/certificate/Coursera Creating Engaging Presentations with Mentimeter-1.png",
            credentialUrl: "#"
        },
        {
            id: 14,
            title: "Contribute to an open-source project on Github",
            issuer: "Microsoft",
            date: "March 26, 2025",
            description: "Successfully completed Microsoft certification on contributing to open-source projects on Github",
            image: "/certificate/contribute-to-an-open-source-project-on-github-681811a0129f6-12-1.png",
            credentialUrl: "#"
        },
        {
            id: 15,
            title: "Build community-driven software projects on Github",
            issuer: "Microsoft",
            date: "March 26, 2025",
            description: "Successfully completed Microsoft certification on building community-driven software projects on Github",
            image: "/certificate/build-community-driven-software-projects-on-github-68180da4e4eb2-4-1.png",
            credentialUrl: "#"
        },
    ];

    return (
        <section className="py-16 relative" id="certificates">
            <BackgroundEffects
                variant="diagonal"
                colors={{ first: "secondary", second: "secondary" }}
                intensity="10"
                blurAmount="3xl"
            />

            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <div className="space-y-8 sm:space-y-12">
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

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white px-4"
                        >
                            Certificates & Achievements
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-base sm:text-lg text-white/60 px-4 max-w-2xl mx-auto"
                        >
                            Professional certifications and achievements I've earned through dedicated learning and skill development
                        </motion.p>
                    </div>

                    {/* Certificates Grid */}
                    <motion.div
                        variants={containerAnimation}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full max-w-7xl mx-auto px-2 sm:px-0"
                    >
                        {certificates.map((cert) => (
                            <motion.div
                                key={cert.id}
                                variants={itemAnimation}
                                className="group relative bg-black/40 backdrop-blur-xl border-white/20 border rounded-lg sm:rounded-xl hover:border-white/60 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3),0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.1)] overflow-hidden flex flex-col"
                            >
                                {/* Top accent gradient */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

                                {/* Certificate Image */}
                                {cert.image && (
                                    <div className="relative w-full h-40 sm:h-48 md:h-52 overflow-hidden bg-white/5 flex items-center justify-center">
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            fill
                                            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>
                                )}

                                {/* Content Section */}
                                <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-1">
                                    {/* Award Icon */}
                                    <div className="mb-2 sm:mb-3 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/20 rounded-lg group-hover:bg-yellow-500/30 transition-colors">
                                        <FaAward className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-bold text-white text-sm sm:text-base mb-1.5 sm:mb-2 line-clamp-2">
                                        {cert.title}
                                    </h3>

                                    {/* Info */}
                                    <div className="space-y-1.5 sm:space-y-2 mb-2.5 sm:mb-3">
                                        <div className="flex items-center gap-2 text-xs sm:text-sm text-white/70">
                                            <FaBuilding className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                                            <span className="line-clamp-1">{cert.issuer}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs sm:text-sm text-white/70">
                                            <FaCalendarAlt className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                                            <span>{cert.date}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-white/60 mb-2.5 sm:mb-3 line-clamp-2 flex-1">
                                        {cert.description}
                                    </p>

                                    {/* Credential Link */}
                                    {cert.credentialUrl && cert.credentialUrl !== "#" && (
                                        <a
                                            href={cert.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors text-xs sm:text-sm font-semibold"
                                        >
                                            View Credential
                                            <FaExternalLinkAlt className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CertificatesPage;