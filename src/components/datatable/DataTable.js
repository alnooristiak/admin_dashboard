import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatablesource';
import './DataTable.css';

const DataTable = () => {
    return (
        <>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={userRows}
                    columns={userColumns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </>
    );
};

export default DataTable;