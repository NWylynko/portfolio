import { Nav } from "./Nav";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-4 pt-2 h-svh w-svw flex flex-col">
      <Nav />
      <main className="border border-gray-600 rounded-md shadow size-full background-pattern">
        {children}
      </main>
    </div>
  );
}
