import React from "react"
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import PropTypes from "prop-types"

class Companies extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        referrer: null
      }
  }

  handleCreate = () => {
    this.setState({ referrer: '/companies/new' });
  }

  handleDestroy = async (e, id) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: 'delete',
        url: `/companies/${id}`
      })
      location.reload()
    } catch (e) {
      alert(`😱 Axios request failed: ${e.response.data.errors.join(', ')}`);
    }
    return
  }

  render () {
    const { companies } = this.props;
    const { referrer } = this.state;

    if (referrer) {
      location.reload()
      return <Router><Redirect to={referrer} /></Router>
    }

    return (
      <React.Fragment>        
        <Router>
          <div className="row mt-2 mb-2">
            <div className="col-sm pl-0 pr-0">
              <div className="float-right">
                <Link to='/companies/new' className="btn btn-primary" onClick={() => { this.setState({ referrer: '/companies/new' }) }}>Create Company</Link>
              </div>
            </div>
          </div>
          {
            companies.map(company =>
              <div className="row border rounded bg-light mt-1" key={company.id}>
                <div className="col-sm ml-1">
                  <div className="row">
                    Name: {company.name}
                  </div>
                  <div className="row">
                    Country: {company.country}
                  </div>
                  <div className="row">
                    Currency: {company.currency}
                  </div>
                </div>
                <div className="col-sm mr-1">
                  <div className="float-right">
                    <div className="row">
                      <Link to={`/companies/${company.id}/edit`} onClick={() => { this.setState({ referrer: `/companies/${company.id}/edit` }) }}>Edit</Link>
                    </div>
                    <div className="row">
                      <Link to={`/companies/${company.id}/cash_management_table`} onClick={() => { this.setState({ referrer: `/companies/${company.id}/cash_management_table` }) }}>Cash Management Table</Link>
                    </div>
                    <div className="row">
                      <Link to={`/companies/${company.id}`} onClick={(e) => { this.handleDestroy(e, company.id)  }}>Destroy</Link>
                    </div>
                  </div>
                </div>
              </div>            
            )
          }
        </Router>
      </React.Fragment>
    );
  }
}

Companies.propTypes = {
  companies: PropTypes.array
};
export default Companies
