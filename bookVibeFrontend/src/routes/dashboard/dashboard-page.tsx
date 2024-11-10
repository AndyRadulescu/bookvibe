import {Link} from 'react-router-dom';

export default function DashboardPage() {
    const lordOfTheRingsDummy = '9780261102439';
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Dashboard page</h1>
            <Link to={`book/${lordOfTheRingsDummy}`}>Lord of the rings</Link>
        </div>
    );
}
