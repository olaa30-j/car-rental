import { blogData } from '../../../data/blogData';
import BlogCard from './BlogCard';

export default function BlogSection() {
  const { heading, posts } = blogData;

  return (
    <section className="container py-16 lg:py-24">
      <h2 className="text-center tracking-tight mb-12 lg:mb-16">
        {heading}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}