import clsx from "clsx";
import { LibraryBig } from "lucide-react";

export function Logo() {
    return (
        <div className="flex items-end">
            <h1 className={clsx(
                "flex flex-col leading-[normal]",
                "text-gray-6 text-lg font-[300]"
            )}>
                Sebo
                <span className="font-[600] pl-2 flex gap-1">
                    Potiguar
                    <LibraryBig className="text-gray-6" size={20} />
                </span>
            </h1>
        </div>
    )
}