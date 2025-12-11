import React from 'react';
import { Star } from 'lucide-react';

const defaultReviews = [
    {
        text: "The transformation of our hallway is incredible. But what impressed me most was the dust-free sanding. I was dreading the cleanup, but there wasn't any!",
        author: "James & Sarah",
        location: "Gosforth",
        rating: 5,
        role: "Heritage Restoration"
    },
    {
        text: "I was going to buy a new kitchen, but Chroma Decor sprayed my old oak cabinets in a dark navy. It looks like a £20,000 showroom kitchen. Stunning.",
        author: "Helen R.",
        location: "Durham",
        rating: 5,
        role: "Kitchen Transformation"
    },
    {
        text: "Immaculate finish and respectful of our home. The team worked quietly and left everything spotless every evening.",
        author: "David M.",
        location: "Jesmond",
        rating: 5,
        role: "Interior Decorating"
    }
];

const Testimonials = ({ reviews = defaultReviews }) => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-accent">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Flawless Results, Zero Mess
                    </p>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {reviews.map((review, index) => (
                        <div key={index} className="flex flex-col justify-between bg-white p-8 shadow-sm ring-1 ring-gray-900/5 sm:rounded-2xl sm:p-10 hover:shadow-md transition-shadow">
                            <div className="flex gap-1 mb-4 text-accent">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <blockquote className="text-gray-900 text-lg leading-8 grow">
                                <p>“{review.text}”</p>
                            </blockquote>
                            <div className="mt-8 flex items-center gap-x-4">
                                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500">
                                    {review.author.charAt(0)}
                                </div>
                                <div className="text-sm leading-6">
                                    <div className="font-semibold text-gray-900">{review.author}</div>
                                    <div className="text-gray-600">{review.role || review.location}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
