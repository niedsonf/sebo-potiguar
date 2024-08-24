import { Edu_VIC_WA_NT_Beginner } from "next/font/google";
import { GenreSlider } from "@/components/genre-slider";
import clsx from "clsx";

const Edu = Edu_VIC_WA_NT_Beginner({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="grow py-8 flex flex-col gap-12">
            <div className="flex flex-col gap-2 max-w-7xl w-full mx-auto">
                <h2 className={clsx(
                    "text-4xl text-green-300 pl-4",
                    Edu.className
                )}>
                    Acadêmicos
                </h2>
                <GenreSlider />
            </div>
            <div className="flex flex-col gap-2 max-w-7xl w-full mx-auto">
                <h2 className={clsx(
                    "text-4xl text-green-300 pl-4",
                    Edu.className
                )}>
                    Literários
                </h2>
                <GenreSlider />
            </div>
            <div className="flex flex-col gap-2 max-w-7xl w-full mx-auto">
                <h2 className={clsx(
                    "text-4xl text-green-300 pl-4",
                    Edu.className
                )}>
                    Mangás
                </h2>
                <GenreSlider />
            </div>
        </div>
    );
}
