
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Banner from '../components/Banner';
import { desktop } from '../responsive'
import { useMediaQuery } from '@material-ui/core';
import CategoryGrid from '../components/CategoryGrid'

import styled from 'styled-components';

const Container = styled.div`
min-height:700px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:lightblue;
${desktop ({display:"none"})};


`



export default function CustomizedInputBase() {
  return (
<Container>

<Paper style={{border:"1px solid lightblue", marginTop:'10px',borderRadius:"10px", padding:"4px"}}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',justifyContent:'center', width: '90%', margin:'auto' }}
    >
     
      <InputBase
        sx={{ ml: 1, flex: 1  }}
        placeholder=" Search Product"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      
    </Paper>
    <Banner/>
    <CategoryGrid/>
    </Container>
    
  );
}
