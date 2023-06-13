import classNames from "classnames/bind";
import styles from './Search.module.scss';
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import { SearchIcon } from "~/components/Icons";
import blogs from "~/data/blogs";
import Blog from "../Blogs/Blog";
import EmptyList from "~/components/EmptyList";


const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState(blogs)
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
        const filteredResult = blogs.filter((blog) => {
            return blog.title.toLowerCase().includes(searchValue.toLowerCase());
        })
        setSearchResult(filteredResult);
    }, [searchValue])

    return ( 
        <div>
            <div className={cx('search')}>
                <input 
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search by Category"
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
            { searchResult.length > 0 ? <Blog blogs={searchResult} /> : <EmptyList />}
        </div>
    );
}

export default Search;