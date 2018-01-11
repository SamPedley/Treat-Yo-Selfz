import React, { Component } from 'react';

import fire from '../firebase';
import UserPurchases from '../Components/UserPurchases';

class Total extends Component {
  constructor(props) {
    super(props);
    this.state = { purchases: [] };
  }

  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('purchases').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let purchase = { id: snapshot.key, ...snapshot.val() };
      purchase.cost = parseFloat(purchase.cost || 0);
      if(purchase.user === this.props.user){
        this.setState({ purchases: [purchase].concat(this.state.purchases) });
      }
    })

    messagesRef.on('child_removed', oldSnapshot => {
      const purchases = this.state.purchases.filter(item => item.id !== oldSnapshot.key)
      this.setState({purchases});
    })
  }

  onAdd(obj) {
    fire.database().ref('purchases').push(obj)
  }

  onRemove(id) {
    fire.database().ref('purchases').child(id).remove()
  }


  render() {
    const {purchases} = this.state;
    const { user } = this.props;

    return <UserPurchases
      user={user}
      purchases={purchases}
      onAdd={this.onAdd.bind(this)}
      onRemove={this.onRemove.bind(this)}
    />;
  }
}

export default Total;

