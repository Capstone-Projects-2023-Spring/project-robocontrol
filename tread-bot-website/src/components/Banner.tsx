// Third party imports
import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
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
                <Styles.HamburgerButton onClick={this.handleShow}>
					<RxHamburgerMenu size={'40px'}/>
				</Styles.HamburgerButton>

                <Styles.OffcanvasContainer show={this.state.show} onHide={this.handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title style={{color: 'black'}}>RoboControl</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Styles.OffcanvasBody>
                        <Styles.LinkCont className='first-link' to={PATHS.HOME} onClick={this.handleLink}>Home</Styles.LinkCont>
                        <Styles.LinkCont to={PATHS.CONTROL} onClick={this.handleLink}>Control</Styles.LinkCont>
                        <Styles.LinkCont to={PATHS.CONTROL} onClick={this.handleLink}>Navigation</Styles.LinkCont>
                        <Styles.LinkCont to={PATHS.CONTROL} onClick={this.handleLink}>About</Styles.LinkCont>
                    </Styles.OffcanvasBody>
                </Styles.OffcanvasContainer>
            </>
		)
	}
}

export default Banner
