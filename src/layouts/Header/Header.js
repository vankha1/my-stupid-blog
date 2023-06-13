import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Search from '../Search/Search';

const cx = classNames.bind(styles);

function Header() {
    return ( 
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Inc.This Morning</h1>
            <h2 className={cx('blog-name')}><span>*,*</span> Stupid Blog <span>*,*</span></h2>
            <p className={cx('quote')}>awesome place to make oneself <br></br> productive and entertained through daily updates</p>
        
            <Search />
        </div>
    );
}

export default Header;