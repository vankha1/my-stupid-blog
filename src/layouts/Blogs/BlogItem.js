import classNames from "classnames/bind";
import styles from './Blog.module.scss';
import Button from "~/components/Button";
import { Link } from "react-router-dom";


const cx = classNames.bind(styles);

function BlogItem({ to, srcImage, title, description }) {
    return ( 
        <Link className={cx('wrapper-item')} to={to}>
            <img 
                className={cx('avatar')}
                src={srcImage}
                alt=""
            />
            <h2 className={cx('title')}>{title}</h2>
            <p className={cx('description')}>
                {description}
            </p>
            <Button className={cx('view-more-btn')} to={to} primary small>View more <span>&#8594;</span></Button>
        </Link>
    );
}

export default BlogItem;