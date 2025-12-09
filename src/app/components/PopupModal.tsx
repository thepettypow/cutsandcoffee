"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PopupModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem("cc_popup_dismissed");
      if (!dismissed) {
        const timer = setTimeout(() => setOpen(true), 600);
        return () => clearTimeout(timer);
      }
    } catch {}
  }, []);

  const close = () => {
    try { localStorage.setItem("cc_popup_dismissed", "1"); } catch {}
    setOpen(false);
  };

  return (
    <div aria-hidden={!open}>
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={close}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed inset-0 z-[70] grid place-items-center transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="max-w-md w-[92%] text-center relative min-h-[560px] sm:min-h-[640px] p-8 sm:p-10 rounded-2xl border border-white/10 shadow-xl ring-1 ring-[#da724f] bg-[#05203b]">
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute top-3 right-3 inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/10 text-white hover:bg-white/20"
          >
            ×
          </button>
          <div className="grid place-items-center gap-4 min-h-[480px] sm:min-h-[540px]">
            <div className="mb-2 flex justify-center">
              <Image src="/logoCC.png" alt="Cuts & Coffee Membership" width={180} height={180} />
            </div>
            <h2 className="heading-accent !text-2xl sm:!text-4xl">JOIN OUR COMMUNITY!</h2>
            <p className="text-white/80">Become a member to enjoy the benefits of the Cuts & Coffee barber-club.</p>
            <p className="text-white/60">for more info click &quot;Membership&quot;</p>
            <div className="flex flex-col gap-3 mt-2">
              <a href="/about#membership" className="btn btn-primary" aria-label="View membership">MEMBERSHIP</a>
              <a href="https://getsquire.com/booking/book/cuts-and-coffee-calgary/barber/any/services" className="btn btn-primary" aria-label="Book online with any available barber">BOOK NOW</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
