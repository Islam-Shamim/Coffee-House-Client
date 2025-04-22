import React from 'react'

export default function Hero() {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Welcome to Coffee House</h1>
                <p className="py-6">Discover the finest coffee blends from around the world.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
            </div>
        </div>
    )
}
