import { StyledHeader, StyledImage } from "Components/Header/header.style";


export default function Header({ imgSrc }: { imgSrc: string }) {
    return (
        <StyledHeader>
            <StyledImage src={imgSrc} alt="" />
        </StyledHeader>
    )
}