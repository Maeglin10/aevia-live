import { Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | AeviaLive",
  description: "Mentions légales d'AeviaLive — plateforme de live streaming.",
  robots: { index: false, follow: false },
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <Shield className="w-7 h-7 text-rose-400 shrink-0" />
          <h1 className="text-3xl font-bold">Mentions légales</h1>
        </div>
        <p className="text-xs text-slate-500 mb-8">Dernière mise à jour : 22 mai 2026</p>

        <div className="space-y-10 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Éditeur</h2>
            <ul className="space-y-1 pl-4 border-l border-slate-700">
              <li><span className="text-slate-400">Nom :</span> Valentin Milliand</li>
              <li><span className="text-slate-400">Statut :</span> Auto-entrepreneur</li>
              <li><span className="text-slate-400">Pays :</span> France</li>
              <li><span className="text-slate-400">Contact :</span> <a href="mailto:hello@aevia.io" className="text-rose-400 underline">hello@aevia.io</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Service</h2>
            <p>
              AeviaLive est une plateforme de diffusion en direct (live streaming) permettant
              aux créateurs de retransmettre du contenu vidéo et de recevoir des dons (tips)
              de leurs spectateurs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Hébergement</h2>
            <p>
              Hébergé par Vercel Inc. (340 S Lemon Ave #4133, Walnut CA 91789, USA) et
              Cloudflare Inc. (101 Townsend St, San Francisco CA 94107, USA) pour la
              distribution vidéo (CDN/HLS).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Propriété intellectuelle</h2>
            <p>
              Le code source, le design et l&apos;interface d&apos;AeviaLive sont la propriété exclusive
              de Valentin Milliand. Les contenus diffusés par les créateurs restent la propriété
              de ces derniers, qui en garantissent les droits.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Signalement de contenu</h2>
            <p>
              Tout contenu inapproprié, illicite ou contrevenant aux conditions d&apos;utilisation
              peut être signalé à <a href="mailto:hello@aevia.io" className="text-rose-400 underline">hello@aevia.io</a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
