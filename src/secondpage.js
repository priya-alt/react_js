import React from 'react';
import Badge from '@material-ui/core/Badge';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
class Secondpage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            items: [],
            totalPrice: 0
        };
    }
    componentDidMount() {
        console.log("from link", this.props.location.state.items)
        this.setState({ items: this.props.location.state.items })
        var getTotalValuesArray =this.props.location.state.items.map(val => val.price)
        this.setState({ totalPrice: getTotalValuesArray.reduce((a, b) => a + b, 0)})
    }
render() 
{
 return (
  <div>
  <div className="table">
 <Table className="table-data">
  <TableHead>
  <TableRow>
 <TableCell text-color="red">Name</TableCell>
   <TableCell align="right">Price</TableCell>
   </TableRow>
  </TableHead>
  <TableBody>
 {this.state.items.map(row => (
<TableRow key={row.name}>
<TableCell component="th" scope="row">
 {row.name}
 </TableCell>
 <TableCell align="right">{row.price}</TableCell>
 </TableRow>
))}
 </TableBody>
 </Table>
<div> The total price is {this.state.totalPrice}</div>
</div>
 </div>
 )
};
}
export default Secondpage;