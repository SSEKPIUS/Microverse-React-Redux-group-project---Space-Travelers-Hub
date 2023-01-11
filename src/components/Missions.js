import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { getMissions } from '../redux/missions/missions';
import style from './Missions.module.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <TableContainer>
      <Table className={style.missionTable}>
        <TableHead>
          <TableRow>
            <TableCell className={style.missionName}>Mission</TableCell>
            <TableCell className={style.description}>Description</TableCell>
            <TableCell className={style.missionStatus}>Status</TableCell>
            <TableCell className={style.membership} />
          </TableRow>
        </TableHead>
        <TableBody>
          {missions.map((mission) => (
            <TableRow key={mission.id}>
              <TableCell className={style.missionName}>{mission.mission_name}</TableCell>
              <TableCell className={style.descriptionText}>{mission.description}</TableCell>
              <TableCell className={style.missionStatus}><button disabled type="button" className="statusBtn">NOT A MEMBER</button></TableCell>
              <TableCell className={style.membership}><button type="button" className="membershipBtn">Join Mission</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Missions;
