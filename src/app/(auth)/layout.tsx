import { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Authentication",
  icons: "/globe.svg"
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main>{children}</main>
      <Toaster position="top-right"/>
    </div>
  );
}
