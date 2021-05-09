
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { makeStyles, Paper } from '@material-ui/core';
import { getTDetail } from '../Api';

const useStyles = makeStyles({
  address: {
    color: '#3f51b5',
    fontWeight: 500,
    padding: '10px',
  },
  fromAddress: {
    padding: '10px',
    borderBottom: '1px solid #EBEBEB'
  },
  toAddress: {
    padding: '10px',
    borderBottom: '1px solid #EBEBEB'
  }
});

const TransactionDetail = () => {
  let history = useHistory();
  const classes = useStyles();
  const trDetail = history.location.state && history.location.state.transaction ? history.location.state.transaction : "";
  const [tDetail, setTDetail] = useState(trDetail);
  let { id } = useParams();
  React.useEffect(() => {
    if (!tDetail) {
      getTDetail(id)
        .then(res => {
          setTDetail(res);
        })
    }
  }, []);
  return (
    <>
      <h1>Transaction</h1>
      <Paper>
        <div>
          <div>Hash: {tDetail.hash}</div>
          {tDetail.fee && <div> <b> Fee: </b>{tDetail.fee}</div>}
          <div className={classes.address}>From</div>
          <div className={classes.fromAddress}>
          {tDetail.inputs && tDetail.inputs.map(item => (
            item.prev_out && <>
              <div> <b> Address:</b>{item.prev_out.addr}</div>
              <div> <b> Value:</b>{item.prev_out.value}</div>
            </>

          ))}
          </div>
          <div className={classes.address}>To</div>
          {tDetail.out && tDetail.out.map(item => (
            <div className={classes.toAddress}>
              {item.addr && <div><b>Address:</b> {item.addr}</div>}
              {item.value && <div> <b> Value:</b>{item.value}</div>}
              
            </div>
          ))}
        </div>
      </Paper>
    </>
  )
}

export default TransactionDetail;