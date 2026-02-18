'use client';

import React, { useEffect, useState } from 'react';
import MetallicPaint from '@/components/ui/MetallicPaint';

const JaLogo = ({ className = "" }) => {
    const [logoSrc, setLogoSrc] = useState(null);
    const fontRef = React.useRef(null);

    useEffect(() => {
        const generateLogo = async () => {
            await document.fonts.ready;

            // Get the correct font family from the CSS variable
            let fontFamily = 'serif';
            if (fontRef.current) {
                fontFamily = getComputedStyle(fontRef.current).fontFamily;
            }

            const canvas = document.createElement('canvas');
            canvas.width = 300;
            canvas.height = 300;
            const ctx = canvas.getContext('2d');

            // Clear canvas (transparent)
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw "Ja" text
            ctx.fillStyle = "black";
            ctx.font = `180px ${fontFamily}`; // Slightly smaller to ensure fit
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("Ja", canvas.width / 2, canvas.height / 2 - 15); // Moved up slightly to center visually

            setLogoSrc(canvas.toDataURL());
        };

        generateLogo();
    }, []);

    if (!logoSrc) {
        // Render a hidden span to load/detect the font
        return <span ref={fontRef} style={{ fontFamily: 'var(--font-jacquard-12)', position: 'absolute', opacity: 0, pointerEvents: 'none' }}>Ja</span>;
    }

    return (
        <div className={`relative overflow-hidden bg-black rounded-lg border border-white/20 shadow-[0_0_8px_rgba(255,255,255,0.3)] ${className}`}>
            {/* Hidden reference to keep font loaded/referenced */}
            <span ref={fontRef} style={{ fontFamily: 'var(--font-jacquard-12)', position: 'absolute', opacity: 0, pointerEvents: 'none' }}>Ja</span>
            <MetallicPaint
                imageSrc={logoSrc}
                scale={2}
                contrast={0.9}
                brightness={1.3}
                liquid={0.1}
                speed={0.2}
                mouseAnimation={true}
                patternSharpness={0.5}
                lightColor="#ffffff"
                darkColor="#757575" // Silver/Grey base
                tintColor="#ffffff" // No tint (White), ensuring only 2 colors
                fresnel={2} // Stronger edge highlighting (glow)
            />
        </div>
    );
};

export default JaLogo;
