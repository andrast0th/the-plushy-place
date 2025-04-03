"use client";
import { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState<string[]>(["this place is awesome"]);
  const [newReview, setNewReview] = useState<string>("");

  const handleAddReview = () => {
    if (newReview.trim()) {
      setReviews([...reviews, newReview.trim()]);
      setNewReview("");
    }
  };

  return (
    <div className="p-6 border border-pink-300 rounded-lg max-w-xl mx-auto bg-pink-50">
      <h2 className="text-2xl font-bold text-pink-700 mb-4">Reviews</h2>
      <div className="mb-6">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className="p-4 border-b border-pink-200 text-pink-800"
            >
              {review}
            </div>
          ))
        ) : (
          <p className="text-pink-600">
            No reviews yet. Be the first to write one!
          </p>
        )}
      </div>
      <div>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here..."
          rows={4}
          className="w-full p-2 mb-4 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          onClick={handleAddReview}
          className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default Reviews;
