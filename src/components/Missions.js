import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import style from './Missions.module.css';

const Missions = () => {
  const missions = [
    {
      id: 1,
      mission_name: 'Thaicom',
      description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the king of Thailand, His Majesty the King Bhumiwad Bhumibol Adulyadej, in recognition of the contributions of the Thai people to the development of the satellite industry.',
      status: 'NOT A MEMBER',
      membership: 'Join Mission',
    },
    {
      id: 2,
      mission_name: 'Thaicom',
      description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the king of Thailand, His Majesty the King Bhumiwad Bhumibol Adulyadej, in recognition of the contributions of the Thai people to the development of the satellite industry.',
      status: 'ACTIVE MEMBER',
      membership: 'Leave Mission',
    },
    {
      id: 3,
      mission_name: 'Thaicom',
      description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the king of Thailand, His Majesty the King Bhumiwad Bhumibol Adulyadej, in recognition of the contributions of the Thai people to the development of the satellite industry.',
      status: 'NOT A MEMBER',
      membership: 'Join Mission',
    },
  ];

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
              <TableCell className={style.missionStatus}><button disabled type="button" className="statusBtn">{mission.status}</button></TableCell>
              <TableCell className={style.membership}><button type="button" className="membershipBtn">{mission.membership}</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Missions;
