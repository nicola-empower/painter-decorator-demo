import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ProcessFlow = ({
    title = "How It Works",
    subtitle = "Simple Feature Process",
    steps = [
        { title: "Step 1", desc: "Description 1" },
        { title: "Step 2", desc: "Description 2" },
        { title: "Step 3", desc: "Description 3" },
        { title: "Step 4", desc: "Description 4" }
    ]
}) => {
    return (
        <section className="py-24 bg-purple-900 text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-header font-bold tracking-tight sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-purple-200">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-purple-700 z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-purple-600 border-4 border-purple-800 flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-purple-100">{step.title}</h3>
                            <p className="text-purple-300 text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;
