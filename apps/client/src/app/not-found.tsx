import Link from "next/link";
import { Radio, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 mb-6">
          <Radio className="w-8 h-8 text-rose-400" />
        </div>
        <p className="text-xs font-mono text-slate-500 tracking-widest uppercase mb-3">404</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Stream introuvable</h1>
        <p className="text-slate-400 mb-8">
          Ce live n&apos;existe pas ou est terminé. Explorez les créateurs en direct.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Découvrir les lives
        </Link>
      </div>
    </div>
  );
}
