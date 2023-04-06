import styled from 'styled-components'
import { COLORS } from './tools/Constants';

export default class AppStyles {
	static readonly AppContainer = styled.div`		
		background: #a8b4fc;
		/* gradient */
		/* background: linear-gradient(135deg, ${COLORS.GRADIENT_START} 0%, ${COLORS.GRADIENT_END} 100%); */
		min-height: 100vh;
	`

	static readonly Content = styled.div`
	`
}
