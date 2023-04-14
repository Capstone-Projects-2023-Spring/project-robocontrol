import styled from 'styled-components';

export default class AboutStyles {
	static readonly AboutContainer = styled.div`
		display: grid;
		text-align: left;
		min-height: 100vh;
	`;


	static readonly AboutTextContainer = styled.div`
		background-color: #101414;
		margin-left: calc(var(--vh) * 0.1);
		margin-right: calc(var(--vh) * 0.1);
		margin-top: calc(var(--vh) * 0.05);
		margin-bottom: calc(var(--vh) * 0.05);
		padding: 5%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 25px;
		box-shadow: 10px 10px 13px rgba(0, 0, 0, 0.2);
		overflow-y: auto;
	`;

	static readonly AboutContent = styled.div`
		color: #d0d4dc;
		margin: 0 1rem;

		& > h1 {
			margin: 1rem 0;
			padding-bottom: 10px;
			border-bottom: 2px solid #323244;
			text-align: center; // Add this line to center the h1 title horizontally
		}
			
		& > h2 {
			margin: 1rem 0;
			padding-bottom: 10px;
			border-bottom: 2px solid #323244;
		}

		& > p {
			margin: 1rem 0;
		}
	`;
}
