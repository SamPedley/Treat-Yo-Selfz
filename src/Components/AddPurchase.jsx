import React, { Component } from 'react';


class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', cost: '' };
  }

  onSave (event) {
    event.preventDefault();
    const { name, cost } = this.state
    const { user, onAdd } = this.props

    onAdd({ name, cost, user })
    this.setState({ name: '', cost: 0 })
  }

  render () {
    return (
    <form onSubmit={this.onSave.bind(this)} className='container'>
    
    <div className='row'>
    <div className="input-group col-sm-6 col-12 mb-2">
      <input value={this.state.name} className="form-control" placeholder='Name' onChange={(e) => this.setState({name: e.target.value})} />
    </div>

    <div className="input-group col-sm-6 col-12 mb-2">
      <span className="input-group-addon" id="sizing-addon1">$</span>
      <input value={this.state.cost} className="form-control" placeholder='Cost' type='number' onChange={(e) => this.setState({cost: e.target.value})} />
    </div>
    </div>
      
      <div className='row'>
    <div className='col'>
      <button className="btn btn-primary btn-block" onClick={this.onSave.bind(this)}>
      <i className="far fa-save"></i> Save
      </button>
      </div>
      </div>
    
      
  </form>
  );
  }
}

export default Input;