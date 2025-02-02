import { FC } from "react";
import Link from "../../components/Link/Link";

const Dashboard: FC = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {[1, 2, 3].map((id) => (
                    <li key={id}>
                        <Link to="/orders/:id" params={{ id: id.toString() }}>
                            Order {id}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;