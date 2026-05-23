import { FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales | AeviaLive",
  description: "CGU d'AeviaLive — règles d'utilisation pour créateurs et spectateurs.",
  robots: { index: false, follow: false },
};

export default function CGUPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <FileText className="w-7 h-7 text-rose-400 shrink-0" />
          <h1 className="text-3xl font-bold">Conditions Générales d&apos;Utilisation</h1>
        </div>
        <p className="text-xs text-slate-500 mb-8">Dernière mise à jour : 22 mai 2026</p>

        <div className="space-y-10 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Objet</h2>
            <p>
              Les présentes CGU régissent l&apos;utilisation d&apos;AeviaLive, à la fois par les
              créateurs de contenu (streamers) et par les spectateurs (viewers) qui peuvent
              envoyer des dons (tips).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Inscription</h2>
            <p>
              L&apos;accès au service requiert la création d&apos;un compte. L&apos;utilisateur garantit
              l&apos;exactitude des informations fournies et s&apos;engage à ne pas créer plusieurs
              comptes pour contourner une suspension.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Contenu autorisé</h2>
            <p>
              Sont strictement interdits : contenus à caractère sexuel impliquant des mineurs,
              incitations à la haine, violence gratuite, harcèlement, atteintes à la vie privée,
              vente de produits illicites, diffusion de contenus protégés sans autorisation.
              Tout manquement entraîne la suspension immédiate du compte.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Tips (dons)</h2>
            <p>
              Les tips sont des dons volontaires effectués via Stripe. Une commission de 10%
              est prélevée par AeviaLive sur chaque tip pour couvrir les frais de paiement,
              d&apos;hébergement vidéo et de support. Les paiements aux créateurs sont effectués
              hebdomadairement par virement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Droit de rétractation</h2>
            <p>
              Les tips étant des dons exécutés immédiatement, ils ne sont pas remboursables,
              sauf en cas de fraude avérée signalée sous 7 jours.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Modération</h2>
            <p>
              AeviaLive se réserve le droit de suspendre tout compte enfreignant les présentes
              CGU, sans préavis ni remboursement des tips déjà versés.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Droit applicable</h2>
            <p>
              Les présentes CGU sont soumises au droit français. Tout litige relèvera des
              tribunaux français.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
