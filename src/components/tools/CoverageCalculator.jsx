import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Ruler, Layers, ArrowRight, Package, Box, Zap, RotateCcw } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export function calculateCoverage(widthMm, depthMm, lengthM) {
    if (!widthMm || !depthMm || !lengthM) return { volumeMl: 0, cartridges300: 0, sausages592: 0, cartons300: 0, cartons592: 0 };

    const volumeMl = widthMm * depthMm * lengthM;
    const totalVolumeMl = (volumeMl * 11) / 10; // 10% wastage

    const cartridges300 = Math.ceil(totalVolumeMl / 300);
    const sausages592 = Math.ceil(totalVolumeMl / 592);

    return {
        volumeMl: Math.ceil(totalVolumeMl),
        cartridges300,
        sausages592,
        cartons300: Math.ceil(cartridges300 / 24),
        cartons592: Math.ceil(sausages592 / 20)
    };
}

const presets = [
    { name: 'Window Frame', width: 6, depth: 6 },
    { name: 'Door Frame', width: 8, depth: 8 },
    { name: 'Expansion Joint', width: 12, depth: 10 },
    { name: 'Curtain Wall', width: 20, depth: 12 },
    { name: 'Floor Joint', width: 25, depth: 15 },
    { name: 'Custom', width: null, depth: null }
];

