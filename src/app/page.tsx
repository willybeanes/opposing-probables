import { fetchProbablesData } from "@/lib/fetch-probables";
import { Grid } from "./grid";

export const revalidate = 10800; // 3 hours

export default async function Home() {
  const data = await fetchProbablesData();

  return (
    <main className="min-h-screen bg-bg">
      <header className="border-b border-border bg-surface px-4 py-3 sm:px-6">
        <div className="mx-auto max-w-[1600px]">
          <h1 className="text-xl font-bold text-text-primary sm:text-2xl">
            Opposing Probables Grid
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6">
        <Grid data={data} />
        <footer className="mt-6 text-center text-xs text-text-muted">
          Data from FanGraphs &middot; Updated{" "}
          {new Date(data.lastUpdated).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            timeZoneName: "short",
          })}
        </footer>
      </div>
    </main>
  );
}
