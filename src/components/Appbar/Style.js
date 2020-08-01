import styled from 'styled-components';

export const TopBar = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: ${({theme}) => theme.secondary};
	margin: 0 0 1rem 0;
	justify-content: space-between;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 15px 0 rgba(0, 0, 0, 0.15);
	color: ${({theme}) => theme.textColor};
	@media (max-width: 500px) {
		justify-content: space-between;
	}
`;

export const Brand = styled.h1`
	font-family: 'Sahitya', serif;
	margin: 1rem 1rem 1rem 8rem;
	font-size: 1.7rem;
	font-weight: bold;
	@media (max-width: 500px) {
		margin: 1rem 1rem 1rem 1.4rem;
		font-size: 0.9rem;
	}
`;

export const SearchBar = styled.div`
	margin: 1rem 8rem 1rem 1rem;
	font-size: 1rem;
	@media (max-width: 500px) {
		position: absolute;
		left: 14rem;
		margin: 0 0 0 0;
		font-size: 0.9rem;
	}
`;

export const SearchInput = styled.input`
	color: ${({theme}) => theme.textColor};
	background-color: #eae6e6;
	border: 0;
	border-radius: 2rem;
	padding: 0.5rem;
	@media (max-width: 500px) {
		color: #000;
		background-color: #9b9a9a;
		border: 0;
		border-radius: 1rem;
		padding: 0.2rem 0.2rem 0.2rem 0.5rem;
		width: 80%;
	}
`;
