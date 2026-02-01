"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryProps } from "@/types";

export default function Gallery({ images }: GalleryProps) {
    const [selected, setSelected] = useState(0);

    return (
        <div className="my-8">
            {/** Main large image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
                <Image  
                    src={images[selected].src}
                    alt={images[selected].alt}
                    fill
                    className="object-cover"
                />
            </div>


            {/** Thumbnails row */}
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {images.map((img, i) => (
                    <button
                        key={img.src}
                        onClick={() => setSelected(i)}
                        className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                        i === selected ? 'border-accent scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                    >
                        <Image 
                            src={img.src}
                            alt={img.alt}
                            width={120}
                            height={80}
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
