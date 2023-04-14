import { createGlobalStyle } from 'styled-components'
import { COLORS } from './tools/Constants'

export default createGlobalStyle`
	body {
		background-color: ${COLORS.BACKGROUND};
	}
`
