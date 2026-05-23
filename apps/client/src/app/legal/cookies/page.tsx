import { Cookie } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies | AeviaLive",
  description: "Politique cookies AeviaLive.",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <Cookie className="w-7 h-7 text-rose-400 shrink-0" />
          <h1 className="text-3xl font-bold">Politique cookies</h1>
        </div>
        <p className="text-xs text-slate-500 mb-8">Dernière mise à jour : 22 mai 2026</p>

        <div className="space-y-10 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Cookies utilisés</h2>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Strictement nécessaires</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><code className="bg-slate-900 px-2 py-0.5 rounded text-xs">accessToken</code> — authentification (12h)</li>
              <li><code className="bg-slate-900 px-2 py-0.5 rounded text-xs">refreshToken</code> — renouvellement de session (7 jours)</li>
              <li><code className="bg-slate-900 px-2 py-0.5 rounded text-xs">aevia-consent</code> — choix cookies (12 mois)</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">Tiers (paiement)</h3>
            <p>
              Stripe dépose ses propres cookies lors des transactions de tips. Voir leur{" "}
              <a href="https://stripe.com/cookies-policy/legal" target="_blank" rel="noopener noreferrer" className="text-rose-400 underline">
                politique cookies
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Gérer vos préférences</h2>
            <p>
              Vous pouvez à tout moment ajuster vos préférences cookies dans les paramètres de
              votre navigateur. Les cookies strictement nécessaires ne peuvent pas être désactivés
              sans casser le fonctionnement du service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              <a href="mailto:hello@aevia.io" className="text-rose-400 underline">hello@aevia.io</a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
