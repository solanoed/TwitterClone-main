import Metadata from "../../common/Metadata";
import {Container, ContainerLeft, ContainerRight,ContainerElements, Button , Image,SignButton,LoginButton} from "./generalhome.styles"
import twitterBigLogo from "../../../assets/twitterBigLogo.svg";
import twitterSmallLogo from "../../../assets/twitterSmallLogo.svg";
const GeneralHome = () => {
    return (
        <>
            <Metadata name="GeneralHome" description="Welcome to twitter!"></Metadata>
            <Container>
                <ContainerLeft>
                <Image big src= {twitterBigLogo} alt="Big Twitter Logo"/>
                </ContainerLeft>
                <ContainerRight>
                    <ContainerElements>
                        <Image small src={twitterSmallLogo}/>
                        <h1>Welcome to Twitter <br/> See what's happening around you </h1>
                        <LoginButton>Login</LoginButton>
                        <SignButton>Sing Up </SignButton>
                        
                    </ContainerElements>
                </ContainerRight>
            </Container>
        </>
    );

};

export default GeneralHome;