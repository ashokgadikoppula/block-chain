
import React, { useState } from 'react';
import { getBlocks } from '../Api';
import { Link } from 'react-router-dom';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const Blocks = () => {

  const [state, setState] = useState({
    blocks: [],
    isLoading: true,
    error: false,
  });

  React.useEffect(() => {
    const fetchBlocks = () => {
      getBlocks()
        .then(res => {
          const result = res.blocks.sort((a, b) => b.time - a.time);
          setState(state => ({
            ...state,
            blocks: result,
            isLoading: false,
            error: false
          }))
        })
        .catch(e => {
          setState(state => ({
            ...state,
            blocks: [],
            isLoading: false,
            error: true
          }))
        })
    }
    fetchBlocks();
  }, [])

  if (state.isLoading) {
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Loading....
      </p>
    );
  }

  if (state.error) {
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Something went wrong, please try again.
      </p>
    );
  }

  return (
    state.blocks &&
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Height</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Hash</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.blocks.map((item) => (
              <TableRow key={item.height}>
                <TableCell><Link to={`/block/${item.height}`}>{item.height}</Link></TableCell>
                <TableCell>{new Date(item.time * 1000).toLocaleString()}</TableCell>
                <TableCell>{item.hash}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Blocks;