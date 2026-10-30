
type Review = {
  name: string;
  business: string;
  location: string;
  review: string;
  rating: number;
  initials: string;
};

const reviews: Review[] = [
  {
    name: "Emeka Okafor",
    business: "Emeka Electrical Services",
    location: "Port Harcourt",
    review:
      "FixNear made it easy for my customers to find my electrical services online. I now have a professional website without knowing how to code.",
    rating: 5,
    initials: "EO",
  },
  {
    name: "Ada Johnson",
    business: "Ada Fashion House",
    location: "Lagos",
    review:
      "The website looks beautiful and professional. I love how easy it is to update my services and show customers what my business offers.",
    rating: 5,
    initials: "AJ",
  },
  {
    name: "Tunde Bamidele",
    business: "Tunde Cleaning Services",
    location: "Abuja",
    review:
      "I wanted something that would make my business look more established. FixNear delivered exactly that. The process was surprisingly simple.",
    rating: 5,
    initials: "TB",
  },
  {
    name: "Chiamaka Eze",
    business: "Chiamaka Interiors",
    location: "Enugu",
    review:
      "I was impressed by the different templates. I could choose a design that actually represents my business and customize it myself.",
    rating: 5,
    initials: "CE",
  },
  {
    name: "Ibrahim Musa",
    business: "Musa Plumbing Solutions",
    location: "Kano",
    review:
      "Having my own website makes it easier to show people my work. I can simply share my website link whenever someone asks about my services.",
    rating: 5,
    initials: "IM",
  },
  {
    name: "Chinedu Williams",
    business: "CW Construction",
    location: "Port Harcourt",
    review:
      "The design is clean, mobile-friendly and professional. I especially like how everything works properly on phones.",
    rating: 5,
    initials: "CW",
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="w-[290px] sm:w-[330px] shrink-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
          {review.initials}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-bold text-slate-900">
            {review.name}
          </h3>
          <p className="truncate text-xs text-slate-500">
            {review.business}
          </p>
        </div>
      </div>

      <div
        className="mt-4 text-sm tracking-wider text-amber-400"
        aria-label={`${review.rating} out of 5 stars`}
      >
        {"★".repeat(review.rating)}
      </div>

      <p className="mt-3 min-h-[100px] text-sm leading-6 text-slate-600">
        "{review.review}"
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="text-xs font-medium text-slate-500">
          {review.location}
        </span>
        <span className="text-xs font-semibold text-blue-600">
          FixNear customer
        </span>
      </div>
    </article>
  );
}

export default function ReviewsMarquee() {
  return (
    <div className="w-full min-w-0 overflow-hidden">
      <div className="reviews-track flex w-max gap-4">
        <div className="flex shrink-0 gap-4">
          {reviews.map((review, index) => (
            <ReviewCard key={`${review.name}-${index}`} review={review} />
          ))}
        </div>

        <div className="flex shrink-0 gap-4" aria-hidden="true">
          {reviews.map((review, index) => (
            <ReviewCard key={`duplicate-${index}`} review={review} />
          ))}
        </div>
      </div>

      <style>{`
        .reviews-track {
          animation: reviews-scroll 48s linear infinite;
        }

        .reviews-track:hover {
          animation-play-state: paused;
        }

        @keyframes reviews-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reviews-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
