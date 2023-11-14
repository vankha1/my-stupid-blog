import classNames from "classnames/bind";
import styles from './Blog.module.scss';
import Button from "~/components/Button";
import { Link } from "react-router-dom";
// import images from "~/assets/images";

const cx = classNames.bind(styles);

function BlogItem({ to, thumbnailUrl, title, summary }) {
    return ( 
        <Link className={cx('wrapper-item')} to={to}>
            <div className={cx('avatar')}>
                <img 
                    src={thumbnailUrl}
                    alt=""
                />
            </div>
            <h2 className={cx('category')}>{title}</h2>
            <p className={cx('description')}>
                {summary}
            </p>
            <Button className={cx('view-more-btn')} to={to} primary small>View more <span>&#8594;</span></Button>
        </Link>
    );
}

export default BlogItem;