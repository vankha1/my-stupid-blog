import classNames from "classnames/bind";
import styles from './Search.module.scss';
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import { SearchIcon } from "~/components/Icons";
// import posts from "~/posts.json";
import postMetas from "~/data/post-metas";
import Blog from "../Blogs/Blog";
import EmptyList from "~/components/EmptyList";


const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState(postMetas)
    // console.log(postMetas);
    const inputRef = useRef();

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (searchValue.startsWith(' ')) {
            return;
        }
        setSearchValue(searchValue);
    };

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    }

    
    useEffect(() => {
        const filteredResult = postMetas?.filter((post) => {
            // console.log(post);
            return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
        setSearchResult(filteredResult);
    }, [searchValue])

    return ( 
        <div>
            <div className={cx('search')}>
                <input 
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search by Title"
                    spellCheck={false}
                    onChange={handleChange}
                />
                {!!searchValue && <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                </button>}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
            { searchResult.length > 0 ? <Blog postMetas={searchResult} /> : <EmptyList />}
        </div>
    );
}

export default Search;