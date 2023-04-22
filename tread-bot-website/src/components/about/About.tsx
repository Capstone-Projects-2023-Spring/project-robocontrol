import React from 'react'
import ReactMarkdown from 'react-markdown'
import AboutStyles from './AboutStyles'
import { useState, useEffect } from 'react'

const About = (): React.ReactElement => {
	const [markdownText, setMarkdownText] = useState('')

	useEffect(() => {
		fetch('./About.md').then(res => res.text()).then(text => setMarkdownText(text))
	})
	
	return (
		<AboutStyles.AboutContainer data-testid='About'>
			<AboutStyles.AboutTextContainer>
				<AboutStyles.AboutContent>
					<ReactMarkdown children={markdownText} />
				</AboutStyles.AboutContent>
			</AboutStyles.AboutTextContainer>
		</AboutStyles.AboutContainer>
	);
};

export default About;
