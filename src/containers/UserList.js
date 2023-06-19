import React, { Component } from "react"
import { loadUser } from "../actions/users"
import UserItem from "../components/UserItem"
import { connect } from 'react-redux'

class UserList extends Component {

    componentDidMount() {
        this.props.load()
    }

    render(){
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map((user, index) => (
                        <UserItem
                            key={index}
                            id={user._id}
                            no={index + 1}
                            name={user.name}
                            phone={user.phone} />
                    ))}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    load: () => dispatch(loadUser())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)