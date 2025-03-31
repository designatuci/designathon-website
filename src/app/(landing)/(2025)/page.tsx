import Landing2025 from "@components/seasons/2025/landing/landing-2025";
import { Suspense } from "react";

export default function LandingPage() {
  // To archive the 2025 pages, create an /archive/2025 folder and move the pages there to keep them for future reference.
  return (
    <Suspense>
      <Landing2025 />
    </Suspense>
  );
}
