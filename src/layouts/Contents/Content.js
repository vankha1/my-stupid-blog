import classNames from "classnames/bind";
import styles from './Content.module.scss'

const cx = classNames.bind(styles);

function Content( { blog, index } ) {
    return ( 
        <div className={cx('wrapper')}>
            <h2>{blog.datePublished}</h2>
            <h1>{blog.mainTitle}</h1>
            <img 
                src={blog.srcImage}
                alt="" 
            />
        </div>
    );
}

export default Content;