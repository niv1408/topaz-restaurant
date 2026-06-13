import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Topaz Restaurant & Banquets | Luxury Fine Dining in Ahmedabad",
  description: "Experience the ultimate vegetarian fine-dining and grand banquets at Topaz Restaurant in Ahmedabad. Featuring North Indian, Chinese, Italian, Continental, Special Thalis, and majestic event venues.",
  keywords: "Topaz Restaurant, Banquets Ahmedabad, Vegetarian Fine Dining, Weddings, Celebrations, CG Road Ahmedabad",
  authors: [{ name: "Topaz Restaurant" }],
  openGraph: {
    title: "Topaz Restaurant & Banquets | Luxury Fine Dining in Ahmedabad",
    description: "Experience the ultimate vegetarian fine-dining and grand banquets at Topaz Restaurant in Ahmedabad.",
    type: "website",
    locale: "en_IE",
    url: "https://topaz-restaurant.vercel.app",
    siteName: "Topaz Restaurant & Banquets",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Schema Markup for Restaurant SEO
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Topaz Restaurant & Banquets",
    "image": "https://topaz-restaurant.vercel.app/images/restaurant-front.jpg",
    "@id": "https://topaz-restaurant.vercel.app",
    "url": "https://topaz-restaurant.vercel.app",
    "telephone": "+917926402640",
    "priceRange": "$$",
    "menu": "https://topaz-restaurant.vercel.app/#menu",
    "servesCuisine": "Indian, Vegetarian, Fine Dining, Banquet, Chinese, Italian, Continental",
    "acceptsReservations": "true",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Gold Coins Crossing, CG Road, Navrangpura",
      "addressLocality": "Ahmedabad",
      "postalCode": "380009",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.0248,
      "longitude": 72.5583
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "11:00",
        "closes": "23:00"
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="min-h-screen antialiased transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
