import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
import BlogItem from './BlogItem';
import images from '~/assets/images';
const cx = classNames.bind(styles);


function Blog( { postMetas }) {

    return (
        <div className={cx('wrapper')}>
            {postMetas?.map((post, index) => {
                return <BlogItem key={index} to={`/blog/${post.id}`} thumbnailUrl={images[post.thumbnailUrl]} title={post.title} summary={post.summary} />;
            })}
        </div>
    );
}

export default Blog;
