import React from "react";
import { connect } from 'react-redux';
import { fetchHds } from "../../actions";
import { Link } from 'react-router-dom'

class HdList extends React.Component {
    
    componentDidMount() {
        this.props.fetchHds()
    }

    renderTableBody = (hd) => {
        return (
            <tr key={hd.id}>
                <td>{hd.name}</td>
                <td>{hd.hd_size}</td>
                <td>{hd.code}</td>
                <td style={{textAlign: "center"}}>

                    <button>X</button>
                </td>
                <td style={{textAlign: "center"}}>
                    <button className="ui button primary">Edit</button>
                    <button className="ui button negative">Delete</button>
                </td>
            </tr>
        );
    }

    renderCreate = () => {
        return (
            <div style={{textAlign: "right"}}>
                <Link to='/hds/new' className="ui button primary">Add</Link>
            </div>
        )
    }
    renderTable = () => {
        return (
            <div>
            <table className="ui selectable sortable celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Code</th>
                        <th style={{width: "20px"}}>QRCode</th>
                        <th style={{width: "182px"}}></th>
                    </tr>
                </thead>
                <tbody>
                { this.props.hds.map( hd => {
                        return this.renderTableBody(hd)
                    })
                }            
                </tbody>
            </table>    
            {this.renderCreate()}
            </div>
        );
        
    }
    
    render() {
        return this.renderTable()
    }
}

const mapStateToProps = (state) => {
    return ({hds: Object.values(state.hds)})
}

export default connect(mapStateToProps, { fetchHds })(HdList);