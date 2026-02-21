'use client';

import React, { useEffect, useState, useRef } from 'react';
import MetallicPaint from '@/components/ui/MetallicPaint';

const JaLogo = ({ className = "" }) => {
    const [logoSrc, setLogoSrc] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const fontRef = useRef(null);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    useEffect(() => {
        // Don't generate WebGL canvas on mobile — too heavy
        if (isMobile) return;

        const generateLogo = async () => {
            let loadedFontFamily = 'serif';

            try {
                const customFont = new FontFace('CustomJacquard', 'url(/fonts/Jacquard12-Regular.ttf)');
                await customFont.load();
                document.fonts.add(customFont);
                loadedFontFamily = 'CustomJacquard';
            } catch (e) {
                console.error("Manual font loading failed, falling back to CSS variable:", e);
                if (fontRef.current) {
                    const cssFont = getComputedStyle(fontRef.current).fontFamily;
                    if (cssFont) {
                        loadedFontFamily = cssFont.replace(/['"]/g, '');
                    }
                }
            }

            const canvas = document.createElement('canvas');
            canvas.width = 300;
            canvas.height = 300;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#000000";
            ctx.font = `180px "${loadedFontFamily}"`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("Ja", canvas.width / 2, canvas.height / 2 - 15);

            setLogoSrc(canvas.toDataURL());
        };

        generateLogo();
    }, [isMobile]);

    // Mobile: render lightweight CSS gradient text instead of WebGL2 shader
    if (isMobile) {
        return (
            <div className={`relative overflow-hidden bg-black rounded-lg border border-white/20 shadow-[0_0_8px_rgba(255,255,255,0.3)] flex items-center justify-center ${className}`}>
                <span
                    style={{
                        fontFamily: 'var(--font-jacquard-12)',
                        fontSize: '1.6rem',
                        background: 'linear-gradient(135deg, #ffffff 0%, #aaaaaa 50%, #ffffff 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        lineHeight: 1,
                        display: 'block',
                    }}
                >
                    Ja
                </span>
            </div>
        );
    }

    if (!logoSrc) {
        return <span ref={fontRef} style={{ fontFamily: 'var(--font-jacquard-12)', position: 'absolute', opacity: 0, pointerEvents: 'none' }}>Ja</span>;
    }

    return (
        <div className={`relative overflow-hidden bg-black rounded-lg border border-white/20 shadow-[0_0_8px_rgba(255,255,255,0.3)] ${className}`}>
            <span ref={fontRef} style={{ fontFamily: 'var(--font-jacquard-12)', position: 'absolute', opacity: 0, pointerEvents: 'none' }}>Ja</span>
            <MetallicPaint
                imageSrc={logoSrc}
                scale={2}
                contrast={1}
                brightness={1.2}
                liquid={0.1}
                speed={0.2}
                mouseAnimation={true}
                patternSharpness={0.5}
                lightColor="#ffffff"
                darkColor="#333333"
                tintColor="#ffffff"
                fresnel={2}
            />
        </div>
    );
};

export default JaLogo;
