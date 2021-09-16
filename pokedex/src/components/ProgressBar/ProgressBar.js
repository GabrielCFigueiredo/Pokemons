import React, { useState } from 'react'
import styled from 'styled-components';

const ContainerBar = styled.div `
background-color: #d8d8d8;
	border-radius: 20px;
	position: relative;
	margin: 15px 0;
	height: 30px;
	width: 300px;
`

const ProgressBar = styled.div `
background: linear-gradient(to left, #F2709C, #FF9472);
	box-shadow: 0 3px 3px -5px #F2709C, 0 2px 5px #F2709C;
	border-radius: 20px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 0;
	opacity: 0;
	transition: 1s ease 0.3s;
`

const Progress = ({done}) => {
	const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<ContainerBar className="progress">
			<ProgressBar className="progress-done" style={style}>
				{done}%
			</ProgressBar>
		</ContainerBar>
	)
}
export default Progress;
/*const App = () => (
	<>
		<h1>React Progress Bar</h1>
		<Progress done="70"/>
	</>
);
	
ReactDOM.render(<App />, document.getElementById('app'));*/