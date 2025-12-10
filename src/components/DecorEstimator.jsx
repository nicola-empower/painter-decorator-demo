import React, { useState } from 'react';
import {
    Paintbrush, Roller, Palette, Home,
    Banknote, Calendar, Layers, CheckCircle2,
    ArrowRight, ArrowLeft, Image
} from 'lucide-react';

const DecorEstimator = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        workType: '',
        roomCount: '',
        finishType: [],
        timeframe: '',
        name: '',
        email: '',
        phone: '',
        postcode: ''
    });

    const updateData = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const toggleFinish = (option) => {
        setFormData(prev => {
            const current = prev.finishType;
            if (current.includes(option)) {
                return { ...prev, finishType: current.filter(item => item !== option) };
            }
            return { ...prev, finishType: [...current, option] };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Decorating quote request captured!");
    };

    const QuestionStep = ({ title, subtitle, children }) => (
        <div className="animate-fade-in space-y-6">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                <p className="text-gray-500 mt-2">{subtitle}</p>
            </div>
            {children}
        </div>
    );

    return (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-3xl mx-auto border border-gray-100">

            {/* Progress Bar */}
            <div className="bg-indigo-50 px-8 py-4 border-b border-indigo-100 flex justify-between items-center">
                <span className="text-sm font-semibold text-indigo-700 tracking-wider uppercase">
                    Step {step} of 5
                </span>
                <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                        style={{ width: `${(step / 5) * 100}%` }}
                    />
                </div>
            </div>

            <div className="p-8 md:p-12 min-h-[400px] flex flex-col justify-center">

                {/* Step 1: Work Type */}
                {step === 1 && (
                    <QuestionStep
                        title="What needs painting?"
                        subtitle="Select the scope of your project."
                    >
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { icon: Home, label: 'Interior Rooms', value: 'interior' },
                                { icon: Sun, label: 'Exterior Facade', value: 'exterior' }, // Need Sun imported if using
                                { icon: Roller, label: 'Kitchen Cabinets', value: 'cabinets' },
                                { icon: Palette, label: 'Full Property', value: 'full' }
                            ].map((opt) => (
                                <button
                                    key={opt.value}
                                    onClick={() => { updateData('workType', opt.value); nextStep(); }}
                                    className={`p-6 rounded-xl border-2 transition-all flex items-center gap-4 text-left group hover:shadow-md
                    ${formData.workType === opt.value
                                            ? 'border-indigo-600 bg-indigo-50'
                                            : 'border-gray-100 hover:border-indigo-200'}`}
                                >
                                    <div className={`p-3 rounded-full ${formData.workType === opt.value ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-500 group-hover:text-indigo-600 group-hover:bg-indigo-50'}`}>
                                        <opt.icon size={24} />
                                    </div>
                                    <span className="font-semibold text-gray-900 text-lg">{opt.label}</span>
                                </button>
                            ))}
                        </div>
                    </QuestionStep>
                )}

                {/* Step 2: Room Count / Scope */}
                {step === 2 && (
                    <QuestionStep
                        title="How big is the job?"
                        subtitle="Estimate the number of rooms or areas involved."
                    >
                        <div className="space-y-4">
                            {['Single Room / Small Area', '2-3 Rooms', '4-5 Rooms', 'Whole House'].map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => { updateData('roomCount', opt); nextStep(); }}
                                    className={`w-full p-5 rounded-xl border-2 transition-all flex items-center justify-between group hover:shadow-md
                    ${formData.roomCount === opt
                                            ? 'border-indigo-600 bg-indigo-50'
                                            : 'border-gray-100 hover:border-indigo-200'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <Home className={`${formData.roomCount === opt ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600'}`} />
                                        <span className="font-bold text-gray-900 text-lg">{opt}</span>
                                    </div>
                                    <ArrowRight className={`opacity-0 group-hover:opacity-100 transition-opacity ${formData.roomCount === opt ? 'text-indigo-600 opacity-100' : 'text-gray-400'}`} />
                                </button>
                            ))}
                        </div>
                        <button onClick={prevStep} className="mt-8 flex items-center gap-2 text-gray-400 hover:text-gray-600 font-medium">
                            <ArrowLeft size={16} /> Back
                        </button>
                    </QuestionStep>
                )}

                {/* Step 3: Finish Types */}
                {step === 3 && (
                    <QuestionStep
                        title="What finishes do you need?"
                        subtitle="Select any specific requirements."
                    >
                        <div className="grid md:grid-cols-2 gap-4">
                            {['Walls & Ceilings', 'Woodwork (Doors/Trim)', 'Wallpaper Hanging', 'Feature Wall', 'Spray Finishing', 'Plastering Repair'].map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => toggleFinish(opt)}
                                    className={`p-5 rounded-xl border-2 transition-all flex items-center gap-4 text-left
                    ${formData.finishType.includes(opt)
                                            ? 'border-indigo-600 bg-indigo-50 ring-1 ring-indigo-600'
                                            : 'border-gray-100 hover:border-indigo-200'}`}
                                >
                                    <div className={`h-6 w-6 rounded border flex items-center justify-center transition-colors 
                    ${formData.finishType.includes(opt) ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-gray-300 bg-white'}`}>
                                        {formData.finishType.includes(opt) && <CheckCircle2 size={14} />}
                                    </div>
                                    <span className="font-semibold text-gray-700">{opt}</span>
                                </button>
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-8">
                            <button onClick={prevStep} className="flex items-center gap-2 text-gray-400 hover:text-gray-600 font-medium">
                                <ArrowLeft size={16} /> Back
                            </button>
                            <button
                                onClick={nextStep}
                                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-lg flex items-center gap-2"
                            >
                                Continue <ArrowRight size={20} />
                            </button>
                        </div>
                    </QuestionStep>
                )}

                {/* Step 4: Timeline */}
                {step === 4 && (
                    <QuestionStep
                        title="When do you need the work done?"
                        subtitle="We book up quickly, so earlier is better."
                    >
                        <div className="space-y-4">
                            {['ASAP (Next 2-4 weeks)', 'Within 2 Months', 'Flexible / Future'].map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => { updateData('timeframe', opt); nextStep(); }}
                                    className={`w-full p-5 rounded-xl border-2 transition-all flex items-center justify-between group hover:shadow-md
                    ${formData.timeframe === opt
                                            ? 'border-indigo-600 bg-indigo-50'
                                            : 'border-gray-100 hover:border-indigo-200'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <Calendar className={`${formData.timeframe === opt ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600'}`} />
                                        <span className="font-bold text-gray-900 text-lg">{opt}</span>
                                    </div>
                                    <ArrowRight className={`opacity-0 group-hover:opacity-100 transition-opacity ${formData.timeframe === opt ? 'text-indigo-600 opacity-100' : 'text-gray-400'}`} />
                                </button>
                            ))}
                        </div>
                        <button onClick={prevStep} className="mt-8 flex items-center gap-2 text-gray-400 hover:text-gray-600 font-medium">
                            <ArrowLeft size={16} /> Back
                        </button>
                    </QuestionStep>
                )}

                {/* Step 5: Contact Details */}
                {step === 5 && (
                    <QuestionStep
                        title="Get Your Free Quote"
                        subtitle="We'll prepare a detailed estimate based on your answers."
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.name}
                                        onChange={e => updateData('name', e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all"
                                        placeholder="e.g. Alex Decor"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={e => updateData('email', e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all"
                                        placeholder="alex@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        required
                                        type="tel"
                                        value={formData.phone}
                                        onChange={e => updateData('phone', e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all"
                                        placeholder="07700 900 123"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Project Postcode</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.postcode}
                                        onChange={e => updateData('postcode', e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all"
                                        placeholder="e.g. W1..."
                                    />
                                </div>
                            </div>

                            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:border-indigo-400 hover:bg-indigo-50 transition-all">
                                <Image className="mx-auto text-gray-400 mb-2" size={32} />
                                <p className="text-sm font-medium text-gray-600">Optional: Upload Inspiration Images</p>
                                <p className="text-xs text-gray-400 mt-1">PDF, JPG, PNG up to 10MB</p>
                            </div>

                            <div className="flex justify-between items-center mt-8">
                                <button type="button" onClick={prevStep} className="flex items-center gap-2 text-gray-400 hover:text-gray-600 font-medium">
                                    <ArrowLeft size={16} /> Back
                                </button>
                                <button
                                    type="submit"
                                    className="bg-indigo-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-xl flex items-center gap-2 text-lg"
                                >
                                    Request Quote
                                </button>
                            </div>

                        </form>
                    </QuestionStep>
                )}

            </div>
        </div>
    );
};
import { Sun } from 'lucide-react'; // Adding Sun import manual fix

export default DecorEstimator;
