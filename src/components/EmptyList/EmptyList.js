import classNames from 'classnames/bind';
import styles from './EmptyList.module.scss'
import images from '~/assets/images';

const cx = classNames.bind(styles);

const EmptyList = () => (
    <div className={cx('emptyList-wrap')}>
        <img src={images.emptyList} alt='empty' />
    </div>
);

export default EmptyList;