import styled from 'styled-components';

export default class AboutStyles {
  static readonly AboutContainer = styled.div`
    display: grid;
    text-align: left;
    min-height: 100vh; // Change height to min-height
  `;


  static readonly AboutTextContainer = styled.div`
    background-color: #101414;
    margin-left: 200px;
    margin-right: 200px;
    margin-top: 100px;
    margin-bottom: 100px;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    box-shadow: 10px 10px 13px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
    /* height: calc(100% - 200px);  */
  `;

static readonly AboutContent = styled.div`
color: #d0d4dc;
margin: 0 1rem;

h1 {
    margin: 1rem 0;
    padding-bottom: 10px;
    border-bottom: 2px solid #323244;
    text-align: center; // Add this line to center the h1 title horizontally
  }
  
h2 {
  margin: 1rem 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #323244;
}

p {
  margin: 1rem 0;
}
`;
}