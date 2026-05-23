"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const CONSENT_KEY = "aevia-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
    } catch {
      // ignore
    }
  }, []);

  if (!visible) return null;

  const handle = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Consentement cookies"
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-4xl bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-zinc-300 text-sm leading-relaxed">
            Nous utilisons uniquement des cookies fonctionnels nécessaires au service
            (authentification, sécurité, paiement). Aucun cookie de tracking sans
            votre accord.{" "}
            <Link
              href="/legal/cookies"
              className="text-rose-400 hover:text-rose-300 underline underline-offset-2 transition-colors"
            >
              En savoir plus
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => handle("declined")}
            className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={() => handle("accepted")}
            className="px-4 py-2 text-sm bg-rose-600 hover:bg-rose-500 text-white font-medium rounded-lg transition-colors"
          >
            Accepter
          </button>
          <button
            onClick={() => handle("declined")}
            aria-label="Fermer"
            className="ml-1 p-1 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
