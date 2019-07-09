import styled from 'styled-components';


export const Container = styled.div `
	@media only screen and (max-width: 600px) { padding: 30px 0; }
	@media only screen and (min-width: 600px) { align-items: center; }
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	margin: 0 auto;
	max-width: 95%;
	padding: 60px 0;
	width: 100%;

	h1 {
		@media only screen and (max-width: 600px) { font-size: 28px; }
		color: #fff;
		display: block;
		font-size: 36px;
	}

	.scroll {
		max-width: 100%;
		overflow-x: auto;
		padding: 1em 0;
		position: relative;
	}
`;

export const ExampleList = styled.ul`
	@media only screen and (max-width: 600px) {
		flex-wrap: nowrap;
		margin-top: 3em;
		overflow: auto;
	}
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	margin: 1em 0 0 0;
	padding: 0;

	&:before {
		@media only screen and (max-width: 600px) {
			position: absolute;
			top: 1em;
		}
		color: #fff;
		content: 'Exemplos: ';
		display: block;
		font-size: 18px;
		font-weight: bold;
		width: 100%;
	}

	li {
		background-color: #fff;
		border-radius: 4px;
		font-size: 14px;
		margin: .5em;
		padding: .5em 1em;
	}
`;

export const Form = styled.form `
	@media only screen and (max-width: 600px)  {
		background-color: #ccc;
	}
	display: flex;
	flex-wrap: wrap;
	margin-top: 20px;
	max-width: 550px;
	width: 100%;

	input,
	button {
		@media only screen and (max-width: 600px) {
			height: 50px;
			padding: 0 8px;
		}
		border-radius: 3px;
		border: none;
		height: 55px;
		padding: 0 20px;
	}

	input {
		@media only screen and (max-width: 600px) { font-size: 16px; }
		background: #fff;
		border: ${props => (props.withError ? '2px solid #f00' : 0 )};
		color: #444;
		flex: 1;
		font-size: 18px;
	}

	button {
		@media only screen and (max-width: 600px) {
			font-size: 16px;
			margin-left: 0;
			width: 60px;
		}
		background: #6dd0a7;
		color: #fff;
		font-size: 20px;
		font-weight: bold;
		margin-left: 10px;
		width: 80px;

		&:hover { background: #67c19b; }
	}
`;