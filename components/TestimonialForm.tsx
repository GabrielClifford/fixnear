
"use client";

import { useState, type FormEvent } from "react";

export type Testimonial = {
  name: string;
  business: string;
  location: string;
  rating: number;
  review: string;
};

type Props = {
  businessId?: string;
  onSubmit?: (testimonial: Testimonial) => void | Promise<void>;
};
export default function TestimonialForm({ businessId, onSubmit }: Props) {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("5");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!onSubmit) {
      setMessage("The review form needs to be connected to your database.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await onSubmit({
        name,
        business,
        location,
        rating: Number(rating),
        review,
      });

      setMessage("Thank you! Your review has been submitted.");
      setName("");
      setBusiness("");
      setLocation("");
      setRating("5");
      setReview("");
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Share your experience
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
            Tell us what you think
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Have you built your website with Xenon? We'd love to hear
            about your experience.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Your name
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Emeka Okafor"
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Business name
              </label>
              <input
                required
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="Your business name"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Location
            </label>
            <input
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Port Harcourt"
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Your rating
            </label>

            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className={inputClass}
            >
              <option value="5">★★★★★ - Excellent</option>
              <option value="4">★★★★ - Very good</option>
              <option value="3">★★★ - Good</option>
              <option value="2">★★ - Fair</option>
              <option value="1">★ - Poor</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Your experience
            </label>

            <textarea
              required
              minLength={10}
              maxLength={500}
              rows={5}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Tell us how Xenon has helped your business..."
              className={`${inputClass} resize-none`}
            />
            <p className="mt-1 text-right text-xs text-slate-400">
              {review.length}/500
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Your Review →"}
          </button>

          {message && (
            <p
              role="status"
              className="text-center text-sm font-medium text-blue-700"
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
