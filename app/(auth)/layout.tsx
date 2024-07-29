import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "DogZone!",
  description: "Dog sales and Adoption",
};


import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <ClerkProvider>
     <html lang="en">
      <body className=" open-sans">{children}</body>
    </html>
   </ClerkProvider>
  )
}
