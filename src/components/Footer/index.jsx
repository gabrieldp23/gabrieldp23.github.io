import IconsContact from '../IconsContact/';
import { FooterTabContainer, WhoDid, FindMe } from './styles';

const Footer = () => {
    return (
        <FooterTabContainer>
            <WhoDid>
                <p>Made with love and work by Gabriel de Paula.</p>
                <p>All rights reserved.</p>
                <a aria-label='Source code' target='_blanck' href='https://github.com/gabrieldp23/gabrieldp23.github.io'>Website source code</a>
            </WhoDid>
            <FindMe>
                <IconsContact/>
            </FindMe>
        </FooterTabContainer>
    );
}

export default Footer;