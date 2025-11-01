"use client";

import { ThemeProvider } from "next-themes";
import { ChatbotUIContextProvider } from "@/context/context";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// ✅ This makes the entire app run in guest mode
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ChatbotUIContextProvider
            initialUser={{
              id: "guest",
              email: "guest@demo.com",
              name: "Guest",
            }}
            initialWorkspace={{
              id: "guest-workspace",
              name: "Guest Workspace",
              is_home: true,
              user_id: "guest",
            }}
          >
            {children}
            <Toaster />
          </ChatbotUIContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
