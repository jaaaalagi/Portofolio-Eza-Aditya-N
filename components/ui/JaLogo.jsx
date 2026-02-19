'use client';

import React, { useEffect, useState, useRef } from 'react';
import MetallicPaint from '@/components/ui/MetallicPaint';

const JaLogo = ({ className = "" }) => {
    const [logoSrc, setLogoSrc] = useState(null);
    const fontRef = useRef(null);

    useEffect(() => {
        const generateLogo = async () => {
            let loadedFontFamily = 'serif';

            try {
                // Explicitly load the font from the public directory for Canvas usage
                // This bypasses CSS variable issues and ensures the font is available
                const customFont = new FontFace('CustomJacquard', 'url(/fonts/Jacquard12-Regular.ttf)');
                await customFont.load();
                document.fonts.add(customFont);
                loadedFontFamily = 'CustomJacquard';
            } catch (e) {
                console.error("Manual font loading failed, falling back to CSS variable:", e);
                // Fallback: try to grab from computed style if manual load fails
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

            // Clear canvas (transparent)
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw "Ja" text
            ctx.fillStyle = "#000000"; // Black fill for the mask
            ctx.font = `180px "${loadedFontFamily}"`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            // Adjust y-position slightly to center it visually
            ctx.fillText("Ja", canvas.width / 2, canvas.height / 2 - 15);

            setLogoSrc(canvas.toDataURL());
        };

        generateLogo();
    }, []);

    if (!logoSrc) {
        // Render a hidden span to load/detect the font via CSS as a backup
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
