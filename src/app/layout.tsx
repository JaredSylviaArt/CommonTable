import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-gray-50`}>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        
        {/* Main Content Area */}
        <div className="flex flex-1">
          <Sidebar />
          
          {/* Main Content */}
          <main className="flex-1 bg-white">
            {children}
          </main>
        </div>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          
          {/* Main Content Area */}
          <div className="flex flex-1">
            <Sidebar />
            
            {/* Main Content */}
            <main className="flex-1 bg-white">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
