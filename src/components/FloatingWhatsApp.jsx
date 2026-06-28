import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import personal from '@/data/personal';

const waNumber = personal.whatsapp;
const waMessage = personal.waMessageFloating;

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Tooltip popup */}
      {open && (
        <div className="relative w-72 animate-fade-in-up rounded-2xl border border-hairline bg-card p-4 shadow-xl shadow-black/20">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-brand-foreground">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-ink">Feri DW</p>
              <p className="text-xs text-muted-foreground">Web Developer</p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-foreground">
            👋 Ada yang bisa dibantu? Chat langsung via WhatsApp!
          </p>
          <a
            href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-medium text-brand-foreground transition-all hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/25 active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            Mulai Chat
          </a>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg shadow-brand/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-brand/40 active:scale-95"
        aria-label="Chat via WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-20" />
        {/* Icon */}
        {open ? (
          <X className="relative h-6 w-6 transition-transform duration-300 group-hover:rotate-90" />
        ) : (
          <MessageCircle className="relative h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
        )}
      </button>
    </div>
  );
}
