import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { Fragment } from 'react';
// import Markdown from 'markdown-to-jsx';
// import Code from '~/components/Code/Code';

const cx = classNames.bind(styles);

function Content({ posts }) {

    return (
        <Fragment>
            <Link className={cx('go-back-btn')} to={'/'}>
                <span> &#8592;</span> Go back
            </Link>
            <div className={cx('wrapper')}>
                <h2 className={cx('date-publish')}>{posts.date}</h2>
                <h1 className={cx('main-title')}>{posts.title}</h1>
                {/* <img 
                    className={cx('avatar')}
                    src={posts.srcImage}
                    alt="" 
                /> */}
                {/* <Markdown 
                    className={cx('content')} 
                    children={posts.content}
                    options={{
                        overrides: {
                            code:{
                                component: Code
                            }
                        }
                    }}
                /> */}
            </div>
        </Fragment>
    );
}

export default Content;
