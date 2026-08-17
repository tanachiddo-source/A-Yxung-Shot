import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, Calendar, Clock, MapPin, Users, DollarSign, Sparkles, Copy, Check } from 'lucide-react';
import { BookingInquiry } from '../types';

interface BookingPageProps {
  preselectedService?: string;
  onInquirySubmitted: (inquiry: BookingInquiry) => void;
  inquiries: BookingInquiry[];
}

export const BookingPage: React.FC<BookingPageProps> = ({
  preselectedService,
  onInquirySubmitted,
  inquiries
}) => {
  const serviceOptions = [
    'Portrait',
    'Graduation',
    'Couple',
    'Wedding',
    'Event',
    'Commercial / Brand',
    'Creative Shoot',
    'Other'
  ];

  const budgetOptions = [
    'R 3,500 – R 6,000 (Individual / Session)',
    'R 6,000 – R 12,000 (Small Brand / Celebration)',
    'R 12,000 – R 25,000 (Wedding / Full Day Campaign)',
    'R 25,000+ (Multi-Day Production / Custom Campaign)',
    'Flexible / Seeking Consultation'
  ];

  const referralOptions = [
    'Instagram / Social Media',
    'Word of Mouth / Referral',
    'Editorial Magazine / Publication',
    'TGS Creative Ecosystem',
    'Past Client Collaboration',
    'Other'
  ];

  // Form State
  const [serviceType, setServiceType] = useState<string>(() => {
    if (preselectedService) {
      const match = serviceOptions.find(opt => 
        preselectedService.toLowerCase().includes(opt.toLowerCase())
      );
      return match || 'Portrait';
    }
    return 'Portrait';
  });

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (Golden Hour)');
  const [location, setLocation] = useState('Cape Town (Studio or Location)');
  const [guestCount, setGuestCount] = useState('1–2 People');
  const [duration, setDuration] = useState('Half-Day (Up to 4 hours)');
  const [budgetRange, setBudgetRange] = useState(budgetOptions[0]);
  const [visionDetails, setVisionDetails] = useState('');
  const [referralSource, setReferralSource] = useState(referralOptions[0]);

  const [submittedInquiry, setSubmittedInquiry] = useState<BookingInquiry | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      const match = serviceOptions.find(opt => 
        preselectedService.toLowerCase().includes(opt.toLowerCase())
      );
      if (match) setServiceType(match);
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email) {
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const code = `AYS-BOOK-${Date.now().toString().slice(-4)}-${randomSuffix}`;

    const newInquiry: BookingInquiry = {
      id: `inq-${Date.now()}`,
      referenceNumber: code,
      serviceType,
      fullName,
      email,
      phone,
      preferredDate: preferredDate || 'Flexible / To be confirmed',
      preferredTime,
      location,
      guestCount,
      duration,
      budgetRange,
      visionDetails,
      referralSource,
      createdAt: new Date().toISOString(),
      status: 'Received'
    };

    onInquirySubmitted(newInquiry);
    setSubmittedInquiry(newInquiry);
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div id="booking-page" className="pt-28 md:pt-36 pb-32 px-6 md:px-12 max-w-7xl mx-auto bg-white">
      {/* Header Section */}
      <div className="pb-10 border-b border-ink flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 font-mono">
              Commission &amp; Scheduling
            </span>
            <div className="w-8 h-[1px] bg-[#1A1A1A] opacity-40"></div>
          </div>
          <h1 className="serif text-5xl md:text-7xl lg:text-8xl tracking-tighter-tight text-[#1A1A1A]">
            BOOK / START A PROJECT
          </h1>
        </div>
        <p className="serif italic text-base md:text-xl opacity-75 max-w-md text-[#1A1A1A]">
          Direct dialogue for editorial commissions, intimate portraits, weddings and visual campaigns.
        </p>
      </div>

      {/* Booking Layout: Form on Left + Live Proposal Summary on Right */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Form Column */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {!submittedInquiry ? (
              <motion.form
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-10"
              >
                {/* 1. Category Selection */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-xs uppercase font-mono tracking-widest text-[#1A1A1A]">
                      01. Select Project Type *
                    </label>
                    <span className="text-[10px] font-mono opacity-50">Required</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {serviceOptions.map((opt) => {
                      const isSelected = serviceType === opt;
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setServiceType(opt)}
                          className={`py-3 px-3 rounded-full text-[11px] uppercase tracking-[0.15em] border transition-all text-center ${
                            isSelected
                              ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-medium'
                              : 'bg-[#F8F8F8] border-ink text-[#1A1A1A] opacity-75 hover:opacity-100 hover:border-[#1A1A1A]'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Client Contact Details */}
                <div className="space-y-4 pt-6 border-t border-ink">
                  <label className="text-xs uppercase font-mono tracking-widest text-[#1A1A1A] block">
                    02. Your Details *
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase font-mono opacity-50">Full Name</span>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Elena Vance"
                        className="w-full px-4 py-3 bg-[#F8F8F8] border border-ink rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] focus:bg-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase font-mono opacity-50">Email Address</span>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elena@domain.com"
                        className="w-full px-4 py-3 bg-[#F8F8F8] border border-ink rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] focus:bg-white"
                      />
                    </div>

                    <div className="sm:col-span-2 space-y-1.5">
                      <span className="text-[10px] uppercase font-mono opacity-50">Phone / WhatsApp</span>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+27 72 000 0000"
                        className="w-full px-4 py-3 bg-[#F8F8F8] border border-ink rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] focus:bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Schedule & Production Logistics */}
                <div className="space-y-4 pt-6 border-t border-ink">
                  <label className="text-xs uppercase font-mono tracking-widest text-[#1A1A1A] block">
                    03. Date &amp; Location Logistics
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase font-mono opacity-50">Target Date</span>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F8F8F8] border border-ink rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] focus:bg-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase font-mono opacity-50">Preferred Time of Day</span>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F8F8F8] border border-ink rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] focus:bg-white"
                      >
                        <option value="Morning (Golden Hour)">Morning (Golden Hour)</option>
                        <option value="Midday Studio Session">Midday Studio Session</option>
                        <option value="Afternoon / Sunset">Afternoon / Sunset</option>
                        <option value="Full Day Production">Full Day Production</option>
                        <option value="Flexible Schedule">Flexible Schedule</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase font-mono opacity-50">Location / Venue</span>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Atlantic Seaboard, Higgovale Studio"
                        className="w-full px-4 py-3 bg-[#F8F8F8] border border-ink rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] focus:bg-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase font-mono opacity-50">Participants / Guests</span>
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F8F8F8] border border-ink rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] focus:bg-white"
                      >
                        <option value="1 Person (Solo Portrait)">1 Person (Solo Portrait)</option>
                        <option value="2 People (Couple / Editorial)">2 People (Couple / Editorial)</option>
                        <option value="3–6 People (Small Group / Campaign)">3–6 People (Small Group / Campaign)</option>
                        <option value="Large Event / Wedding (50+ Guests)">Large Event / Wedding (50+ Guests)</option>
                        <option value="Commercial Production Crew">Commercial Production Crew</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 4. Budget & Vision Narrative */}
                <div className="space-y-4 pt-6 border-t border-ink">
                  <label className="text-xs uppercase font-mono tracking-widest text-[#1A1A1A] block">
                    04. Budget Tier &amp; Creative Vision
                  </label>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase font-mono opacity-50">Estimated Investment Tier</span>
                      <select
                        value={budgetRange}
                        onChange={(e) => setBudgetRange(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F8F8F8] border border-ink rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] focus:bg-white"
                      >
                        {budgetOptions.map((opt, bIdx) => (
                          <option key={bIdx} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase font-mono opacity-50">Creative Vision &amp; Notes</span>
                      <textarea
                        rows={4}
                        value={visionDetails}
                        onChange={(e) => setVisionDetails(e.target.value)}
                        placeholder="Describe the mood, wardrobe concept, reference links, intended use or any questions..."
                        className="w-full px-4 py-3 bg-[#F8F8F8] border border-ink rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] focus:bg-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase font-mono opacity-50">How did you discover A Yxung Shot?</span>
                      <select
                        value={referralSource}
                        onChange={(e) => setReferralSource(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F8F8F8] border border-ink rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] focus:bg-white"
                      >
                        {referralOptions.map((opt, rIdx) => (
                          <option key={rIdx} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-8">
                  <button
                    type="submit"
                    className="w-full py-4 border border-[#1A1A1A] rounded-full bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-transparent hover:text-[#1A1A1A] transition-all flex items-center justify-center space-x-3 group shadow-sm"
                  >
                    <span>Submit Commission Inquiry</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                  </button>
                  <p className="text-center text-[10px] uppercase font-mono opacity-50 mt-3 tracking-widest">
                    Response delivered within 24–48 hours by Tana
                  </p>
                </div>
              </motion.form>
            ) : (
              /* Success Confirmation Card */
              <motion.div
                key="submission-success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#F8F8F8] p-8 md:p-12 border border-ink space-y-6 shadow-md"
              >
                <div className="flex items-center space-x-3 text-[#1A1A1A]">
                  <CheckCircle2 size={24} />
                  <span className="text-xs uppercase font-mono tracking-widest font-bold">
                    Inquiry Received &amp; Logged
                  </span>
                </div>

                <h3 className="serif text-3xl md:text-5xl text-[#1A1A1A]">
                  Thank You, {submittedInquiry.fullName}.
                </h3>

                <p className="serif italic text-base md:text-lg opacity-85 leading-relaxed text-[#1A1A1A]">
                  Your commission brief for <strong>{submittedInquiry.serviceType}</strong> has been logged into the studio catalogue. Tana will review your dates and creative vision and reply directly to <strong>{submittedInquiry.email}</strong>.
                </p>

                {/* Reference Code Box */}
                <div className="p-4 bg-white border border-ink flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase font-mono opacity-50 block">
                      Commission Reference Code
                    </span>
                    <span className="font-mono text-sm font-bold text-[#1A1A1A]">
                      {submittedInquiry.referenceNumber}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopyCode(submittedInquiry.referenceNumber)}
                    className="px-3 py-1.5 border border-ink rounded-full text-[10px] uppercase font-mono flex items-center space-x-1.5 hover:bg-[#F8F8F8] transition-colors"
                  >
                    {copiedCode ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setSubmittedInquiry(null)}
                    className="px-6 py-3 border border-[#1A1A1A] rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#1A1A1A] hover:text-white transition-all text-center"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Live Proposal Summary / Studio Dossier on Right */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#F8F8F8] p-6 md:p-8 border border-ink space-y-6 shadow-sm sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-ink">
              <span className="text-[10px] uppercase font-mono tracking-widest opacity-60">
                Inquiry Summary Dossier
              </span>
              <span className="text-[9px] font-mono bg-white px-2 py-0.5 border border-ink">
                AYS 2026
              </span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex justify-between py-2 border-b border-ink/50">
                <span className="opacity-50 uppercase font-mono text-[10px]">Service</span>
                <span className="font-bold text-[#1A1A1A]">{serviceType}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-ink/50">
                <span className="opacity-50 uppercase font-mono text-[10px]">Schedule</span>
                <span className="text-[#1A1A1A]">{preferredDate || 'To Be Confirmed'} ({preferredTime.split(' ')[0]})</span>
              </div>

              <div className="flex justify-between py-2 border-b border-ink/50">
                <span className="opacity-50 uppercase font-mono text-[10px]">Location</span>
                <span className="text-[#1A1A1A] text-right truncate max-w-[180px]">{location}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-ink/50">
                <span className="opacity-50 uppercase font-mono text-[10px]">Tier</span>
                <span className="text-[#1A1A1A] text-right truncate max-w-[180px]">{budgetRange.split(' ')[0]} {budgetRange.split(' ')[1]}</span>
              </div>
            </div>

            {/* Direct Studio Contact Info */}
            <div className="pt-4 border-t border-ink space-y-2 text-xs">
              <span className="text-[10px] uppercase font-mono tracking-widest opacity-50 block">
                Direct Contact
              </span>
              <p className="font-mono text-[#1A1A1A]">tanachiddo@gmail.com</p>
              <p className="text-[11px] opacity-60">Higgovale Studio &amp; Locations, Cape Town</p>
            </div>

            {/* History Toggle if inquiries exist */}
            {inquiries.length > 0 && (
              <div className="pt-4 border-t border-ink">
                <button
                  type="button"
                  onClick={() => setShowHistory(!showHistory)}
                  className="text-[10px] uppercase font-mono tracking-widest opacity-60 hover:opacity-100 flex items-center justify-between w-full"
                >
                  <span>Your Previous Inquiries ({inquiries.length})</span>
                  <span>{showHistory ? '−' : '+'}</span>
                </button>

                {showHistory && (
                  <div className="mt-3 space-y-2 max-h-40 overflow-y-auto">
                    {inquiries.map((inq) => (
                      <div key={inq.id} className="p-2.5 bg-white border border-ink text-[11px]">
                        <div className="flex justify-between font-mono font-bold">
                          <span>{inq.serviceType}</span>
                          <span className="opacity-60">{inq.referenceNumber.slice(-9)}</span>
                        </div>
                        <p className="opacity-60 text-[10px]">{new Date(inq.createdAt).toLocaleDateString()}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
