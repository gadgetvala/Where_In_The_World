import styled from 'styled-components';

export const Container = styled.div`
	background-color: ${({theme}) => theme.background};
	color: ${({theme}) => theme.textColor}
`;
