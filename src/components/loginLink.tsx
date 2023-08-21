import { NavLink } from "react-router-dom";
import { ILoginLink } from "../interfaces/components";

const LoginLink = ({ title }: ILoginLink) => {
  return (
    <p>
      <NavLink to="/profile">Login </NavLink>
      {title}
    </p>
  );
};

export default LoginLink;
