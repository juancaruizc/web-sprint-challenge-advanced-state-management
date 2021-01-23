import React, {useState} from 'react';
import {connect} from 'react-redux'
import {postSmurfs, errorValue} from '../actions'

class AddForm extends React.Component {
    state = {
        id: Date.now(),
        name: '',
        position: '',
        nickname: '',
        description: ''
    }

    handleName = (e) => {
        e.preventDefault()
        this.setState({
            name: this.state.value,
            position: this.state.position,
            nickname: this.state.nickname,
            description: this.state.description
        })
    }

    handlePosition = (e) => {
        e.preventDefault()
        this.setState({
            name: this.state.name,
            position: this.state.value,
            nickname: this.state.nickname,
            description: this.state.description
        })
    }

    handleNickname = (e) => {
        e.preventDefault()
        this.setState({
            name: this.state.value,
            position: this.state.position,
            nickname: this.state.value,
            description: this.state.description
        })
    }

    handleDescription = (e) => {
        e.preventDefault()
        this.setState({
            name: this.state.value,
            position: this.state.position,
            nickname: this.state.nickname,
            description: this.state.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.postSmurfs(this.state);
        // this.props.error !== '' ? errorValue() : ''
        if (this.props.error !== '') {
            errorValue()
        }
        this.setState({
            id: Date.now(),
            name: '',
            position: '',
            nickname: '',
            description: ''
        })
    }

    render() {
        return(<section>
            <h2>Add Smurf</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name*</label><br/>
                    <input onChange={this.handleName} name="name" id="name" />
                </div>

                <div className="form-group">
                    <label htmlFor="position">Position*</label><br/>
                    <input onChange={this.handlePosition} name="position" id="position" />
                </div>

                <div className="form-group">
                    <label htmlFor="nickname">Nickname*</label><br/>
                    <input onChange={this.handleNickname} name="nickname" id="nickname" />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label><br/>
                    <input onChange={this.handleDescription} name="description" id="description" />
                </div>

                {this.props.error ? <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {this.props.error.response.data.error}</div> : ''}
                <button onClick  = {this.handleClick}>Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = (state) => {
   return {
    smurfs: state.smurfs,
    error: state.error
   } 
}

export default connect(mapStateToProps, {postSmurfs, errorValue})(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.