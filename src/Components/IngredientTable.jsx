import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

const columns = [
  { field: 'name', headerName: 'Ingredient', width: 200},
  { field: 'qty', headerName: 'Qty', },
  { field: 'unit', headerName: 'Unit',},
  
];

const rows = [
  { id: uuidv4(), name: 'White Wine Vinegar', qty: 1000, unit: 'gram'},
  { id: uuidv4(), name: 'White Wine Vinegar', qty: 1000, unit: 'gram'},
  { id: uuidv4(), name: 'White Wine Vinegar', qty: 1000, unit: 'gram'},
  { id: uuidv4(), name: 'White Wine Vinegar', qty: 1000, unit: 'gram'},
  { id: uuidv4(), name: 'White Wine Vinegar', qty: 1000, unit: 'gram'},
 
  
];

export default function IngredientTable() {
  return (
    <div style={{ height: '70vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pagination='false'
        checkboxSelection
      />
    </div>
  );
}