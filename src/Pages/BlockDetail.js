
import React, { useState } from 'react';
import { getBlockDetail } from '../Api';
import { useParams } from 'react-router';
import { Paper } from '@material-ui/core';
import Transactions from '../Components/Transactions';

const BlockDetail = () => {

  const [state, setState] = useState({
    blockDetail: [],
    isLoading: true,
    error: false,
  });

  let { id } = useParams();
  React.useEffect(() => {
    getBlockDetail(id)
      .then(res => {
        setState(state => ({
          ...state,
          blockDetail: res,
          isLoading: false,
          error: false
        }))
      }).catch(e=>{
        setState(state => ({
          ...state,
          blockDetail: {},
          isLoading: false,
          error: true
        }))
      })
  }, []);

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
    <>
      {state.blockDetail &&
        <>
          <h1>Block - {state.blockDetail.height} </h1>
          <Paper>
            <div>
              <div>Hash: {state.blockDetail.hash}</div>
              <div>Timestamp: {state.blockDetail.time}</div>
              <div>No. of Transactions: {state.blockDetail.n_tx}</div>
              <div>Timestamp: {state.blockDetail.time}</div>
            </div>
          </Paper>
          <Paper>
            {state.blockDetail && state.blockDetail.tx && <Transactions transactions={state.blockDetail.tx} />}
          </Paper>
        </>
      }
    </>
  )
}

export default BlockDetail;