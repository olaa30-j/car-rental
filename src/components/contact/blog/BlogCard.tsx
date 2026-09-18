import type { BlogPost } from '../../../data/blogData';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export default function BlogCard({ post, className = '' }: BlogCardProps) {
  return (
    <a href={post.href} className={`group block ${className}`}>
      {/* Image */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="
            w-full aspect-[16/10] object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Title */}
      <h5 className="mt-5 font-bold text-gray-900 leading-snug group-hover:text-secondary transition-colors">
        {post.title}
      </h5>

      {/* Meta */}
      <p className="mt-2 text-sm text-gray-500">
        {post.category} / {post.date}
      </p>
    </a>
  );
}