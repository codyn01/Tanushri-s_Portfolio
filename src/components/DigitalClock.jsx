import { useEffect, useRef } from 'react';

const DigitalClock = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const size = window.innerWidth >= 768 ? 200 : 150;
        canvas.width = size;
        canvas.height = size;

        ctx.lineCap = 'round'; // For smoother arc ends

        function degToRad(degree) {
            const factor = Math.PI / 180;
            return degree * factor;
        }

        function renderTime() {
            const now = new Date();
            const today = now.toDateString();
            const time = now.toLocaleTimeString('en-US', { hour12: false });
            const hrs = now.getHours();
            const min = now.getMinutes();
            const sec = now.getSeconds();
            const mil = now.getMilliseconds();
            const smoothsec = sec + (mil / 1000);
            const smoothmin = min + (smoothsec / 60);

            const centerX = size / 2;
            const centerY = size / 2;
            const ringCenterY = centerY - 15; // Shift rings up
            const radius = size / 2 - 40; // Adjusted for dual-ring and orbiting dot space

            // Transparent background
            ctx.clearRect(0, 0, size, size);

            // Soft aura behind the ring
            const auraGradient = ctx.createRadialGradient(centerX, ringCenterY, 0, centerX, ringCenterY, radius * 1.5);
            auraGradient.addColorStop(0, 'rgba(0,245,255,0.3)');
            auraGradient.addColorStop(0.7, 'rgba(0,245,255,0)');
            auraGradient.addColorStop(1, 'rgba(0,245,255,0)');
            ctx.fillStyle = auraGradient;
            ctx.beginPath();
            ctx.arc(centerX, ringCenterY, radius * 1.5, 0, 2 * Math.PI);
            ctx.fill();

            // Dual-ring: Thin outer ring with gradient
            const ringGradient = ctx.createLinearGradient(centerX - radius, ringCenterY - radius, centerX + radius, ringCenterY + radius);
            ringGradient.addColorStop(0, '#00F5FF'); // Neon Cyan
            ringGradient.addColorStop(1, '#FF4DFF'); // Neon Magenta

            // Outer ring
            ctx.strokeStyle = ringGradient;
            ctx.lineWidth = window.innerWidth >= 768 ? 3 : 2;
            ctx.shadowColor = '#00F5FF';
            ctx.shadowBlur = window.innerWidth >= 768 ? 20 : 15;
            ctx.beginPath();
            ctx.arc(centerX, ringCenterY, radius, 0, 2 * Math.PI);
            ctx.stroke();

            // Inner ring (slightly smaller for depth)
            ctx.lineWidth = window.innerWidth >= 768 ? 2 : 1.5;
            ctx.shadowBlur = window.innerWidth >= 768 ? 15 : 10;
            ctx.beginPath();
            ctx.arc(centerX, ringCenterY, radius * 0.9, 0, 2 * Math.PI);
            ctx.stroke();

            // Orbiting glow dot (slow animation, ~12s revolution)
            const orbitPeriod = 7000; // 12 seconds
            const angle = (Date.now() % orbitPeriod) / orbitPeriod * 2 * Math.PI;
            const dotRadius = radius * 0.95; // Orbit just inside outer ring
            const dotX = centerX + dotRadius * Math.cos(angle);
            const dotY = ringCenterY + dotRadius * Math.sin(angle);

            // Draw orbiting dot with teal glow
            ctx.beginPath();
            ctx.arc(dotX, dotY, window.innerWidth >= 768 ? 4 : 3, 0, 2 * Math.PI);
            ctx.fillStyle = '#14F195'; // Electric Teal
            ctx.shadowColor = '#14F195';
            ctx.shadowBlur = window.innerWidth >= 768 ? 10 : 7;
            ctx.fill();

            // Second orbiting glow dot (opposite to first)
            const angle2 = angle + Math.PI; // Opposite side
            const dotX2 = centerX + dotRadius * Math.cos(angle2);
            const dotY2 = ringCenterY + dotRadius * Math.sin(angle2);

            // Draw second orbiting dot with teal glow
            ctx.beginPath();
            ctx.arc(dotX2, dotY2, window.innerWidth >= 768 ? 4 : 3, 0, 2 * Math.PI);
            ctx.fillStyle = '#14F195'; // Electric Teal
            ctx.shadowColor = '#14F195';
            ctx.shadowBlur = window.innerWidth >= 768 ? 10 : 7;
            ctx.fill();

            // Date text centered in rings
            ctx.font = `${window.innerWidth >= 768 ? '16px' : '14px'} "Exo 2" Bold`;
            ctx.fillStyle = '#00E5FF'; // Aqua Cyan
            ctx.shadowBlur = 0;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(today, centerX, ringCenterY - 12);

            // Time text centered below date in rings
            ctx.font = `${window.innerWidth >= 768 ? '50px' : '50px'} "Exo 2" Bold`;
            ctx.fillStyle = '#FFFFFF'; // White
            ctx.shadowBlur = 0;
            ctx.fillText(time, centerX, ringCenterY + 12);
        }

        renderTime();
        const interval = setInterval(renderTime, 40); // Match sample interval for smooth animation

        // Resize handler for responsiveness
        const handleResize = () => {
            const newSize = window.innerWidth >= 768 ? 200 : 150;
            canvas.width = newSize;
            canvas.height = newSize;
            renderTime();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="digital-clock" />;
};

export default DigitalClock;
