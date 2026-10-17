import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/config/site";

const CONTACT = "mohamedtamer200200@gmail.com";
const EFFECTIVE = "18 October 2026";

export const metadata: Metadata = {
  title: "Atlas — Privacy Policy",
  description:
    "Privacy policy for Atlas, a private tool Mohamed Tamer uses to read Gmail metadata counts for his own accounts.",
  alternates: { canonical: `${siteConfig.url}/privacy/atlas` },
  robots: { index: true, follow: true },
};

export default function AtlasPrivacyPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16">
      <article className="mx-auto max-w-2xl space-y-6 leading-relaxed">
        <header className="space-y-2">
          <p className="text-sm text-muted-foreground">Effective {EFFECTIVE}</p>
          <h1 className="font-display text-3xl">Atlas — Privacy Policy</h1>
        </header>

        <section className="space-y-2">
          <h2 className="font-display text-xl">What Atlas is</h2>
          <p>
            Atlas is a private tool that Mohamed Tamer runs on his own computer to keep an overview
            of his own accounts. It is not offered to the public, and the only Google accounts it
            connects to are his own.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-xl">What it reads from Google</h2>
          <p>
            Atlas uses the Gmail API with the read-only <code>gmail.metadata</code> scope. It reads
            message labels and headers, never message bodies or attachments, and it cannot send,
            change or delete email.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-xl">What it keeps</h2>
          <p>
            Headers are read in memory and are not stored. Atlas stores only daily totals: messages
            received and sent, counts per Gmail category, starred and unread counts and
            security-alert counts, plus, for the personal account, the most frequent sender domains.
            These totals stay on the owner&apos;s computer and in his private repository.
          </p>
          <p>
            Access tokens are kept in the macOS Keychain. Nothing is shared with, sold to or
            disclosed to anyone else, and nothing is used for advertising or to train AI models.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-xl">Google API Services User Data Policy</h2>
          <p>
            Atlas&apos;s use of information received from Google APIs adheres to the{" "}
            <a
              className="underline underline-offset-4"
              href="https://developers.google.com/terms/api-services-user-data-policy"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google API Services User Data Policy
            </a>
            , including its Limited Use requirements.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-xl">Removing access</h2>
          <p>
            Access can be revoked at any time from{" "}
            <a
              className="underline underline-offset-4"
              href="https://myaccount.google.com/permissions"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google Account → Third-party connections
            </a>
            . Stored totals can be deleted from the owner&apos;s repository on request.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-xl">Contact</h2>
          <p>
            Questions:{" "}
            <a className="underline underline-offset-4" href={`mailto:${CONTACT}`}>
              {CONTACT}
            </a>
          </p>
        </section>

        <p className="pt-4">
          <Link className="text-sm text-muted-foreground underline underline-offset-4" href="/">
            ← Back to mohamedtamer.me
          </Link>
        </p>
      </article>
    </main>
  );
}
