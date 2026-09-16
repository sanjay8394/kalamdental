import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { Clock, User, ArrowLeft, Share2, MessageSquare } from 'lucide-react';
import { createWhatsAppLink } from '../data/clinicInfo';
import Button from '../components/Button';

export default function BlogPostPage({ onOpenAppointment }) {
  const { slug } = useParams();
  const post = blogs.find(b => b.slug === slug) || blogs[0];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      
      {/* Back link */}
      <Link 
        to="/blog" 
        className="inline-flex items-center gap-1.5 text-xs font-bold text-medical-teal hover:text-deep-teal transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to All Articles
      </Link>

      {/* Article Header */}
      <div className="space-y-4">
        <span className="bg-mint-mist text-medical-teal text-xs font-bold px-3.5 py-1 rounded-full border border-medical-teal/20 inline-block">
          {post.category}
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-deep-teal leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-xs sm:text-sm text-charcoal/70 border-b border-gray-200 pb-6 pt-2">
          <span className="flex items-center gap-1.5 font-semibold text-deep-teal">
            <User className="w-4 h-4 text-medical-teal" /> {post.author}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-soft-coral" /> {post.readTime}
          </span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="rounded-3xl overflow-hidden shadow-xl max-h-[420px] bg-mint-mist">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Body Content */}
      <div className="prose prose-teal max-w-none text-charcoal leading-relaxed text-base space-y-4 whitespace-pre-line font-normal">
        {post.content}
      </div>

      {/* Bottom CTA Box */}
      <div className="mt-12 bg-mint-mist/50 p-8 rounded-3xl border border-medical-teal/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-extrabold text-deep-teal">Have Questions About This Dental Topic?</h3>
          <p className="text-xs sm:text-sm text-charcoal/80 mt-1">
            Book a quick consultation with {post.author} or chat on WhatsApp.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Button variant="coral" size="md" onClick={onOpenAppointment}>
            Book Appointment
          </Button>
          <a
            href={createWhatsAppLink(`Hello! I read your article "${post.title}" and have a question.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-emerald-600 text-white font-bold text-xs"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>
      </div>

    </div>
  );
}
