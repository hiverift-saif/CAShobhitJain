import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: 'Understanding GST for Small Businesses: A Complete Guide',
    excerpt: 'Navigate the complexities of GST with our comprehensive guide tailored for small business owners in India.',
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop',
    date: 'March 15, 2024',
    author: 'CA Shobhit Jain',
    category: 'Taxation'
  },
  {
    id: 2,
    title: 'Tax Saving Strategies for NRIs: Maximize Your Returns',
    excerpt: 'Learn about the best tax-saving investment options available for Non-Resident Indians to optimize their financial portfolio.',
    image: 'https://i.pinimg.com/736x/30/d7/25/30d7252986030f7782b45c2e435dcd2f.jpg',
    date: 'March 10, 2024',
    author: 'CA Shobhit Jain',
    category: 'NRI Services'
  },
  {
    id: 3,
    title: 'Why Your Startup Needs a Virtual CFO in 2024',
    excerpt: 'Discover how a Virtual CFO can provide high-level financial strategy and guidance without the cost of a full-time executive.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    date: 'March 05, 2024',
    author: 'CA Shobhit Jain',
    category: 'Business Growth'
  }
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-20 bg-[#f8fbff]">
      <div className="container-main px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#f4761c]/10 text-[#f4761c] text-sm font-bold uppercase tracking-wider mb-4">
            Insights & Updates
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-[#0e2a5e] mb-6 leading-tight">
            Our Latest <span className="text-[#f4761c]">Blogs</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Stay updated with the latest trends in taxation, financial planning, and business growth strategies directly from our experts.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-blue-900/5 group hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-full bg-[#0e2a5e] text-white text-xs font-bold uppercase tracking-wider">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#f4761c]" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User size={14} className="text-[#f4761c]" />
                    {blog.author}
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-[#0e2a5e] mb-4 group-hover:text-[#f4761c] transition-colors line-clamp-2">
                  <Link to={`/blog/${blog.id}`}>
                    {blog.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>

                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-flex items-center gap-2 text-[#0e2a5e] font-bold group/btn hover:text-[#f4761c] transition-colors"
                >
                  Read More
                  <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* More Blog Button */}
        <div className="text-center reveal">
          <Link
            to="/blog/"
            className="inline-flex items-center gap-3 bg-[#0e2a5e] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#f4761c] transition-all shadow-xl hover:shadow-orange-500/20 active:scale-95"
          >
            <BookOpen size={20} />
            Explore All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
