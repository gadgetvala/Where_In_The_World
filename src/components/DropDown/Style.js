import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	font-size: 1rem;
	justify-content: flex-end;
	@media (max-width: 500px) {
		justify-content: space-around;
		flex-wrap: wrap;
	}
`;

export const Menu = styled.select`
	margin: ${({ margin }) => margin};
	font-size: 1rem;
	border: 0;
	border-radius: 2px;
	padding: 0.5rem;
	background: ${({ theme }) => theme.secondary};
	box-shadow: ${({ theme }) => theme.dropDownShadow};
	color: inherit;
	@media (max-width: 500px) {
		margin: 1rem;
	}
`;
