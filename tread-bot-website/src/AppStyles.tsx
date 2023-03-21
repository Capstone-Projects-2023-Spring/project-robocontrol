import styled from 'styled-components'
import { COLORS } from './tools/Constants';

export default class AppStyles {
	static readonly AppContainer = styled.div`		
		background: linear-gradient(135deg, ${COLORS.GRADIENT_START} 0%, ${COLORS.GRADIENT_END} 100%);
	`

	static readonly Content = styled.div`
	`
}
