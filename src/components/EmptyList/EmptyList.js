import classNames from 'classnames/bind';
import styles from './EmptyList.module.scss'
// import images from '~/assets/images';

const cx = classNames.bind(styles);

const EmptyList = () => (
    <div className={cx('emptyList-wrap')}>
        <img src='~/assets/images/13525-empty.gif' alt='empty' />
    </div>
);

export default EmptyList;