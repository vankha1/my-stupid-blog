import { useParams, Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import postMetas from '~/data/post-metas';
import Footer from '~/layouts/Footer/Footer';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { Markup } from 'interweave';
// import ReactMarkdown from "react-markdown";
// import rehypeRaw from "rehype-raw";
import * as data from '~/data';
import images from '~/assets/images';

const cx = classNames.bind(styles);

// const data = 1

function Following() {
    const { index } = useParams();
    const [selectedBlog, setSelectedBlog] = useState(null);

    const title = useRef()
    useEffect(() => {
        let selectedBlog = postMetas?.find((post) => {
            return +post.id === parseInt(index);
        });
        setSelectedBlog(selectedBlog);
        title.current = selectedBlog.title
        hljs.highlightAll();
    });
    // console.log(title.current);
    let content;
    for (let i = 0; i < Object.keys(data).length; i++){
        if (data[Object.keys(data)[i]]['title'] === title.current ){
            content = data[Object.keys(data)[i]]['content']
            break;
        }
    }
    return (
        <div>
            {!!selectedBlog && (
                <>
                    <Link className={cx('go-back-btn')} to={'/'}>
                        <span> &#8592;</span> Go back
                    </Link>
                    <div className={cx('wrapper')}>
                        <h2 className={cx('date-publish')}>{selectedBlog.createdAt}</h2>
                        <h1 className={cx('main-title')}>{selectedBlog.title}</h1>
                        <div className={cx('summary')}>
                            <h3 >{selectedBlog.summary}</h3>
                        </div>
                        {/* <img 
                            className={cx('avatar')}
                            src={images[selectedBlog.thumbnailUrl]}
                            alt="" 
                        /> */}
                        <div className={cx('content')}>
                            
                            <Markup className={cx('mark-up-content')} content={content} />
                        </div>
                    </div>
                </>
            )}
            <Footer />
        </div>
    );
}

export default Following;