export default function CoverageCalculator() {
    const [width, setWidth] = useState(10);
    const [depth, setDepth] = useState(10);
    const [length, setLength] = useState(10);
    const [activePreset, setActivePreset] = useState(null);
    const [result, setResult] = useState({ volumeMl: 0, cartridges300: 0, sausages592: 0, cartons300: 0, cartons592: 0 });
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        setResult(calculateCoverage(width, depth, length));
        setShowAnimation(true);
        const timer = setTimeout(() => setShowAnimation(false), 300);
        return () => clearTimeout(timer);
    }, [width, depth, length]);

    const handlePresetClick = (preset) => {
        if (preset.width !== null) {
            setWidth(preset.width);
            setDepth(preset.depth);
            setActivePreset(preset.name);
        } else {
            setActivePreset('Custom');
        }
    };

    const handleReset = () => {
        setWidth(10);
        setDepth(10);
        setLength(10);
        setActivePreset(null);
    };

    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg">

                {/* Quick Presets */}
                <div className="px-6 py-5 bg-slate-50 border-b border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-sm text-slate-600 font-medium">Quick Presets</p>
                        <button
                            onClick={handleReset}
                            className="text-xs text-slate-500 hover:text-[#000000] flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-200"
                        >
                            <RotateCcw className="w-3 h-3" />
                            Reset
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {presets.map((preset) => (
                            <button
                                key={preset.name}
                                onClick={() => handlePresetClick(preset)}
                                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${activePreset === preset.name
                                        ? 'bg-[#000000] text-white shadow-md'
                                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                                    }`}
                            >
                                {preset.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-0">
                    {/* Input Section */}
                    <div className="p-8 space-y-8 border-r border-slate-200">
                        {/* Width Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <Label className="text-base font-semibold text-[#000000] flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                                            <Ruler className="w-4 h-4 text-slate-600" />
                                        </div>
                                        Joint Width
                                    </Label>
                                    <p className="text-xs text-slate-500 mt-2 ml-10">The horizontal gap between two surfaces</p>
                                </div>
                                <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2">
                                    <Input
                                        type="number"
                                        value={width}
                                        onChange={(e) => {
                                            setWidth(Number(e.target.value));
                                            setActivePreset('Custom');
                                        }}
                                        className="w-16 h-8 text-center bg-transparent border-0 text-[#000000] font-bold text-lg p-0 focus:ring-0"
                                    />
                                    <span className="text-slate-500 text-sm font-medium">mm</span>
                                </div>
                            </div>
                            <div className="ml-10">
                                <Slider
                                    value={[width]}
                                    onValueChange={(v) => {
                                        setWidth(v[0]);
                                        setActivePreset('Custom');
                                    }}
                                    max={50}
                                    min={1}
                                    step={1}
                                    className="py-2"
                                />
                                <div className="flex justify-between text-xs text-slate-400 mt-1">
                                    <span>1mm</span>
                                    <span>50mm</span>
                                </div>
                            </div>
                        </div>

                        {/* Depth Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <Label className="text-base font-semibold text-[#000000] flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                                            <Layers className="w-4 h-4 text-slate-600" />
                                        </div>
                                        Joint Depth
                                    </Label>
                                    <p className="text-xs text-slate-500 mt-2 ml-10">How deep the sealant goes into the gap</p>
                                </div>
                                <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2">
                                    <Input
                                        type="number"
                                        value={depth}
                                        onChange={(e) => {
                                            setDepth(Number(e.target.value));
                                            setActivePreset('Custom');
                                        }}
                                        className="w-16 h-8 text-center bg-transparent border-0 text-[#000000] font-bold text-lg p-0 focus:ring-0"
                                    />
                                    <span className="text-slate-500 text-sm font-medium">mm</span>
                                </div>
                            </div>
                            <div className="ml-10">
                                <Slider
                                    value={[depth]}
                                    onValueChange={(v) => {
                                        setDepth(v[0]);
                                        setActivePreset('Custom');
                                    }}
                                    max={50}
                                    min={1}
                                    step={1}
                                    className="py-2"
                                />
                                <div className="flex justify-between text-xs text-slate-400 mt-1">
                                    <span>1mm</span>
                                    <span>50mm</span>
                                </div>
                            </div>
                        </div>

                        {/* Length Input */}
                        <div className="space-y-4">
                            <Label className="text-base font-semibold text-[#000000] flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                                    <Zap className="w-4 h-4 text-slate-600" />
                                </div>
                                Total Joint Length
                            </Label>
                            <div className="ml-10">
                                <div className="relative">
                                    <Input
                                        type="number"
                                        value={length}
                                        onChange={(e) => setLength(Number(e.target.value))}
                                        className="h-14 pl-4 pr-20 text-xl font-bold bg-slate-50 border-slate-200 text-[#000000] focus:border-[#000000] focus:ring-[#000000] rounded-xl"
                                        placeholder="Enter length"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">meters</span>
                                </div>
                                <p className="text-xs text-slate-500 mt-2">
                                    Tip: Measure all joints and add them together
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="bg-[#000000] p-8 flex flex-col relative overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

                        {/* Joint Visualization */}
                        <div className="flex-1 flex items-center justify-center mb-8 relative z-10">
                            <div className="relative">
                                <motion.div
                                    className="bg-gradient-to-br from-slate-400 to-slate-600 rounded-sm shadow-2xl relative"
                                    animate={{
                                        width: Math.max(width * 4, 40),
                                        height: Math.max(depth * 4, 40)
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-sm" />
                                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent rounded-b-sm" />
                                </motion.div>

                                {/* Dimension labels */}
                                <motion.div
                                    className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center gap-1"
                                    animate={{ opacity: 1 }}
                                >
                                    <div className="h-px w-6 bg-slate-600" />
                                    <span className="text-sm font-bold text-white bg-white/10 backdrop-blur px-3 py-1 rounded-full border border-white/20">
                                        {width}mm
                                    </span>
                                    <div className="h-px w-6 bg-slate-600" />
                                </motion.div>
                                <motion.div
                                    className="absolute -right-16 top-1/2 -translate-y-1/2 flex items-center gap-1"
                                    animate={{ opacity: 1 }}
                                >
                                    <span className="text-sm font-bold text-white bg-white/10 backdrop-blur px-3 py-1 rounded-full border border-white/20">
                                        {depth}mm
                                    </span>
                                </motion.div>

                                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                    <span className="text-xs text-slate-400 font-medium">Joint Cross-Section</span>
                                </div>
                            </div>
                        </div>

                        {/* Results Cards */}
                        <div className="space-y-4 relative z-10">
                            {/* Volume Display */}
                            <motion.div
                                className="text-center mb-6 bg-white/5 rounded-2xl p-4 border border-white/10"
                                animate={{ scale: showAnimation ? 1.02 : 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <p className="text-slate-400 text-sm mb-1 font-medium">Total Volume Required</p>
                                <p className="text-5xl font-black text-white tracking-tight">
                                    {result.volumeMl.toLocaleString()}
                                    <span className="text-xl font-normal text-slate-400 ml-2">ml</span>
                                </p>
                            </motion.div>

                            {/* Product Options */}
                            <div className="grid grid-cols-2 gap-3">
                                <motion.div
                                    className="bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                                    animate={{ scale: showAnimation ? 1.02 : 1 }}
                                    transition={{ duration: 0.2, delay: 0.05 }}
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                            <Package className="w-4 h-4 text-slate-400" />
                                        </div>
                                        <span className="text-xs text-slate-400 font-medium">300ml Cartridges</span>
                                    </div>
                                    <p className="text-4xl font-black text-white">{result.cartridges300}</p>
                                    <p className="text-xs text-slate-500 mt-2">
                                        {result.cartons300} carton{result.cartons300 !== 1 ? 's' : ''} <span className="text-slate-600">(24/carton)</span>
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                                    animate={{ scale: showAnimation ? 1.02 : 1 }}
                                    transition={{ duration: 0.2, delay: 0.1 }}
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                            <Box className="w-4 h-4 text-slate-400" />
                                        </div>
                                        <span className="text-xs text-slate-400 font-medium">592ml Sausages</span>
                                    </div>
                                    <p className="text-4xl font-black text-white">{result.sausages592}</p>
                                    <p className="text-xs text-slate-500 mt-2">
                                        {result.cartons592} carton{result.cartons592 !== 1 ? 's' : ''} <span className="text-slate-600">(20/carton)</span>
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        <span className="text-slate-700 font-medium">10% wastage</span> included for nozzle trimming & application loss
                    </p>
                    <Link to="/contact">
                        <Button className="bg-[#000000] hover:bg-[#111111] text-white font-semibold px-6 rounded-full">
                            Get Project Quote
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
