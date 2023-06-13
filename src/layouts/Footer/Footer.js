import classNames from "classnames/bind";
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return ( 
        <div>
            <a href="mailto:vovankha2k3@gmail.com">emaik</a>
            <a href='https://github.com/vankha1'>github</a>
        </div>
    );
}

export default Footer;