import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	font-size: 1rem;
	justify-content: flex-end;
	@media (max-width: 500px) {
		justify-content: space-around;
	}
`;

export const Menu = styled.select`
	margin: ${({ margin }) => margin};
	font-size: 1rem;
	border: 0;
	border-radius: 2px;
	padding: 0.5rem;
	background: #f1f4dc;
	box-shadow: 5px 5px 8px #e0e3cd, -5px -5px 8px #ffffeb;
	@media (max-width: 500px) {
		margin: 1rem;
	}
`;

export const Thisthing = styled.div`
	margin: ${({ theme }) => console.log(theme)};
`;
