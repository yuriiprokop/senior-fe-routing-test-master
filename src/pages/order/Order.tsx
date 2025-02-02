import { FC } from "react";
import useParams from "../../hooks/use-params/use-params";
import Link from "../../components/Link/Link";

const Order: FC = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Order ID {id}</h1>
            <Link to="/dashboard" >
                Back to Dashboard
            </Link>
        </div>
    );
}

export default Order;