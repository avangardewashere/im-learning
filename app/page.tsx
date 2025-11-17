import Header from "@/components/Header";

// Force static generation for better performance
export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour (ISR)

// Generate metadata for this page
export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}
