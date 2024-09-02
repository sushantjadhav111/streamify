import React, { useState } from 'react';
import { Table, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'; // Import the search icon
import styles from '../css/DataTableView.module.scss';

const DataTableView = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: 'dateStreamed', direction: 'ascending' });
  const [filter, setFilter] = useState('');

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const filteredData = sortedData.filter(item =>
    item.songName.toLowerCase().includes(filter.toLowerCase()) ||
    item.artist.toLowerCase().includes(filter.toLowerCase())
  );

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className={styles['data-table-container']}>
      <div className={styles['search-container']}>
        <InputGroup className={styles['search-input']}>
        <InputGroup.Text >
            <FaSearch color='black' />
          </InputGroup.Text>          <FormControl
          style={{border:"none"}}
            placeholder="Search by song or artist"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className='form-control-search'
          />
          
        </InputGroup>
      </div>
      <Table striped bordered hover className={styles['data-table']}>
        <thead>
          <tr>
            <th
              onClick={() => requestSort('songName')}
              className={`${styles['sortable-column']} ${styles['cursor-pointer']}`}
            >
              Song Name
            </th>
            <th
              onClick={() => requestSort('artist')}
              className={`${styles['sortable-column']} ${styles['cursor-pointer']}`}
            >
              Artist
            </th>
            <th
              onClick={() => requestSort('dateStreamed')}
              className={`${styles['sortable-column']} ${styles['cursor-pointer']}`}
            >
              Date Streamed
            </th>
            <th
              onClick={() => requestSort('streamCount')}
              className={`${styles['sortable-column']} ${styles['cursor-pointer']}`}
            >
              Stream Count
            </th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.songName}</td>
              <td>{item.artist}</td>
              <td>{item.dateStreamed}</td>
              <td>{item.streamCount}</td>
              <td>{item.userID}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTableView;
