import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatablesource';
import './DataTable.css';

const DataTable = () => {
    const actionColumn = [{field: "action", headerName: "Action", width: 200, renderCell:() =>{
        return (
            <div className='cellAction'>
                <dvi className="viewButton">View</dvi>
                <dvi className="deleteButton">Delete</dvi>
            </div>
        );
    }}];
    return (
        <>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={userRows}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={7}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </>
    );
};

export default DataTable;