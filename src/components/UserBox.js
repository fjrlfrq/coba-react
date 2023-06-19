import UserForm from "../containers/UserForm";
import UserList from "../containers/UserList";

export default function UserBox() {

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h1>Phone Book Apps</h1>
                </div>
                <div className="card-body">
                    <UserForm />
                </div>
                <UserList />
                <div className="card-footer">

                </div>
            </div>
        </div>

    )
}