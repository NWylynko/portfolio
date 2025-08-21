"use client"

import { usePathname } from "next/navigation"
import { projects } from "./projects"
import Link from "next/link"

export const Nav = () => {
    const pathname = usePathname()

    return (
        <nav className="px-2">
            <ul className="flex flex-row gap-2 overflow-y-auto">
                {projects.map((project, index) => (
                    <li key={index} data-active={project.urls.includes(pathname)} className="border-t border-x border-dashed rounded-t-2xl mt-1 hover:mt-0 transition-all cursor-pointer data-[active=true]:border-solid data-[active=true]:shadow">
                        <Link href={project.urls[0]} className="px-2 py-1 flex flex-row items-end gap-2">
                            <span className="font-medium text-lg -mb-1 whitespace-nowrap">{project.name}</span>
                            <span className="text-xs text-gray-400">{project.year}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}