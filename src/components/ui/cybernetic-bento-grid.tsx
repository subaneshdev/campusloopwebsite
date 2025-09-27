import React, { useEffect, useRef } from 'react';

// Reusable BentoItem component
const BentoItem = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const item = itemRef.current;
        if (!item) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            item.style.setProperty('--mouse-x', `${x}px`);
            item.style.setProperty('--mouse-y', `${y}px`);
        };

        item.addEventListener('mousemove', handleMouseMove);

        return () => {
            item.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={itemRef} className={`bento-item ${className || ''}`}>
            {children}
        </div>
    );
};

// Main Component
export const CyberneticBentoGrid = () => {
    return (
        <div className="main-container">
            <div className="w-full max-w-6xl z-10">
                <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8">Core Features</h1>
                <div className="bento-grid">
                    <BentoItem className="col-span-2 row-span-2 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-white">Campus Hire</h2>
                            <p className="mt-2 text-gray-400">Effortless AI-driven campus hiring and interview automation. Connects students to top employers, tracks every placement step, and gives recruiters real-time hiring insights.</p>
                        </div>
                        <div className="mt-4 h-48 bg-neutral-800 rounded-lg flex items-center justify-center text-gray-500">
                            AI Analytics Dashboard
                        </div>
                    </BentoItem>
                    <BentoItem>
                        <h2 className="text-xl font-bold text-white">Event Central</h2>
                        <p className="mt-2 text-gray-400 text-sm">All your campus events, orchestrated in one place. Build, promote, and manage academic, cultural, or placement events with live updates and attendance analytics.</p>
                    </BentoItem>
                    <BentoItem>
                        <h2 className="text-xl font-bold text-white">LoopLearn</h2>
                        <p className="mt-2 text-gray-400 text-sm">AI-powered tutoring, mentoring, and personalized learning 24/7. Guides students step by step with adaptive content, smart feedback, and motivational rewards.</p>
                    </BentoItem>
                    <BentoItem className="row-span-2">
                        <h2 className="text-xl font-bold text-white">LoopPay</h2>
                        <p className="mt-2 text-gray-400 text-sm">One-tap payments for every campus transaction, powered by Loop ID. Works with UPI, QR, card, and earns Loop Coins on fees, cafeteria, and bookstore spends.</p>
                    </BentoItem>
                    <BentoItem className="col-span-2">
                        <h2 className="text-xl font-bold text-white">Smart Campus Infrastructure</h2>
                        <p className="mt-2 text-gray-400 text-sm">Integrated IoT sensors, smart classrooms, and automated systems that make campus life seamless and efficient.</p>
                    </BentoItem>
                    <BentoItem>
                        <h2 className="text-xl font-bold text-white">Mobile App</h2>
                        <p className="mt-2 text-gray-400 text-sm">Everything you need in your pocket - from class schedules to payment history.</p>
                    </BentoItem>
                </div>
            </div>
        </div>
    );
};