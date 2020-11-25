import React from "react"
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom'
import { months, monthsShort } from 'moment'
import humanizeString from 'humanize-string'
import PropTypes from "prop-types"

export default class CashMangementTable extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        referrer: null
      }
  }

  handleCreate = () => {
    this.setState({ referrer: '/companies/new' });
  }

  render () {
    const { table, currentYear, current, company, rows, year } = this.props;
    const { referrer } = this.state;

    if (referrer) {
      location.reload()
      return <Router><Redirect to={referrer} /></Router>
    }

    return (
      <React.Fragment>        
        <Router>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" colSpan={13}>{`Cash management table for ${company.name}`}</th>
              </tr>
              <tr>
                <th scope="col">
                  { currentYear == year ? `${year} (the current year)` : year }
                </th>
                { monthsShort().map((month, index) => <th key={index} scope="col">{month}</th> )}
              </tr>
            </thead>
            <tbody>
              { Object.entries(rows).map((row, index) => 
                <tr key={index} scope="col">
                  <td className={ row[1] ? 'font-weight-bold text-left' : 'text-center' }>{humanizeString(row[0])}</td>
                  { months().map((month, index) => 
                    <td key={index}>{ table[month] ? (table[month][row[0]] ? table[month][row[0]] : null ) : null }</td> )}
                </tr> )}
            </tbody>
          </table>

          <div className="row mt-2 mb-2">
            <div className="col-sm pl-0 pr-0">
              <div className="float-right">
                { (year > currentYear) ?
                  <Link 
                    to={`/companies/${company.id}/cash_management_table?year=${year - 1}`}
                    className="btn btn-primary mr-1" 
                    onClick={() => { this.setState({ referrer: `/companies/${company.id}/cash_management_table?year=${year - 1}` }) }}>
                      Previous year
                  </Link> : null }
                { (((year + 1 - currentYear) <= 2) ? 
                  <Link 
                    to={`/companies/${company.id}/cash_management_table?year=${year + 1}`}
                    className="btn btn-primary" 
                    onClick={() => { this.setState({ referrer: `/companies/${company.id}/cash_management_table?year=${parseInt(year) + 1}` }) }}>
                      Next year
                  </Link> : null ) }
              </div>
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

CashMangementTable.propTypes = {
  table: PropTypes.object,
  currentYear: PropTypes.number,
  year: PropTypes.number,
  company: PropTypes.object,
  rows: PropTypes.object,
};
