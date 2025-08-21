import { Nav } from "./Nav";

export default function ProjectsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="p-4 pt-2 h-svh w-svw flex flex-col">
            <Nav />
            <main className="p-4 border rounded shadow h-full w-full">{children}</main>
        </div>
    );
}
