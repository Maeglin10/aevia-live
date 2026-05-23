import { Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confidentialité | AeviaLive",
  description: "Politique de confidentialité d'AeviaLive — RGPD.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <Shield className="w-7 h-7 text-rose-400 shrink-0" />
          <h1 className="text-3xl font-bold">Politique de confidentialité</h1>
        </div>
        <p className="text-xs text-slate-500 mb-8">Dernière mise à jour : 22 mai 2026</p>

        <div className="space-y-10 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Responsable du traitement</h2>
            <p>
              Valentin Milliand (auto-entrepreneur). Contact :{" "}
              <a href="mailto:hello@aevia.io" className="text-rose-400 underline">hello@aevia.io</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Données collectées</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Compte : email, nom, mot de passe haché, photo de profil</li>
              <li>Streaming : titre du live, catégorie, durée, statistiques d&apos;audience</li>
              <li>Tips : historique des dons (montants, dates, créateurs)</li>
              <li>Paiement : géré par Stripe — aucune donnée carte stockée</li>
              <li>Techniques : adresse IP, user-agent, logs (30 jours)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Sous-traitants</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Vercel (hébergement) — Standard Contractual Clauses</li>
              <li>Cloudflare (CDN/diffusion vidéo) — USA</li>
              <li>Stripe (paiement, tips, payouts créateurs) — Irlande/USA</li>
              <li>AWS S3 (stockage vidéos enregistrées) — Europe</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Durée de conservation</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Compte actif : durée d&apos;utilisation</li>
              <li>Compte inactif : 3 ans</li>
              <li>Tips et facturation : 10 ans (obligation légale)</li>
              <li>Lives enregistrés : 90 jours (sauf opt-in archivage)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Vos droits (RGPD)</h2>
            <p>
              Accès, rectification, effacement, portabilité, opposition.
              Contactez <a href="mailto:hello@aevia.io" className="text-rose-400 underline">hello@aevia.io</a>.
              Recours possible auprès de la CNIL (cnil.fr).
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
