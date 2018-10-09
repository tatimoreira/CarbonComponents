import React, { Component } from 'react';
import { DataTable, Button } from 'carbon-components-react';
import { iconDownload, iconEdit, iconSettings } from 'carbon-icons';

const url = "http://localhost:3000/data";

const headers = [
    {
        key: "name",
        header: "Name"
    },
    {
        key: "protocol",
        header: "Protocol"
    },
    {
        key: "port",
        header: "Port"
    },
    {
        key: "rule",
        header: "Rule"
    }
];

const {
    Table,
    TableHead,
    TableHeader,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TableSelectAll,
    TableSelectRow,
    TableToolbar,
    TableToolbarSearch,
    TableToolbarContent,
    TableToolbarAction,
    TableExpandHeader,
    TableExpandRow,
    TableExpandedRow
} = DataTable;

class SimpleDataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        };
    }

    componentDidMount() {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ people: data });
            })
    }

    onSearch = e => {
        console.log(e.target.value);
    };

    render() {
        return (
            <div>
                <DataTable
                    rows={this.state.people}
                    headers={headers}
                    render={({
                        rows,
                        headers,
                        getHeaderProps,
                        getSelectionProps,
                        getRowProps,
                        selectedRows,
                        onInputChange
                    }) => (
                            <TableContainer title="Test Table Component">
                                <TableToolbar>
                                    {/* pass in `onInputChange` change here to make filtering work */}
                                    <TableToolbarSearch onChange={onInputChange} />
                                    <TableToolbarContent>
                                        <TableToolbarAction
                                            icon={iconDownload}
                                            iconDescription="Download"
                                        />
                                        <TableToolbarAction
                                            icon={iconEdit}
                                            iconDescription="Edit"
                                        />
                                        <TableToolbarAction
                                            icon={iconSettings}
                                            iconDescription="Settings"
                                        />
                                        <Button small kind="primary">
                                            Add new
                                        </Button>
                                    </TableToolbarContent>
                                </TableToolbar>

                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableExpandHeader />
                                            {headers.map(header => (
                                                <TableHeader {...getHeaderProps({ header })}>
                                                    {header.header}
                                                </TableHeader>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map(row => (
                                            <React.Fragment key={row.id}>
                                                <TableExpandRow {...getRowProps({ row })}> 
                                                    {row.cells.map(cell => (
                                                        <TableCell key={cell.id}>{cell.value}</TableCell>
                                                    ))}
                                                </TableExpandRow>
                                                {/* toggle based off of if the row is expanded. If it is, render TableExpandedRow */}
                                                {row.isExpanded && (
                                                    <TableExpandedRow>
                                                        <TableCell colSpan={headers.length + 1}>
                                                            <h3>Expandable row content</h3>
                                                            <p>Description here</p>
                                                        </TableCell>
                                                    </TableExpandedRow>
                                                )}
                                            </React.Fragment>

                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>)} />
            </div>
        );
    }
}

export default SimpleDataTable;
