import classNames from "classnames/bind";
import styles from './Search.module.scss';
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function Search() {

    const [searchValue, setSearchValue] = useState('');
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

    return ( 
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
                Go
            </button>
        </div>
    );
}

export default Search;