import React from "react"
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import axios from 'axios'
import PropTypes from "prop-types"

class CompanyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      referrer: null
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { company } = this.props;
    try {
      const response = await axios({
        method: company.id ? 'put' : 'post',
        url: this.props.url,
        data: { company: {
          name: document.getElementById("name").value,
          country: document.getElementById("country").value,
          currency: document.getElementById("currency").value
        } }
      })
      this.setState({ referrer: "/home" })
    } catch (e) {
      alert(`😱 Axios request failed: ${e.response.data.errors.join(', ')}`);
    }
  }

  updateRedirect = () => {    
    this.setState({ referrer: null, navigate: true })
  }

  render () {
    const { navigate, referrer } = this.state;
    const { company } = this.props;

    if (navigate) {
      location.reload()
    }

    if (referrer) {
      this.updateRedirect()
      return <Router><Redirect to={referrer} /></Router>
    }

    return (
      <React.Fragment>        
        <div>
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="name" className="control-label label">Name</label>
              <input id="name" defaultValue={company.name} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="country" className="control-label label">Country</label>
              <input id="country" defaultValue={company.country} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="currency" className="control-label label">Currency</label>
              <input id="currency" defaultValue={company.currency} className="form-control" />
            </div>
            <div className="form-group">
              <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

CompanyForm.propTypes = {
  company: PropTypes.object,
  url: PropTypes.string
};
export default CompanyForm
