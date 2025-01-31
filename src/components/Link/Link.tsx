import { FC } from "react";
import { LinkProps } from "./Link.type";


const Link: FC<LinkProps> = ({ to, params, children }) => {
    console.log(to, params, children);
    return (<>
        {children}
    </>)
};

export default Link;