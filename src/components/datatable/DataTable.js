import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatablesource';
import './DataTable.css';
import { Link } from 'react-router-dom';

const DataTable = () => {
    const actionColumn = [{field: "action", headerName: "Action", width: 200, renderCell:() =>{
        return (
            <div className='cellAction'>
                <Link to="/users/test">
                    <dvi className="viewButton">View</dvi>
                </Link>
                <dvi className="deleteButton">Delete</dvi>
            </div>
        );
    }}];
    return (
        <>
        <div className='my-4'>
            <Link className='' to="/users/new">
                <p  className='p-3 inline my-3 rounded-none bg-indigo-500 hover:text-white'>Add new users</p>
            </Link>
        </div>
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