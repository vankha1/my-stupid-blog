import classNames from "classnames/bind";
import styles from './Content.module.scss'
import { Fragment } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Content( { blog } ) {
    return ( 
        <Fragment>
            <Link className={cx('go-back-btn')} to={'/'}><span> &#8592;</span> Go back</Link>
            <div className={cx('wrapper')}>
                <h2 className={cx('date-publish')}>{blog.datePublished}</h2>
                <h1 className={cx('main-title')}>{blog.mainTitle}</h1>
                <img 
                    className={cx('avatar')}
                    src={blog.srcImage}
                    alt="" 
                />
                <p className={cx('content')}>{ blog.content }</p>
            </div>
        </Fragment>
    );
}

export default Content;