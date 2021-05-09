
import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getLatestBlock } from '../Api';

const useStyles = makeStyles({
  latestBlockHolder: {
    display: 'flex'
  },
  field: {
    padding: '0px 20px',
    maxWidth: '200px',
    textOverflow: 'ellipsis',
    overflowX: 'hidden',
  },
  fieldName: {
    fontWeight: 500
  }
});

const LatestBlock = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    latestBlock: {},
    isLoading: true,
    error: false,
  });

  React.useEffect(() => {
    getLatestBlock()
      .then(res => {
        setState(state => ({
          ...state,
          latestBlock: res,
          isLoading: false,
          error: false
        }))

      })
      .catch(e => {
        setState(state => ({
          ...state,
          latestBlock: {},
          isLoading: false,
          error: true
        }))
      })
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
    state.latestBlock &&
    <div className={classes.latestBlockHolder}>
      <div className={classes.fieldName}>Height: </div>
      <div className={classes.field}>
        <Link to={`/block/${state.latestBlock.height}`}>{state.latestBlock.height}</Link>
      </div>
      <div className={classes.fieldName}>Index: </div>
      <div className={classes.field}>
        {state.latestBlock.block_index}
      </div>
      <div className={classes.fieldName}>Hash: </div>
      <div className={classes.field}>
        {state.latestBlock.hash}
      </div>
      <div className={classes.fieldName}>Time: </div>
      <div className={classes.field}>
        {new Date(state.latestBlock.time * 1000).toLocaleString()}
      </div>
    </div>
  )
}

export default LatestBlock;