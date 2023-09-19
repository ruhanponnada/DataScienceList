// components/DataTable.tsx

import React, {useState, useEffect} from 'react';

interface DataRow {
  company: string;
  position: string;
  level: string;
  batch: string;
  status: string;
  links: Array<string>;
}

interface DataTableProps {
  data: DataRow[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [statusFilter, setStatusFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [expandedRow, setExpandedRow] = useState(-1);

  const toggleDropdown = (index:any) => {
    if (expandedRow === index) {
      // Clicked on an already expanded row, so collapse it
      setExpandedRow(-1);
    } else {
      // Clicked on a row, so expand it
      setExpandedRow(index);
    }
  };
  useEffect(() => {
    if (statusFilter === '' && levelFilter === '') return setFilteredData(data);

    setFilteredData(data.filter(row => {
      const statusCondition = statusFilter === '' || row.status.toLowerCase() === statusFilter.toLowerCase();
      const levelCondition = levelFilter === '' || row.level.toLowerCase().includes(levelFilter.toLowerCase()) || row.level.toLowerCase() === 'any';
      return statusCondition && levelCondition;
    }));
  }, [statusFilter, levelFilter]);
  const currentDate = new Date();

  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const year = currentDate.getFullYear();

  const formattedDate = `${month}/${day}/${year}`;
    return (
    <div>
      <div className='space-x-4 flex justify-center'>
      <select
          value={statusFilter}
          onChange={(e) => {setStatusFilter(e.target.value)}}
          className="inline-block py-1 px-3 rounded-full border border-blue-300 bg-inherit dark:from-inherit"
        >
          <option value="">Filter by Status</option>
          <option value="open">Open</option>
          <option value="not open yet">Not Open Yet</option>
          <option value="closed">Closed</option>
        </select>
        <select
          value={levelFilter}
          onChange={(e) => {setLevelFilter(e.target.value)}}
          className="inline-block py-1 px-3 rounded-full border border-blue-300 bg-inherit dark:from-inherit"
        >
          <option value="">Filter by Level</option>
          <option value="bachelors">Bachelors</option>
          <option value="masters">Masters</option>
          <option value="phd">PhD</option>
        </select>
        <h2 className='text-md px-20 text-blue-300'>
          Last updated: {formattedDate}
        </h2>
        </div>
      <table className="justify-center">
        <thead className='border-b-2 border-gray-200'>
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">Company</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">Position</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">Level</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">Batch</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">Status</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">Link</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-500 hover:rounded-xl">
              <td className="p-3 text-sm text-white-700">{row.company}</td>
              <td className="p-3 text-sm text-white-700">{row.position}</td>
              <td className="p-3 text-sm text-white-700">{row.level}</td>
              <td className="p-3 text-sm text-white-700">{row.batch}</td>
              <td className="p-3 text-sm text-white-700">
              <span
                className={`p-1.5 text-xs font-medium uppercase tracking-wider ${
                  row.status === 'OPEN'
                    ? 'text-green-800 bg-green-300 rounded-lg bg-opacity-90'
                    : row.status === 'NOT OPEN YET'
                    ? 'text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-90'
                    : row.status === 'CLOSED'
                    ? 'text-red-800 bg-red-300 rounded-lg bg-opacity-90'
                    : ''
                }`}
                >{row.status}
              </span>
              </td>
              
            <td className="p-3 text-sm text-white-700">
                {row.links && row.links.length > 1 ? (
                  <div className="inline-block relative text-left right-0">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="px-4 py-2 font-bold text-blue-500 hover:underline"
                    >
                      Links
                    </button>
                    {expandedRow === index && (
                      <div className="origin-top-right absolute mt-2 w-32 rounded-md shadow-lg bg-gray-200 ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu">
                          {row.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link === 'N/A' ? '#' : link}
                              target="_blank"
                              className="block px-4 py-2 text-sm text-black hover:bg-gray-300 hover:text-gray-900"
                              role="menuitem"
                            >
                              Link {linkIndex + 1}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : row.links && row.links.length === 1 && row.links[0] !== 'N/A' && row.links[0] !== '' ? (
                  <a href={row.links[0]} target="_blank" className="font-bold text-blue-500 hover:underline">
                    Link
                  </a>
                ) : (
                  <h3 className="font-bold text-gray-500 hover:underline">
                    Link
                  </h3>
                )}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      </div> 
      
  );
};

export default DataTable;

