// client/components/ui/hero-banner.tsx

type HeroBannerProps = {
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  imageUrl?: string;
};

export function HeroBanner({
  title,
  subtitle,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  imageUrl,
}: HeroBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-8 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-lg">{subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={primaryCtaHref}
                className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-bold text-lg text-center"
              >
                {primaryCtaLabel}
              </a>

              {secondaryCtaLabel && secondaryCtaHref && (
                <a
                  href={secondaryCtaHref}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition font-bold text-lg text-center"
                >
                  {secondaryCtaLabel}
                </a>
              )}
            </div>
          </div>

          <div className="relative h-96 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-20"></div>

            {imageUrl && (
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover rounded-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
