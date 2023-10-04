import React, { useEffect, useState } from 'react';
import './Input.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


const Input = () => {
    const [country, setCountry] = useState('');
    const [errorInput, setErrorInput] = useState(false);
    useEffect(() => {
      
    
      return () => {
        
      }
    }, [])
    
    const handleInput = (event) => {
        const inputValue = event.target.value;
        
        const stringContainsOnlyWhiteSpace = inputValue.match(/^\s*$/) !== null

        //this is when a user might remove all characters from input 
        const emptyString = inputValue.length === 0;

        // Check if the input is a number or consists of only whitespace
        const isInvalidInput = !isNaN(inputValue) || stringContainsOnlyWhiteSpace;

        if (isInvalidInput && !emptyString) {
            setErrorInput(true);
        } else {
            setErrorInput(false); // Reset error state if input is valid
            // Perform API call to set the active country to the screen
            
        }

        //set active country input
        setCountry(inputValue);

    }
    
    const handleSubmit = (event) => {
      //stop page from refreshing
      event.preventDefault();
      console.log(event);


    }

  return (
    <>
    <div className='form-wrapper'>
      <div className='input-container'>
          <form onSubmit={handleSubmit}>
              <input 
              type='text'
              placeholder='Enter a country name'
              value={country}
              onChange={ handleInput }
              className='form-input' 
              />
              <i className='material-icons'>search</i>
          </form>
        </div>
        {errorInput && <p className='error'>Please enter a valid country name</p>}
    </div>

    <Card sx={{ maxWidth: 300, margin: "auto" }}>
    <CardHeader
        title="Ireland"
        subheader="Population of x"
      />
      <CardMedia
        component="img"
        height="194"
        width="100"
        src='https://flagcdn.com/w320/ie.png'

      />
      <Typography gutterBottom variant="h5" component="div" sx={{padding: 0.5}} >
        Country Info
      </Typography>
      <p>
      <Typography variant="p" sx={{padding: 1}} >
        Official Name: Republic of Ireland
      </Typography>
      </p>
      <p>
      <Typography variant="p" sx={{padding: 1}} >
        Currency: Euro ¢
      </Typography>
      </p>
      <p>
      <Typography variant="p" sx={{padding: 1}} >
        Capital: Dublin
      </Typography>
      </p>
    </Card>
    </>
  )
}

export default Input
