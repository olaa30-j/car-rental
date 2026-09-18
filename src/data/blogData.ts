/* blog images */
import blogImage1 from '../assets/contact/blogs/Img (1).png';
import blogImage2 from '../assets/contact/blogs/Img (2).png';
import blogImage3 from '../assets/contact/blogs/Img (3).png';

/* =========================================================
   Types
========================================================= */
export interface BlogPost {
  id: number;
  image: string;
  imageAlt: string;
  title: string;
  category: string;
  date: string;
  href: string;
}

export interface BlogContent {
  heading: string;
  posts: BlogPost[];
}

/* =========================================================
   Content
========================================================= */
export const blogData: BlogContent = {
  heading: 'Latest blog posts & news',
  posts: [
    {
      id: 1,
      image: blogImage1,
      imageAlt: 'How To Choose The Right Car',
      title: 'How To Choose The Right Car',
      category: 'News',
      date: '12April 2024',
      href: '/blog/how-to-choose-the-right-car',
    },
    {
      id: 2,
      image: blogImage2,
      imageAlt: 'Which plan is right for me?',
      title: 'Which plan is right for me?',
      category: 'News',
      date: '12April 2024',
      href: '/blog/which-plan-is-right-for-me',
    },
    {
      id: 3,
      image: blogImage3,
      imageAlt: 'Enjoy Speed, Choice & Total Control',
      title: 'Enjoy Speed, Choice & Total Control',
      category: 'News',
      date: '12April 2024',
      href: '/blog/enjoy-speed-choice-and-total-control',
    },
  ],
};