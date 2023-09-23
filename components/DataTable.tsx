// components/DataTable.tsx
import React, { useState, useEffect } from 'react';

interface DataRow {
  company: string;
  position: string;
  level: string;
  batch: string;
  status: string;
  company_type: String;
  links: Array<string>;
}

interface DataTableProps {
  data: DataRow[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [statusFilter, setStatusFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [expandedRow, setExpandedRow] = useState(-1);

  const toggleDropdown = (index: any) => {
    if (expandedRow === index) {
      // Clicked on an already expanded row, so collapse it
      setExpandedRow(-1);
    } else {
      // Clicked on a row, so expand it
      setExpandedRow(index);
    }
  };

  useEffect(() => {
    if (statusFilter === '' && levelFilter === '' && industryFilter === '') return setFilteredData(data);

    setFilteredData(
      data.filter((row) => {
        const statusCondition = statusFilter === '' || row.status.toLowerCase() === statusFilter.toLowerCase();
        const levelCondition =
          levelFilter === '' || row.level.toLowerCase().includes(levelFilter.toLowerCase()) || row.level.toLowerCase() === 'any';
        const industryCondition = industryFilter === '' || row.company_type.toLowerCase() === industryFilter.toLowerCase();
        return statusCondition && levelCondition && industryCondition;
      })
    );
  }, [statusFilter, levelFilter, industryFilter]);

  return (
    <div>
      <div className="space-x-4 flex flex-wrap justify-center sm:space-y-0">
      <div className="flex flex-col items-center sm:flex-row ">
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
          }}
          className="w-full sm:w-36 py-1 px-2 sm:px-3 mb-2 sm:mb-0 rounded-full border border-blue-300 bg-inherit dark:from-inherit"
        >
          <option value="">Status</option>
          <option value="open">Open</option>
          <option value="not open yet">Not Open Yet</option>
          <option value="closed">Closed</option>
        </select>
      </div>
      <div className="flex flex-col items-center sm:flex-row">
        <select
          value={levelFilter}
          onChange={(e) => {
            setLevelFilter(e.target.value);
          }}
          className="w-full sm:w-36 py-1 px-2 sm:px-3 rounded-full border border-blue-300 bg-inherit dark:from-inherit"
        >
          <option value="">Level</option>
          <option value="bachelors">Bachelors</option>
          <option value="masters">Masters</option>
          <option value="phd">PhD</option>
        </select>
      </div>
      <div className="flex flex-col items-center sm:flex-row">
        <select
          value={industryFilter}
          onChange={(e) => {
            setIndustryFilter(e.target.value);
          }}
          className="w-full sm:w-36 py-1 px-2 sm:px-3 rounded-full border border-blue-300 bg-inherit dark:from-inherit"
        >
          <option value="">Industry</option>
          <option value="tech">Tech</option>
          <option value="finance">Finance</option>
          <option value="other">Other</option>
        </select>
      </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full sm:w-auto table-fixed">
          <thead className="border-b-2 border-gray-200">
          <tr>
              <th className="p-1 sm:p-2 text-xs sm:text-sm font-semibold tracking-wide text-center w-1/6 sm:w-auto">
                Company
              </th>
              <th className="p-1 sm:p-2 text-xs sm:text-sm font-semibold tracking-wide text-center w-1/6 sm:w-auto">
                Position
              </th>
              <th className="p-1 sm:p-2 text-xs sm:text-sm font-semibold tracking-wide text-center w-1/6 sm:w-auto">
                Level
              </th>
              <th className="p-1 sm:p-2 text-xs sm:text-sm font-semibold tracking-wide text-center w-1/6 sm:w-auto">
                Batch
              </th>
              <th className="p-1 sm:p-2 text-xs sm:text-sm font-semibold tracking-wide text-center w-1/6 sm:w-auto">
                Status
              </th>
              <th className="p-1 sm:p-2 text-xs sm:text-sm font-semibold tracking-wide text-center w-1/6 sm:w-auto">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-500 hover:rounded-xl">
                <td className="p-1 sm:p-2 text-xs sm:text-sm text-white-700 w-1/6 sm:w-auto">
                  {row.company}
                </td>
                <td className="p-1 sm:p-2 text-xs sm:text-sm text-white-700 w-1/6 sm:w-auto">
                  {row.position}
                </td>
                <td className="p-1 sm:p-2 text-xs sm:text-sm text-white-700 w-1/6 sm:w-auto">
                  {row.level}
                </td>
                <td className="p-1 sm:p-2 text-xs sm:text-sm text-white-700 w-1/6 sm:w-auto">
                  {row.batch}
                </td>
                <td className="p-1 sm:p-2 text-xs sm:text-sm text-white-700 w-1/6 sm:w-auto">
                  <span
                    className={`p-1.5 text-xxs sm:text-xs font-medium uppercase tracking-wider ${
                      row.status === 'OPEN'
                        ? 'text-green-800 bg-green-300 rounded-lg bg-opacity-90'
                        : row.status === 'NOT OPEN YET'
                        ? 'text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-90'
                        : row.status === 'CLOSED'
                        ? 'text-red-800 bg-red-300 rounded-lg bg-opacity-90'
                        : ''
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="p-1 sm:p-2 text-xs sm:text-sm text-white-700 w-1/6 sm:w-auto">
                  {row.links && row.links.length > 1 ? (
                    <div className="inline-block relative text-left right-0">
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="px-2 sm:px-4 py-1 font-bold text-blue-500 hover:underline text-xs sm:text-sm"
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
                                className="block px-4 py-2 text-xs text-black hover:bg-gray-300 hover:text-gray-900"
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
                    <a href={row.links[0]} target="_blank" className="font-bold text-blue-500 hover:underline text-xs sm:text-sm">
                      Link
                    </a>
                  ) : (
                    <h3 className="font-bold text-gray-500 hover:underline text-xs sm:text-sm">Link</h3>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
