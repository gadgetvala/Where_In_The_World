import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	@media (max-width: 500px) {
		margin: 0;
	}
`;

export const Item = styled.div`
	background-color: ${({ theme }) => theme.secondary};
	margin: 1.5rem 1.2rem 1.2rem 1.2rem;
	width: 20rem;
	border-radius: 8px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	transition: all 0.09s;
	&:hover {
		transform: translate(0px, -2px) scale(1.02);
	}
	@media (max-width: 500px) {
		margin: 1.2rem 0rem 1.2rem 0rem;
		width: 18rem;
	}
`;

export const Flag = styled.img`
	border-radius: 8px 8px 0 0;
	height: 10rem;
	width: 20rem;
	@media (max-width: 500px) {
		height: 8rem;
		width: 18rem;
	}
`;

export const Detail = styled.p`
	padding-top: 0.5rem;
	padding-left: 1rem;
	&:last-child {
		padding-bottom: 0.5rem;
	}
`;

export const Small = styled.span`
	font-size: 0.75rem;
`;

export const Fields = styled.span`
	font-weight: bold;
`;

/*
 * LIST VIEW STYLES
 */

export const ItemList = styled.div`
	background-color: ${({ theme }) => theme.secondary};
	margin: 1.5rem 1.2rem 1.2rem 1.2rem;
	width: 20rem;
	border-radius: 8px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	transition: all 0.09s;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	&:hover {
		transform: translate(0px, -2px) scale(1.02);
	}
	@media (max-width: 500px) {
		margin: 1.2rem 0rem 1.2rem 0rem;
		width: 18rem;
	}
`;

export const FlagList = styled.img`
	border-radius: 200px;
	margin: 0.7rem;
	height: 4rem;
	width: 4rem;
`;

export const DataList = styled.span`
	text-align: center;
`;
