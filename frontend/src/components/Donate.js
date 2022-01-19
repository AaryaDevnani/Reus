import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Table } from 'react-bootstrap';
import './styles/Donate.css';
import { deleteAllDonation, deleteDonation } from '../actions/index';

function Donate() {
  const { donations } = useSelector((state) => state.donations);

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="donatePage">
      <Alert
        variant="success"
        style={{ display: show ? 'block' : 'none' }}
        dismissible
        onClose={() => {
          setShow(false);
          navigate('/categoryItems');
        }}
      >
        <Alert.Heading>Thank you for donating your food!</Alert.Heading>
        <hr />
        <small className="mb-0">
          Your initiative to prevent food wastage is appreciated!
        </small>
      </Alert>
      <div className="donateListFlex">
        <div className="donateList">
          <p className="intro">
            <b>Donation List</b>
          </p>

          <div className="donate-list-items">
            {donations.length > 0 ? (
              <Table className="donateTable">
                <tbody>
                  {donations.map((donation) => (
                    <tr key={donation._id}>
                      <td className="td-left">{donation.name}</td>
                      <td className="td-right">
                        <button
                          className="deleteBtn td-right"
                          onClick={() => {
                            dispatch(deleteDonation(donation._id));
                          }}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p>You can donate items from your inventory</p>
            )}
          </div>
          <button
            className="donateBtn"
            onClick={() => {
              dispatch(deleteAllDonation());
              setShow(true);
            }}
          >
            {' '}
            Donate
          </button>
        </div>

        <div className="howWorks">
          <h2 className="worksTitle">How it works?</h2>
          <img
            src="images/donate-how.png"
            className="howImage"
            alt="donate"
            width="400"
          />
        </div>
      </div>
      <div className="donateBanner">
        <img
          src="images/donate-png.png"
          className="flashImg"
          alt="donate"
          width="300"
        />
        <div>
          <h1 className="bannerName">DONATE FOOD TO AVOID WASTAGE</h1>
        </div>
      </div>
    </div>
  );
}

export default Donate;
