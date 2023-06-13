import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
import BlogItem from './BlogItem';

const cx = classNames.bind(styles);

function Blog( { blogs }) {
    return (
        <div className={cx('wrapper')}>
            {blogs.map((blog, index) => {
                return <BlogItem key={index} to={`/blog/${blog.id}`} srcImage={blog.srcImage} title={blog.title} description={blog.description} />;
            })}
        </div>
    );
}

export default Blog;
