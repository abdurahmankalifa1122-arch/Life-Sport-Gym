import React, { useState } from 'react';
import { Phone, MapPin, Copy, Check, ChevronDown, MessageSquare, AlertCircle, Dumbbell } from 'lucide-react';
import { GYM_INFO, FAQS } from '../data/gymData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(FAQS[0]?.id || null);

  // Quick inquiry message composer state
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryTopic, setInquiryTopic] = useState('Monthly Membership Price');
  const [inquiryTime, setInquiryTime] = useState('Morning (6 AM - 11 AM)');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(GYM_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleQuickInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0D1017] border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-extrabold tracking-[0.2em] uppercase font-heading bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20 inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight uppercase">
            CONTACT <span className="text-amber-400">LIFE SPORT GYM</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Have questions about membership rates, personal training, or workout hours? Call our front desk directly in Bole, Addis Ababa.
          </p>
        </div>

        {/* Main 2-Column Section: Direct Call Box + FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Direct Phone CTA & Inquiry Helper */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Primary Phone Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#141822] via-[#12151C] to-[#0B0D11] border-2 border-amber-500/60 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Dumbbell className="w-48 h-48 text-amber-500" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] font-bold text-amber-400 uppercase font-heading mb-4">
                  <Phone className="w-3.5 h-3.5" />
                  Direct Telephone Line
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading uppercase">
                  CALL LIFE SPORT GYM
                </h3>
                <p className="text-xs text-neutral-300 mt-1 mb-6">
                  Speak directly with our Bole staff for verified membership rates and schedule.
                </p>

                {/* Big Phone Number Box */}
                <div className="p-5 rounded-xl bg-neutral-950/80 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest block font-heading">
                      Telephone (Addis Ababa)
                    </span>
                    <a
                      href={`tel:${GYM_INFO.phoneRaw}`}
                      className="text-2xl sm:text-3xl font-extrabold text-amber-400 hover:text-amber-300 transition font-heading tracking-wide block"
                    >
                      {GYM_INFO.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <a
                      href={`tel:${GYM_INFO.phoneRaw}`}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg text-xs uppercase tracking-wider font-heading transition shadow-lg"
                    >
                      <Phone className="w-4 h-4 fill-black" />
                      Call Now
                    </a>

                    <button
                      onClick={handleCopyPhone}
                      className="p-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-700 transition"
                      title="Copy phone number"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Location Quick Info */}
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>
                    <strong className="text-neutral-200">Life Sport Gym</strong> • Bole, Addis Ababa, Ethiopia
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Note Helper */}
            <div className="p-6 rounded-2xl bg-[#12151C] border border-neutral-800 shadow-xl">
              <h4 className="text-sm font-bold text-white uppercase font-heading mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-amber-400" />
                Prepare Your Phone Inquiry
              </h4>
              <p className="text-xs text-neutral-400 mb-4">
                When calling, mention your preferred training times and membership goals to receive instant guidance.
              </p>

              {!inquirySubmitted ? (
                <form onSubmit={handleQuickInquirySubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-300 uppercase font-heading mb-1">
                      Inquiry Topic:
                    </label>
                    <select
                      value={inquiryTopic}
                      onChange={(e) => setInquiryTopic(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="Monthly Membership Price">Monthly Membership Price (ETB)</option>
                      <option value="3-Month Membership Plan">3-Month Membership Plan</option>
                      <option value="Personal Trainer Availability">Personal Trainer Availability</option>
                      <option value="Guest Pass / Day Visit">Guest Pass / Day Visit</option>
                      <option value="Operating Hours in Bole">Operating Hours in Bole</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-neutral-300 uppercase font-heading mb-1">
                      Preferred Workout Time:
                    </label>
                    <select
                      value={inquiryTime}
                      onChange={(e) => setInquiryTime(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="Morning (6 AM - 11 AM)">Morning (6 AM - 11 AM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
                      <option value="Weekends">Weekends</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider font-heading transition mt-2"
                  >
                    Generate Call Summary
                  </button>
                </form>
              ) : (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-neutral-200">
                  <p className="font-bold text-amber-400 font-heading uppercase mb-1">
                    Ready to Call!
                  </p>
                  <p className="text-[11px] text-neutral-300 leading-relaxed mb-3">
                    Call <strong>{GYM_INFO.phone}</strong> and mention: <em>"Hello, I am inquiring about the <strong>{inquiryTopic}</strong> for <strong>{inquiryTime}</strong> sessions at Life Sport Gym Bole."</em>
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={`tel:${GYM_INFO.phoneRaw}`}
                      className="flex-1 text-center py-2 rounded-lg bg-amber-500 text-black font-bold font-heading uppercase text-xs"
                    >
                      Dial Now
                    </a>
                    <button
                      onClick={() => setInquirySubmitted(false)}
                      className="px-3 py-2 rounded-lg bg-neutral-800 text-neutral-300 text-xs"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Frequently Asked Questions (FAQ) Accordion */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-2xl bg-[#12151C] border border-neutral-800 shadow-2xl">
              <div className="mb-6">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider font-heading block">
                  Helpful Information
                </span>
                <h3 className="text-2xl font-bold text-white font-heading uppercase mt-1">
                  FREQUENTLY ASKED <span className="text-amber-400">QUESTIONS</span>
                </h3>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="rounded-xl border border-neutral-800 bg-neutral-900/60 overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-neutral-200 hover:text-amber-400 font-heading uppercase transition"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-neutral-400 transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? 'rotate-180 text-amber-400' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 text-xs text-neutral-400 leading-relaxed border-t border-neutral-800/80 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
