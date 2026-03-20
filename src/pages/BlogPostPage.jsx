import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: 'Understanding GST for Small Businesses: A Complete Guide',
    excerpt: 'Navigate the complexities of GST with our comprehensive guide tailored for small business owners in India.',
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop',
    date: 'March 15, 2024',
    author: 'CA Shobhit Jain',
    category: 'Taxation',
    content: (
      <>
        <p className="mb-6">Understanding the Goods and Services Tax (GST) is crucial for small businesses operating in India. GST is a destination-based tax that replaced various indirect taxes like VAT, Service Tax, and Excise Duty. This guide aims to simplify GST for small business owners and provide insights into compliance, registration, and tax management.</p>
        <h3 className="text-2xl font-heading font-black text-[#0e2a5e] mb-4">Why is GST Compliance Important?</h3>
        <p className="mb-6">GST compliance is not just a legal requirement but also a way to build credibility with your customers and suppliers. It allows you to claim input tax credit (ITC), which can significantly reduce your tax liability. Accurate GST filing ensures transparency and avoids penalties and legal issues.</p>
        <h3 className="text-2xl font-heading font-black text-[#0e2a5e] mb-4">Key Steps for GST Registration</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Determine if your business meets the turnover threshold for mandatory registration.</li>
          <li>Gather necessary documents like PAN, Aadhaar, and business registration proof.</li>
          <li>Register online through the GST portal.</li>
          <li>Receive your Goods and Services Tax Identification Number (GSTIN).</li>
        </ul>
      </>
    )
  },
  {
    id: 2,
    title: 'Tax Saving Strategies for NRIs: Maximize Your Returns',
    excerpt: 'Learn about the best tax-saving investment options available for Non-Resident Indians to optimize their financial portfolio.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?q=80&w=2070&auto=format&fit=crop',
    date: 'March 10, 2024',
    author: 'CA Shobhit Jain',
    category: 'NRI Services',
    content: (
      <>
        <p className="mb-6">Non-Resident Indians (NRIs) often struggle with managing their finances and tax liabilities in India. This article explores effective tax-saving strategies tailored for NRIs, helping them maximize their returns while staying compliant with Indian tax laws.</p>
        <h3 className="text-2xl font-heading font-black text-[#0e2a5e] mb-4">Top Tax-Saving Investment Options</h3>
        <p className="mb-6">NRIs can invest in several tax-saving instruments in India to reduce their taxable income. Some popular options include public provident funds (PPF), equity-linked saving schemes (ELSS), and unit-linked insurance plans (ULIPs). Each of these options has unique features and benefits, so it's essential to choose the one that aligns with your financial goals.</p>
        <h3 className="text-2xl font-heading font-black text-[#0e2a5e] mb-4">Double Taxation Avoidance Agreement (DTAA)</h3>
        <p className="mb-6">Understanding the DTAA is crucial for NRIs to avoid paying tax on the same income in both India and their country of residence. India has signed DTAA with several countries, providing relief from double taxation through tax credits or exemptions.</p>
      </>
    )
  },
  {
    id: 3,
    title: 'Why Your Startup Needs a Virtual CFO in 2024',
    excerpt: 'Discover how a Virtual CFO can provide high-level financial strategy and guidance without the cost of a full-time executive.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    date: 'March 05, 2024',
    author: 'CA Shobhit Jain',
    category: 'Business Growth',
    content: (
      <>
        <p className="mb-6">Startups face unique financial challenges, from managing cash flow to securing funding. A Virtual CFO (Chief Financial Officer) offers the expertise of a seasoned financial executive on a part-time or project basis, making it an ideal solution for startups looking for strategic financial guidance without the overhead of a full-time hire.</p>
        <h3 className="text-2xl font-heading font-black text-[#0e2a5e] mb-4">Benefits of Hiring a Virtual CFO</h3>
        <p className="mb-6">A Virtual CFO provides several benefits, including strategic financial planning, cash flow management, financial modeling, and fundraising support. They act as a strategic partner, helping you make informed decisions and achieve your business goals.</p>
        <h3 className="text-2xl font-heading font-black text-[#0e2a5e] mb-4">Cost-Effective Financial Expertise</h3>
        <p className="mb-6">For many startups, hiring a full-time CFO is not financially feasible. A Virtual CFO offers a cost-effective alternative, giving you access to high-level financial expertise at a fraction of the cost. This allows you to focus on your core business while ensuring your finances are in good hands.</p>
      </>
    )
  }
];

export default function BlogPostPage() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id)) || blogs[0];

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container-main px-4">
        {/* Breadcrumb */}
        <div className="mb-12 reveal">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 font-bold hover:text-[#f4761c] transition-colors">
            <ArrowLeft size={18} />
            Back to Blogs
          </Link>
        </div>

        {/* Blog Post Layout */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="reveal">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#f4761c]/10 text-[#f4761c] text-sm font-bold uppercase tracking-wider mb-6">
                {blog.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-heading font-black text-[#0e2a5e] mb-8 leading-tight">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-10 border-b border-slate-100 pb-10">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-[#f4761c]" />
                  <span className="font-bold text-[#0e2a5e]">{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-[#f4761c]" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-[#f4761c]" />
                  <span>8 min read</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="rounded-[40px] overflow-hidden mb-12 shadow-2xl">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="prose prose-lg prose-slate max-w-none text-gray-600 leading-relaxed font-medium">
                {blog.content}
              </div>

              {/* Share Section */}
              <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4 text-[#0e2a5e] font-black">
                  <Share2 size={20} className="text-[#f4761c]" />
                  SHARE THIS ARTICLE
                </div>
                <div className="flex items-center gap-3">
                  {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                    <button key={i} className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#0e2a5e] hover:bg-[#f4761c] hover:text-white transition-all">
                      <Icon size={20} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-40 space-y-12 reveal">
              {/* Other Blogs */}
              <div className="bg-slate-50 p-8 rounded-[32px]">
                <h3 className="text-2xl font-heading font-black text-[#0e2a5e] mb-6">Recent Posts</h3>
                <div className="space-y-6">
                  {blogs.filter(b => b.id !== blog.id).map(b => (
                    <Link key={b.id} to={`/blog/${b.id}`} className="group flex items-center gap-4">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                        <img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading font-bold text-[#0e2a5e] text-sm group-hover:text-[#f4761c] transition-colors line-clamp-2">
                          {b.title}
                        </h4>
                        <span className="text-xs text-slate-400 mt-1 block">{b.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-[#0e2a5e] p-8 rounded-[32px] text-white">
                <h3 className="text-2xl font-heading font-black mb-4">Subscribe</h3>
                <p className="text-slate-300 mb-6 text-sm">Stay ahead in financial management with our weekly newsletter.</p>
                <div className="space-y-3">
                  <input type="email" placeholder="Email address" className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f4761c]" />
                  <button className="w-full bg-[#f4761c] text-white font-bold py-3 rounded-xl hover:bg-white hover:text-[#0e2a5e] transition-all">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
