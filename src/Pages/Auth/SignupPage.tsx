import styled from "styled-components";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidUserPlus } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdWifiPassword } from "react-icons/md";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {useNavigate} from "react-router-dom"

const SignupPage = () => {

  const navigate = useNavigate()
  const Schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    const { name, email, password } = data;
    console.log(data)
    navigate("/sign/signin")
    reset()
  });
  return (
    <div>
      <Container>
        <Main>
          <Holder onSubmit={onHandleSubmit}>
            <Top>
              <TopLeft style={{ cursor: "pointer", transition: "all 350ms" }}>
                <Icon>
                  <BiSolidUser color="white" />
                </Icon>
                <Text>Sign Up</Text>
              </TopLeft>
              <TopRight to="/sign/signin" style={{ cursor: "pointer", transition: "all 350ms" , textDecoration: "none"}}>
                <Icon>
                  <BiSolidUserPlus size={20} color="#7e137e" />
                </Icon>
                <Text style={{ color: "#7e137e" }}>Sign in</Text>
              </TopRight>
            </Top>
            <Empty></Empty>
            <Wrap>
              <InputHold mt="10px">
                <Input
                  placeholder="Enter Name"
                  style={{ paddingLeft: "40px" }}
                  {...register("name")}
                />
                <Ic>
                  <AiOutlineUser />
                </Ic>
              </InputHold>
              {errors.name && <Error>Please add a name</Error>}
            </Wrap>
            <Wrap>
              <InputHold mt="20px">
                <Input
                  placeholder="Enter Email"
                  style={{ paddingLeft: "40px" }}
                  {...register("email")}
                />
                <Ic>
                  <AiOutlineUser />
                </Ic>
              </InputHold>
              {errors.email && <Error>Please a valid email address</Error>}
            </Wrap>
            <Wrap>
              <InputHold mt="15px">
                <Input
                  placeholder="Enter Password"
                  style={{ paddingLeft: "40px" }}
                  {...register("password")}
                  type="password"
                />
                <Ic>
                  <MdWifiPassword />
                </Ic>
              </InputHold>
              {errors.password && <Error>Please create a password</Error>}
            </Wrap>
            <Wrap>
              <InputHold mt="20px">
                <Input
                  placeholder="Confirm Password"
                  style={{ paddingLeft: "40px" }}
                  type="password"
                  {...register("confirm")}
                />
                <Ic>
                  <MdWifiPassword />
                </Ic>
              </InputHold>
              {errors.confirm && <Error>Password must match</Error>}
            </Wrap>

            <Button type="submit">Signup</Button>

            <Des>
              Already have an account? <Sign to="/sign/signin">Signin</Sign>
            </Des>
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

export default SignupPage;

const Sign = styled(Link)`
  text-decoration: none;
  color: purple;
  font-weight: 400;
  margin-left: 5px;
`;

const Des = styled.div`
  font-size: 14px;
  margin-top: 10px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #a009a0;
  color: white;
  font-weight: 600;
`;

const Wrap = styled.form`
  display: flex;
  flex-direction: column;
  width: 95%;
`;

const Error = styled.div`
  color: red;
  font-size: 11px;
  display: flex;
  justify-content: flex-end;
  margin-top: 3px;
`;

const Ic = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  margin-right: 330px;
  color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Empty = styled.input`
  margin-top: 15px;
  border: none;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;

const InputHold = styled.div<{ mt: string }>`
  height: 40px;
  width: 100%;
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=14, Direction=45, Color=#000000)"; /*IE 8*/
  -moz-box-shadow: -1px 1px 14px -9px #000000; /*FF 3.5+*/
  -webkit-box-shadow: -1px 1px 14px -9px #000000; /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
  box-shadow: -1px 1px 14px -9px #000000; /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=14, Direction=135, Color=#000000); /*IE 5.5-7*/
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ mt }) => mt};
`;

const Icon = styled.div`
  margin-top: 4px;
`;

const Text = styled.div`
  font-weight: 500;
  color: white;
`;

const TopRight = styled(Link)`
  width: 45%;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
`;

const TopLeft = styled.div`
  width: 45%;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #a009a0;
  border-radius: 10px;
`;

const Top = styled.div`
  width: 80%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
`;

const Holder = styled.form`
  width: 400px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const Main = styled.div`
  width: 450px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=14, Direction=45, Color=#000000)"; /*IE 8*/
  -moz-box-shadow: -1px 1px 14px -9px #000000; /*FF 3.5+*/
  -webkit-box-shadow: -1px 1px 14px -9px #000000; /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
  box-shadow: -1px 1px 14px -9px #000000; /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=14, Direction=135, Color=#000000); /*IE 5.5-7*/
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f0efef;
  display: flex;
  justify-content: center;
  align-items: center;
`;
