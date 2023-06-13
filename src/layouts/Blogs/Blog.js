import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
import BlogItem from './BlogItem';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const blogs = [
    {
        to: '/blog' ,
        srcImage: images.scrumBlog,
        title: 'Development',
        description:
            'Phần mềm không tự nó sinh ra cũng không tự nó nâng cấp, mà phải được phát triển và bảo trì bởi các lập trình viên. Nhiều qui trình được thành lập để giúp việc phát triển phần mềm trở nên dễ dàng và bài bản hơn.',
    },
    {
        to: '/blog' ,
        srcImage: images.scrumBlog,
        title: 'Science',
        description:
            'Phần mềm không tự nó sinh ra cũng không tự nó nâng cấp, mà phải được phát triển và bảo trì bởi các lập trình viên. Nhiều qui trình được thành lập để giúp việc phát triển phần mềm trở nên dễ dàng và bài bản hơn.',
    },
    {
        to: '/blog' ,
        srcImage: images.scrumBlog,
        title: 'Development',
        description:
            'Phần mềm không tự nó sinh ra cũng không tự nó nâng cấp, mà phải được phát triển và bảo trì bởi các lập trình viên. Nhiều qui trình được thành lập để giúp việc phát triển phần mềm trở nên dễ dàng và bài bản hơn.',
    },
    {
        to: '/blog' ,
        srcImage: images.scrumBlog,
        title: 'Development',
        description:
            'Phần mềm không tự nó sinh ra cũng không tự nó nâng cấp, mà phải được phát triển và bảo trì bởi các lập trình viên. Nhiều qui trình được thành lập để giúp việc phát triển phần mềm trở nên dễ dàng và bài bản hơn.',
    },
    {
        to: '/blog' ,
        srcImage: images.scrumBlog,
        title: 'Development',
        description:
            'Phần mềm không tự nó sinh ra cũng không tự nó nâng cấp, mà phải được phát triển và bảo trì bởi các lập trình viên. Nhiều qui trình được thành lập để giúp việc phát triển phần mềm trở nên dễ dàng và bài bản hơn.',
    },
    {
        to: '/blog' ,
        srcImage: images.scrumBlog,
        title: 'Development',
        description:
            'Phần mềm không tự nó sinh ra cũng không tự nó nâng cấp, mà phải được phát triển và bảo trì bởi các lập trình viên. Nhiều qui trình được thành lập để giúp việc phát triển phần mềm trở nên dễ dàng và bài bản hơn.',
    },
];

function Blog() {
    return (
        <div className={cx('wrapper')}>
            {blogs.map((blog, index) => {
                return <BlogItem key={index} to={blog.to} srcImage={blog.srcImage} title={blog.title} description={blog.description} />;
            })}
        </div>
    );
}

export default Blog;
