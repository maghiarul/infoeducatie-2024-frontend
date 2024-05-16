import type { Metadata } from "next";
import { CookiesProvider } from "next-client-cookies/server";

export const metadata: Metadata = {
  title: "Prime Tech",
  description: "Platforma ta favorita pentru a invata Javascript !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CookiesProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </CookiesProvider>
  );
}
