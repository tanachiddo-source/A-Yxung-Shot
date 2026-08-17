import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/services';
import { ServiceItem } from '../types';

interface ServicesPageProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService }) => {
  return (
    <div id="services-page" className="pt-28 md:pt-36 pb-32 px-6 md:px-12 max-w-7xl mx-auto bg-white">
      {/* Header Section */}
      <div className="pb-10 border-b border-ink flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 font-mono">
              Commissions &amp; Visual Production
            </span>
            <div className="w-8 h-[1px] bg-[#1A1A1A] opacity-40"></div>
          </div>
          <h1 className="serif text-5xl md:text-7xl lg:text-8xl tracking-tighter-tight text-[#1A1A1A]">
            SERVICES
          </h1>
        </div>
        <p className="serif italic text-base md:text-xl opacity-75 max-w-md text-[#1A1A1A]">
          A bespoke photographic practice for individuals, brands, weddings and creative collectives.
        </p>
      </div>

      {/* Services List in Editorial Flow */}
      <div className="divide-y divide-ink mt-8">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              id={`service-section-${service.id}`}
              className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center"
            >
              {/* Left Column / Info */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="flex items-center space-x-3 text-xs font-mono opacity-50 uppercase tracking-[0.25em]">
                  <span>0{index + 1}</span>
                  <span>/</span>
                  <span>{service.category}</span>
                </div>

                <h2 className="serif text-3xl md:text-5xl text-[#1A1A1A]">
                  {service.title}
                </h2>

                <p className="serif italic text-lg md:text-xl opacity-80 text-[#1A1A1A]">
                  "{service.tagline}"
                </p>

                <p className="text-sm opacity-70 leading-relaxed text-[#1A1A1A]">
                  {service.description}
                </p>

                {/* Deliverables & Deliverable list */}
                <div className="pt-4 border-t border-ink space-y-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest opacity-50 block">
                    Deliverables &amp; Inclusions
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#1A1A1A]">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-2">
                        <Check size={13} className="text-[#1A1A1A] mt-0.5 shrink-0" />
                        <span className="opacity-80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & Booking CTA */}
                <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-ink">
                  <div>
                    <span className="text-[9px] uppercase font-mono tracking-widest opacity-50 block">
                      Investment Starting Rate
                    </span>
                    <span className="serif text-2xl font-medium text-[#1A1A1A]">
                      {service.startingRate}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="px-6 py-2.5 border border-[#1A1A1A] rounded-full text-[11px] uppercase tracking-[0.2em] font-medium bg-[#1A1A1A] text-white hover:bg-transparent hover:text-[#1A1A1A] transition-all flex items-center space-x-2 group"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column / Framed Image */}
              <div
                className={`lg:col-span-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="relative aspect-[4/3] md:aspect-[16/11] overflow-hidden bg-[#F8F8F8] p-3 border border-ink shadow-md">
                  <div className="w-full h-full overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover gallery-image-hover filter brightness-[0.98]"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-[9px] uppercase font-mono tracking-widest text-[#1A1A1A] border border-ink shadow-xs">
                      Service Focus · 0{index + 1}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
