import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;
	background-color: ${({theme}) => theme.background};
	display: flex;
	flex-direction: column;
	color: ${({theme}) => theme.textColor};
`;

export const BackContainer = styled.div`
	height: 80px;
	margin: 2rem 0 0 4rem;

	@media (max-width: 500px) {
		height: 80px;
		margin: 2rem 0 3rem 2rem;
	}
`;

export const Back = styled.p`
	display: inline;
	color: ${({theme}) => theme.text};
	/* background-color: #292a2c; */
	background-color: ${({theme}) => theme.secondary};
	border-radius: 10px;
	/* background: linear-gradient(145deg, #252628, #2c2d2f); */
	/* box-shadow: 5px 5px 15px #27282a, -1px -1px 5px #2b2c2e; */
	box-shadow: ${({theme}) => theme.dropDownShadow};
	padding: 0.5rem 0.7rem 0.5rem 0.7rem;
`;

export const CountryDetailContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	@media (max-width: 500px) {
		flex-direction: column;
	}
`;

export const Image = styled.img`
	height: 15rem;
	width: 30rem;
	border-radius: 10px;
	background: linear-gradient(145deg, #d0d2d2, #f7f9f9);
	box-shadow: ${({theme}) => theme.dropDownShadow};

	@media (max-width: 500px) {
		height: 10rem;
		width: 20rem;
	}
`;

export const CountryData = styled.div`
	padding: 3rem;
	font-size: 1.3rem;
	line-height: 2rem;
	letter-spacing: 0.2rem;
	margin: 2rem;
	border-radius: 13px;
	/* background: linear-gradient(145deg, #d0d2d2, #f7f9f9); */
	background: ${({theme}) => theme.secondary};
	/* box-shadow: 24px 24px 48px #d0d2d2, -24px -24px 48px #feffff; */
	box-shadow: ${({theme}) => theme.dropDownShadow};
	max-width: 32rem;

	@media (max-width: 500px) {
		padding: 2rem;
		font-size: 1rem;
		line-height: 2rem;
		letter-spacing: 0.2rem;
	}
`;

export const MakeBig = styled.p`
	font-size: 1.8rem;
	margin-bottom: 10px;

	@media (max-width: 500px) {
		font-size: 1.5rem;
	}
`;
