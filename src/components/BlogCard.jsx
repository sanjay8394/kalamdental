import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-medical-teal/10 hover:shadow-elevated transition-all flex flex-col group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-mint-mist">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-deep-teal/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-3 text-xs text-charcoal/60 mb-2">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-medical-teal" /> {post.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-soft-coral" /> {post.readTime}
            </span>
          </div>

          <h3 className="text-lg font-extrabold text-deep-teal group-hover:text-medical-teal transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed mt-2 line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs font-medium text-gray-400">
            {post.date}
          </span>

          <Link
            to={`/blog/${post.slug}`}
            className="text-xs font-bold text-soft-coral hover:text-deep-teal transition-colors flex items-center gap-1"
          >
            Read Article <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
