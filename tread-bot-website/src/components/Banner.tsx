// Third party imports
import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RxHamburgerMenu } from 'react-icons/rx';
import { PATHS } from '../tools/Constants';
import { scrollToTop } from '../tools/HelpfulFunctions';

// Custom styles
import Styles from './BannerStyles'


class Banner extends React.Component <unknown, { show: boolean }> {

    constructor(props: unknown) {
        super(props)
        this.state = { show: false }
    }

    handleClose = (): void => {this.setState({ show: false })}
    handleShow = (): void => {this.setState({ show: true })}
    handleLink = (): void => {
        this.handleClose()
        scrollToTop()
    }

	render () {
		return (
            <>
                <Styles.HamburgerButton data-testid='hamburger' onClick={this.handleShow}>
					<RxHamburgerMenu size={'40px'}/>
				</Styles.HamburgerButton>

                <Styles.OffcanvasContainer show={this.state.show} onHide={this.handleClose}>
                    <Offcanvas.Header closeButton>
                        <Styles.OffcanvasTitle>RoboControl</Styles.OffcanvasTitle>
                    </Offcanvas.Header>
                    <Styles.OffcanvasBody>
                        <Styles.LinkCont className='first-link' to={PATHS.HOME} onClick={this.handleLink}>HOME</Styles.LinkCont>
                        <Styles.LinkCont to={PATHS.CONTROL} onClick={this.handleLink}>CONTROL</Styles.LinkCont>
                        <Styles.LinkCont to={PATHS.ABOUT} onClick={this.handleLink}>ABOUT</Styles.LinkCont>
                    </Styles.OffcanvasBody>
                </Styles.OffcanvasContainer>
            </>
		)
	}
}

export default Banner
