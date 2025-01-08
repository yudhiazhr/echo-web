import { Roboto } from "next/font/google";
import "./globals.css";
import { icons } from "lucide-react";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata = {
  title: "ECHO®",
  description: "echo.fun",
  icons: {
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
