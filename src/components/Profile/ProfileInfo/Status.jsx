import React from 'react';


class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state.profileStatus = props.status;
    }

    state = {
        editMode: false,
        profileStatus: ''
    }

    editModeON = () => {
        this.setState(
            { editMode: true }
        )
    }

    editModeOFF = () => {
        this.setState(
            { editMode: false }
        );
        this.props.changeStatus(this.state.profileStatus);

    }

    onStatusChange = (e) => {
        this.setState({ profileStatus: e.currentTarget.value})
    }

    componentDidMount() {
       
    }

    componentDidUpdate(prevProps, PrevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({ profileStatus: this.props.status })
        }
        
    }

    render() {
        
        return (
            <div>{this.state.editMode
                ? <div><input onChange={this.onStatusChange} onBlur={this.editModeOFF} value={this.state.profileStatus} autoFocus={true} /></div>
                : <div><span onClick={this.editModeON}>{this.state.profileStatus}</span></div>
            }


            </div>
        )
    }
}

export default Status;