'use client'

import { useKeenSlider } from "keen-slider/react"


import product from '@/assets/book.jpg'
import Image from 'next/image'
import clsx from "clsx";
import { useState } from "react";

const zzz = [1, 2, 3, 4, 5, 6]


export function GenreSlider() {
    const [currentProduct, setCurrentProduct] = useState(1)

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 4,
            origin: 'center'
        },
        slideChanged(slider) {
            setCurrentProduct(slider.track.details.rel + 1)
        }
    })


    return (
        <div className="relative w-full mx-auto">
            {/* <div ref={sliderRef} className="keen-slider overflow-hidden flex">
                {
                    zzz.map((_, idx) => (
                        <div
                            aria-selected={currentProduct === idx + 1}
                            className={clsx(
                                `keen-slider__slide number-slide${idx}`,
                                "aria-[selected=true]:opacity-100 opacity-50 grid place-items-center"
                            )}>
                            <Image
                                src={product}
                                alt='Foto do livro'
                                width={200}
                                height={300}
                                onClick={() => instanceRef?.current?.moveToIdx(idx)}
                            />
                        </div>
                    ))
                }
            </div> */}
        </div>
    )
}