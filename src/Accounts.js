import React from 'react';

class Accounts extends React.Component {
  constructor() {
    super();
    this.state = { accts: [] };
  }

  componentDidMount() {
    fetch('https://api.fusionfabric.cloud/retail-banking/accounts/v1/accounts?customerId=FFDC02')
      .then(response => response.json())
      .then(json => this.setState({ accts: json.data }));
  }

  render() {
    return (
      <div>
        <h1>Accounts</h1>
        {
          this.state.accts.length == 0
            ? 'Loading ...'
            : this.state.accts.map(user => (
              <div key={accts.accountId}>
                
                <label>
                  {accts.accountName}
                </label>
              </div>
            ))
        }
      </div>
    );
  }
}

export default Accounts;
