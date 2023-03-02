import { useMediaQuery } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';



export default function IngredientTable() {
  
  const matches = useMediaQuery('(min-width:1050px)');
  const columns = [
    { field: 'name', headerName: 'Ingredient', width: ! matches ? '200' : '255'},
    { field: 'qty', headerName: 'Qty', width: ! matches ? '55' : '100' },
    { field: 'unit', headerName: 'Unit',  width:  ! matches ? '30' : '75'},
    
  ];
  
  const rows = [
    { id: uuidv4(), name: 'Hummus Component', qty: 1000, unit: 'gr'},
    { id: uuidv4(), name: 'White Wine Vinegar', qty: 1000, unit: 'gr'},
    { id: uuidv4(), name: 'White Wine Vinegar', qty: 1000, unit: 'gr'},
    { id: uuidv4(), name: 'White Wine Vinegar', qty: 1000, unit: 'gr'},
    { id: uuidv4(), name: 'White Wine Vinegar', qty: 1000, unit: 'gr'},
    { id: uuidv4(), name: 'White Wine Vinegar', qty: 1000, unit: 'gr'}, 
    { id: uuidv4(), name: 'White Wine Vinegar', qty: 1000, unit: 'gr'},
    { id: uuidv4(), name: 'White Wine Vinegar', qty: 1000, unit: 'gr'},
    { id: uuidv4(), name: 'White Wine Vinegar', qty: 1000, unit: 'gr'},
    { id: uuidv4(), name: 'White Wine Vinegar', qty: 1000, unit: 'gr'},
    { id: uuidv4(), name: 'White Wine Vinegar', qty: 1000, unit: 'gr'},
    { id: uuidv4(), name: 'White Wine Vinegar', qty: 1000, unit: 'gr'},
   
  ];
  const autoH = rows.length > 9 ? false: true 
  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        sx ={{ height: '70vh'}}
        autoHeight ={autoH}
 
        rows={rows}
        columns={columns}
        pagination='false'
        checkboxSelection
        onCellClick={(e)=> console.log(e) }
        hideFooter 
      />
    </div>
  );
}