import NextTopLoader from "nextjs-toploader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextTopLoader
        color="#4b0082"
        initialPosition={0.08}
        crawlSpeed={200}
        height={5}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #4b0082,0 0 5px #4b0082"
        zIndex={3000}
      />
      {children}
    </>
  );
}
