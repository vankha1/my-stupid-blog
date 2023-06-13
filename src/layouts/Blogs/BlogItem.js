import classNames from "classnames/bind";
import styles from './Blog.module.scss';
import Button from "~/components/Button";


const cx = classNames.bind(styles);

function BlogItem({ to, srcImage, title, description }) {
    return ( 
        <div className={cx('wrapper-item')}>
            <img 
                className={cx('avatar')}
                src={srcImage}
                alt=""
            />
            <h2>{title}</h2>
            <p className={cx('description')}>
                {description}
            </p>
            <Button to={to} primary small>View more</Button>
        </div>
    );
}

export default BlogItem;