import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer-wrapper')}>
            <p>Contact with me <FontAwesomeIcon className={cx('heart')} icon={faHeart} /></p>
            <div>
                <a href="mailto:vovankha2k3@gmail.com">
                    <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
                </a>
                <a href="https://github.com/vankha1">
                    <FontAwesomeIcon className={cx('icon')} icon={faGithub} />
                </a>
            </div>
        </div>
    );
}

export default Footer;
