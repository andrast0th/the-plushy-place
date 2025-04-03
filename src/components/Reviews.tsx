"use client";

import React, { useState } from "react";

interface Review {
  id: number;
  name: string;
  comment: string;
}

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "John Doe",
      comment: "Great product! Highly recommend.",
    },
  ]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleAddReview = () => {
    if (name.trim() && comment.trim()) {
      const newReview: Review = {
        id: Date.now(),
        name,
        comment,
      };
      setReviews([...reviews, newReview]);
      setName("");
      setComment("");
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddReview}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Add Review
        </button>
      </div>
      <ul className="space-y-4">
        {reviews.map((review) => (
          <li
            key={review.id}
            className="p-4 bg-white rounded-md shadow-sm border border-gray-200"
          >
            <strong className="block text-lg font-semibold">
              {review.name}:
            </strong>
            <p className="text-gray-700">{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
