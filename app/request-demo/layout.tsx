import "../brand-theme.css";

export default function RequestDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-page text-white">{children}</div>;
}
