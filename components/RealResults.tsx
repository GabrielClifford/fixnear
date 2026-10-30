
import ReviewsMarquee from "./ReviewsMarquee";

export default function Realresults() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8 lg:px-8">

        {/* LEFT: TRUST AND STATISTICS */}
        <div className="flex flex-col justify-center">
          <span className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
            Trusted by businesses
          </span>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Real People.
            <br />
            <span className="text-blue-600">Real Results.</span>
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
            Join business owners who are building their online presence
            and growing their brands with Xenon.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-200 pt-6">
            <div>
              <h3 className="text-xl font-extrabold text-blue-700 sm:text-2xl">
                25K+
              </h3>
              <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs">
                Websites Created
              </p>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-blue-700 sm:text-2xl">
                98%
              </h3>
              <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs">
                Customer Satisfaction
              </p>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-blue-700 sm:text-2xl">
                24/7
              </h3>
              <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs">
                Support
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: AUTOMATIC CUSTOMER REVIEWS */}
        <div className="min-w-0">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                What business owners say
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Experiences from the Xenon community
              </p>
            </div>

            <span className="hidden rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 sm:inline-block">
              Customer stories
            </span>
          </div>

          <ReviewsMarquee />
        </div>

      </div>
    </section>
  );
}
