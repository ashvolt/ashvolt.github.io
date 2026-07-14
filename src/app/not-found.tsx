import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-4 py-32 sm:px-6">
      <p className="font-mono text-sm text-accent-500">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Page not found</h1>
      <p className="mt-3 text-muted">
        This route doesn&apos;t exist — but the interesting stuff is one click away.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-500"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back home
      </Link>
    </div>
  );
}
