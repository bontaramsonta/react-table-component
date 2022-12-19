import React from 'react'
import { EmployeesData, generateTableData } from '@/utils/tableData'

function EditableTable() {
  const tableData = React.useMemo(generateTableData, [])
  return (
    <div className=' bg-blue-500'>
      {tableData.map((row) => (
        <>
          <ul>
            {Object.keys(row).map((k) => (
              <li>
                {k} : {row?.[k]?.toString() ?? ''}
              </li>
            ))}
          </ul>
          <br />
        </>
      ))}
    </div>
  )
}

export default EditableTable
