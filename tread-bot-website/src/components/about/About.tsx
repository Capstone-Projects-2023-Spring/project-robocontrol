import React from 'react'
import ReactMarkdown from 'react-markdown'
import AboutStyles from './AboutStyles'
import Markdown from './About.md'
import { useState, useEffect } from 'react'

const About = (): React.ReactElement => {
	const [markdownText, setMarkdownText] = useState('')

	useEffect(() => {
		fetch(Markdown).then(res => res.text()).then(text => setMarkdownText(text))
	})
	
	return (
		<AboutStyles.AboutContainer>
			<AboutStyles.AboutTextContainer>
				<AboutStyles.AboutContent>
					<ReactMarkdown children={markdownText} />
				</AboutStyles.AboutContent>
			</AboutStyles.AboutTextContainer>
		</AboutStyles.AboutContainer>
	);
};

export default About;
