import { redirect } from "next/navigation";

export const dynamic = "force-static";

export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminRedirect() {
  redirect(
    "https://www.sanity.io/@oNt3BAvtt/studio/tek9n1o3ehb9lct78x8uexu6/default/presentation?dashboard.showTour=true"
  );
}

