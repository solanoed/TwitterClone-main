import Input from "./../../common/Input";
import Button from "./../../common/Button";
import Form from "./../../common/Form";
import Metadata from "../../common/Metadata";
import { Container} from "./login.styles";

const Login = () => <>
    
    <Container><h2>Login</h2></Container>
    <Form>
        <Metadata
            title="Login"
            content={"Welcome to My Twitter"}
        />
        <Input
            type="text"
            name="username"
            id="username"
            title="Username"
            required="required"
        />
        <Input
            type="password"
            name="password"
            id="password"
            title="Password"
        />
        <Button text="Login" />
        <Button text="Login" primary />
        <Button text="Login" secondary />
    </Form>
    
</>;

export default Login;