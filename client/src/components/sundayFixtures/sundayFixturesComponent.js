import React, { useState } from 'react';
import Loader from '../Loader'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';
import styles from './sundayFixtures.module.scss'
import { enGB } from 'date-fns/locale'
import Modal from '@material-ui/core/Modal';
import SundayFixture from '../sundayFixture/sundayFixtureContainer'
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as CloseModal } from '../../assets/icons/x-mark.svg';

const SundayFixturesComponent = ({
  createNewFixture,
  teams,
  gameweek,
  status,
}) => {
  const classes = useStyles();
  const [newFixture, setNewFixture] = useState(false);
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [date, setDate] = useState('');
  const [modalOpen, setModalOpen] = useState(false)
  const [modalFixtureId, setModalFixtureId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    createNewFixture(homeTeam, awayTeam, date);
    setNewFixture(false);
  };

  const getName = (teamId) => {
    return teams.find((team) => team._id == teamId).name;
  };

  const handleOpen = (id) => {
    setModalFixtureId(id);
    setModalOpen(true)
  }

  const handleClose = () => {
    setModalOpen(false)
  }

  return (
    <section className={styles.fixtures}>
      {/* <button onClick={() => setNewFixture(!newFixture)}>Add Fixture</button>
      {newFixture ? (
        <div>
          <form onSubmit={handleSubmit}>
            <select
              value={homeTeam}
              onChange={(e) => {
                setHomeTeam(e.target.value);
              }}
            >
              <option value="" disabled>
                Select Home Team:
              </option>
              {teams.map((team) => {
                return <option value={team.id}>{team.name}</option>;
              })}
            </select>

            <select
              value={awayTeam}
              onChange={(e) => {
                setAwayTeam(e.target.value);
              }}
            >
              <option value="" disabled>
                Select Away Team:
              </option>
              {teams.map((team) => {
                return <option value={team.id}>{team.name}</option>;
              })}
            </select>

            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              showTimeSelect
              dateFormat="Pp"
            />

            <button className="team-submit-btn">Create Fixture</button>
          </form>
        </div>
      ) : null} */}
      {status === 'loading' ? (
        <Loader />
      ) : gameweek && teams.length > 0 ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Home</th>
                <th></th>
                <th>Away</th>
                <th>Date</th>

              </tr>
            </thead>
            <tbody>
              {gameweek.fixtures.map(fixture => (
                <tr key={fixture.id}>
                  <td>{getName(fixture.homeTeam)}</td>
                  <td><span onClick={() => handleOpen(fixture.id)} className={styles.modalButton}>vs</span></td>
                  <td>{getName(fixture.awayTeam)}</td>
                  <td>{format(parseISO(fixture.date), 'Pp', { locale: enGB })}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Modal
            open={modalOpen}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div className={classes.paper}>
              <SundayFixture fixtureId={modalFixtureId} />
              <div
                className={classes.iconContainer}
                onClick={() => { setModalOpen(false) }}
              >
                <CloseModal className={classes.icon} />
              </div>
            </div>
          </Modal>
        </div>
      ) : null}
    </section>
  );
};

const useStyles = makeStyles(() => ({
  paper: {
    position: 'absolute',
    top: '50%',
    right: '50%',
    transform: "translate(50%, -50%)",
    width: '90%',
    height: '95%',
    outline: '0',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 0 20px -2px gray',
  },
  icon: {
    width: '15px',
    height: '15px',
  },

  iconContainer: {
    display: 'flex',
    zIndex: '9999',
    position: 'absolute',
    top: '30px',
    right: '0',
    transform: 'translate(0%, -50%)',
    padding: '20px',

    '&:hover': {
      cursor: 'pointer',
      color: 'green',
    }
  },

}))



export default SundayFixturesComponent;
