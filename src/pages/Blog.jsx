import React, { useState } from 'react';
import { blogs, blogCategories } from '../data/blogs';
import SectionTitle from '../components/SectionTitle';
import BlogCard from '../components/BlogCard';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = selectedCategory === "All"
    ? blogs
    : blogs.filter(b => b.category === selectedCategory);

  return (
    <div className="space-y-16 py-8">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-warm-ivory to-mint-mist/40 py-12 rounded-3xl max-w-7xl mx-auto px-4 sm:px-8 border border-medical-teal/10 text-center">
        <SectionTitle
          badge="Dental Guide"
          title="Educational Articles & Dental Care Advice"
          subtitle="Stay informed about oral hygiene, teeth whitening secrets, clear aligners, and child dental growth."
        />

        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-deep-teal text-white shadow-md'
                  : 'bg-white text-charcoal hover:bg-mint-mist border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

    </div>
  );
}
