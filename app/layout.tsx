"use client";
import "../assets/scss/themes.scss";
import { Providers } from "@/redux/provider";
import { SnackbarProvider } from "notistack";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body>
        <SnackbarProvider
          autoHideDuration={4000}
          maxSnack={2}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Providers>{children}</Providers>
        </SnackbarProvider>
      </body>
    </html>
  );
}
