import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';

const ChangePages = (props) => {
    const {setNumPage}=props
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
        <div>
            <ArrowBackIcon/>
        </div>

        <Button onClick={()=>setNumPage(numPage=>numPage-1)}>
            Anterior
        </Button>

        
        <Button onClick={()=>setNumPage(numPage=>numPage+1)}>
            Sigiente
        </Button>

        <div>

            <ArrowForwardIcon />
        </div>
    </div>
  )
}

export default ChangePages