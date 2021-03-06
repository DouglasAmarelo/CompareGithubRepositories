import styled from 'styled-components';

export const Container = styled.div`
	@media only screen and (min-width: 600px) { justify-content: center; }
	@media only screen and (max-width: 700px) { justify-content: flex-start; }
	display: flex;
	margin-top: 30px;
	width: 100%;
`;

export const Repository = styled.div`
	background-color: #fff;
	border-radius: 3px;
	box-shadow: 0 3px 5px rgba(0, 0, 0, .25);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 10px;
	min-width: 250px;
	transition: transform .3s ease;

	&:hover {
		box-shadow: 0 8px 10px rgba(0, 0, 0, .25);
		transform: scale(1.03);
	}

	header {
		align-items: center;
		display: flex;
		flex-direction: column;
		padding: 20px;

		img { width: 64px; }

		strong {
			display: block;
			font-size: 22px;
			margin-top: 10px;
			text-align: center;
		}

		small {
			color: #777;
			font-size: 12px;

			a {
				color: #777;

				&:hover { color: #6dd0a7; }
			}
		}
	}

	ul {
		list-style: none;

		li {
			border-top: 1px solid #e7e7e7;
			padding: 8px 10px;
			text-align: center;

			&:nth-child(odd) { background-color: #f5f5f5; }

			&.flex { justify-content: space-around; }

			& > div {
				padding: 0 5px;
				width: 100%;
			}
		}

		small {
			font-weight: bold;
			color: #888;
			display: block;
			font-size: 9px;
			padding: 5px 0;
			text-transform: uppercase;
		}
	}

	.border { border-top: 1px solid #e7e7e7; }

	.flex {
		&.flex-buttons {
			justify-content: space-between;
			/* margin-top: .5em; */
			padding: 1em .5em;
		}
	}

	button {
		border: 0;
		color: #fff;
		cursor: pointer;
		font-size: 12px;
		margin: 0 .5em;
		min-height: 35px;
		padding: .5em .2em;
		width: 50%;

		&.remove-item {
			background-color: #e25757;

			&:hover { background: #d03434; }
		}

		&.update-item {
			background-color: #6dd0a7;

			&:hover { background: #67c19b; }
		}

		i {
			@media only screen and (max-width: 600px) {
				display: block;
				margin: 0 auto 10px auto;
			 }
			font-size: 16px;
			display: inline-block;
			margin-right: 10px;
		}
	}
`;