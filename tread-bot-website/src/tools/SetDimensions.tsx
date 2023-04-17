// Third party
import React from 'react'
import { isMobile } from 'react-device-detect'

// General tools
import useWindowDimensions, { SetVariableCssVars } from './HelpfulFunctions'


const SetDimensions = (): React.ReactElement => {
	// This is a new component because when in <App>, it was reloading if scrolled in too soon and looking bad.
	document.documentElement.style.setProperty('--vh', `${useWindowDimensions().width}px`)
	document.documentElement.style.setProperty('--vh-npx', `${useWindowDimensions().width}`)
	console.log('Width: '+useWindowDimensions().width)
    if (!isMobile) SetVariableCssVars()
	console.log('Mobile user: ' + isMobile)
	return (<></>)
}

export default SetDimensions
