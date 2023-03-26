import { useState } from 'react'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'make', headerName: 'Make', width: 150},
    { field: 'model', headerName: 'Model', width: 150},
    { field: 'year', headerName: 'Year', width: 150},
    { field: 'color', headerName: 'Color', width: 150}
]

function Datatable() {
    const [open, setOpen] = useState(false);
    const { carData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`selection model ${selectionModel}`)
        setTimeout(() => {window.location.reload() }, 500)
    }
  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="dash-btns">
            <button
                className="btn"
                onClick={() => handleOpen()}>
                Enter New Car
            </button>
            <button
                className="btn"
                onClick={handleOpen}>
                Update
            </button>
            <button
                className="btn"
                onClick={deleteData}>
                Delete
            </button>
        </div>
        {!open ? 
        <div className="table">
        <h2 className="">Car Inventory</h2>
            <DataGrid rows={carData} columns={columns}
                autoHeight={true}
                checkboxSelection={true} 
                onRowSelectionModelChange={ (item:any) => {
                setSelectionModel(item);
                }}/>
        </div>     
        : null} 
    </>
  )
}

export default Datatable