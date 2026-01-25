import React from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalculatorIcon, Lightbulb, Package, Ruler, CheckCircle, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CoverageCalculator from '../components/tools/CoverageCalculator';

const features = [
    {
        icon: CheckCircle,
        title: "Accurate Estimates",
        description: "Based on industry-standard formulas with 10% wastage factor"
    },
    {
        icon: Package,
        title: "Package Options",
        description: "Get quantities for both 300ml cartridges and 592ml sausages"
    },
    {
        icon: Ruler,
        title: "Quick Presets",
        description: "One-click presets for common joint types and sizes"
    }
];

const tips = [
    {
        icon: Ruler,
        title: "Measure Accurately",
        description: "Measure joint width and depth at multiple points along the joint for best accuracy. Joints can vary in size."
    },
    {
        icon: Package,
        title: "Package Sizes",
        description: "300ml cartridges come 24 per carton. 592ml sausages come 20 per carton. Order by carton for best pricing."
    },
    {
        icon: Lightbulb,
        title: "Joint Design",
        description: "For structural joints, depth should be at least half the width for optimal performance and adhesion."
    }
];

export default function Calculator() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/images/calculator-bg.jpg"
                        alt="Modern architecture"
                        className="w-full h-full object-cover scale-110"
                        style={{ objectPosition: 'center center' }}
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full text-amber-300 text-sm font-medium mb-6">
                            <CalculatorIcon className="w-4 h-4" />
                            Free Professional Tool
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
                            <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Sealant Coverage</span>
                            <br />
                            <span className="text-amber-400 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Calculator</span>
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                            Calculate exactly how many cartridges or sausages you need for your project.
                            Reduce waste, save money, and order the right amount every time.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Feature Pills - White bar */}
            <section className="py-4 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 py-2">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                    <feature.icon className="w-4 h-4 text-[#000000]" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-[#000000]">{feature.title}</p>
                                    <p className="text-xs text-slate-500 hidden sm:block">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Calculator Section - White background */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <CoverageCalculator />
                    </motion.div>
                </div>
            </section>

            {/* Formula Section - Light gray */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-8"
                        >
                            <span className="text-[#000000] text-sm font-medium uppercase tracking-wider mb-2 block">The Formula</span>
                            <h2 className="text-3xl md:text-4xl font-semibold text-[#000000] mb-3">How We Calculate</h2>
                            <p className="text-slate-500">
                                Our calculator uses the industry-standard formula for sealant coverage
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
                        >
                            <div className="text-center mb-6">
                                <code className="text-lg md:text-xl text-[#000000] font-mono bg-slate-100 px-4 py-2 rounded-lg">
                                    Volume (ml) = Width × Depth × Length × 1.1
                                </code>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 text-center">
                                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                    <p className="text-[#000000] font-bold text-lg mb-1">Width × Depth</p>
                                    <p className="text-slate-500 text-sm">Joint cross-section area (mm²)</p>
                                </div>
                                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                    <p className="text-[#000000] font-bold text-lg mb-1">× Length</p>
                                    <p className="text-slate-500 text-sm">Total linear meters</p>
                                </div>
                                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                    <p className="text-[#000000] font-bold text-lg mb-1">× 1.1</p>
                                    <p className="text-slate-500 text-sm">10% wastage factor</p>
                                </div>
                            </div>

                            <p className="text-slate-500 text-sm text-center mt-6">
                                The wastage factor accounts for nozzle trimming, tooling loss, and application inefficiency.
                                Results are rounded up to ensure you have enough product.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pro Tips Section - White */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <span className="text-[#000000] text-sm font-medium uppercase tracking-wider mb-2 block">Expert Advice</span>
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#000000] mb-3">Pro Tips</h2>
                        <p className="text-slate-500">Get the most accurate results with these guidelines</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {tips.map((tip, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-slate-300 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                                    <tip.icon className="w-6 h-6 text-[#000000]" />
                                </div>
                                <h3 className="font-semibold text-[#000000] mb-2">{tip.title}</h3>
                                <p className="text-slate-500 text-sm">{tip.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Black */}
            <section
                className="py-20 relative overflow-hidden"
                style={{ background: 'linear-gradient(to bottom, #000000 0%, #111111 100%)' }}
            >
                <div className="absolute inset-0 pattern-grid" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                            Ready to Order?
                        </h2>
                        <p className="text-slate-400 mb-8">
                            Get a custom quote for your project with our exact calculations
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/products">
                                <Button className="bg-transparent border border-white/30 text-white hover:bg-white/5 px-8 py-6 rounded-full font-medium">
                                    Browse Products
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button className="bg-white text-[#000000] hover:bg-slate-100 px-8 py-6 rounded-full font-medium">
                                    <Mail className="w-5 h-5 mr-2" />
                                    Get a Quote
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
