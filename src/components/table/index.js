import { FormGroup, FormLabel, TextField } from '@mui/material'
import React from 'react'
import MUIDataTable from 'mui-datatables'
import { TData } from '../utils'

function DataTable() {
  const columns = [
    {
      label: 'Name',
      name: 'Name',
      options: {
        filter: false,
      },
    },
    {
      label: 'Status',
      name: 'Type',
      options: {
        filter: true,
        filterType: 'dropdown',
        sort: false,
        customFilterListOptions: {
          render: (v) => v.toLowerCase(),
        },
      },
    },
    {
      label: 'Location',
      name: 'Location',
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: 'Date',
      options: {
        filter: true,
        filterType: 'custom',
        customFilterListOptions: {
          render: (v) => {
            if (v[0] && v[1]) {
              return [`Start Date: ${v[0]}`, `End Date: ${v[1]}`]
            } else if (v[0]) {
              return `Start Date: ${v[0]}`
            } else if (v[1]) {
              return `End Date: ${v[1]}`
            }
            return []
          },
          update: (filterList, filterPos, index) => {
            if (filterPos === 0) {
              filterList[index].splice(filterPos, 1, '')
            } else if (filterPos === 1) {
              filterList[index].splice(filterPos, 1)
            } else if (filterPos === -1) {
              filterList[index] = []
            }

            return filterList
          },
        },
        filterOptions: {
          names: [],
          logic(age, filters) {
            let date = new Date(age)
            let startDate, endDate
            if (filters[0]) {
              startDate = new Date(filters[0])
            }
            if (filters[1]) {
              endDate = new Date(filters[1])
            }

            if (filters[0] && filters[1]) {
              return date < startDate || date > endDate
            } else if (filters[0]) {
              return date < startDate
            } else if (filters[1]) {
              return date > endDate
            }
            return false
          },
          display: (filterList, onChange, index, column) => (
            <div>
              <FormLabel>Date Range</FormLabel>
              <FormGroup row>
                <TextField
                  type='date'
                  placeholder='start date'
                  value={filterList[index][0] || ''}
                  onChange={(event) => {
                    filterList[index][0] = event.target.value
                    onChange(filterList[index], index, column)
                  }}
                  style={{ width: '45%', marginRight: '5%', height: '20px' }}
                />
                <TextField
                  type='date'
                  placeholder='end date'
                  value={filterList[index][1] || ''}
                  onChange={(event) => {
                    filterList[index][1] = event.target.value
                    onChange(filterList[index], index, column)
                  }}
                  style={{ width: '45%' }}
                />
              </FormGroup>
            </div>
          ),
        },
        sort: true,
      },
    },
    {
      name: 'Payment',
      options: {
        filter: true,
        sort: true,
        filterType: 'checkbox',
        filterOptions: {
          names: [
            'Lower wages(<100000)',
            'Average wages(<200000)',
            'Higher wages(>200000)',
          ],
          logic(salary, filterVal) {
            salary = salary.replace(/[^\d]/g, '')
            const show =
              (filterVal.indexOf('Lower wages(<100000)') >= 0 &&
                salary < 100000) ||
              (filterVal.indexOf('Average wages(<200000)') >= 0 &&
                salary >= 100000 &&
                salary < 200000) ||
              (filterVal.indexOf('Higher wages(>200000)') >= 0 &&
                salary >= 200000)
            return !show
          },
        },
      },
    },
  ]

  const options = {
    filter: true,
    download: false,
    print: false,
    search: true,
    viewColumns: false,
    searchPlaceholder: 'Search in hole table',
    selectableRows: false,
    elevation: 0,
    filterType: 'multiselect',
    responsive: 'standard',
    setFilterChipProps: (colIndex, colName, data) => {
      return {
        color: 'primary',
        variant: 'outlined',
        className: 'testClass123',
      }
    },
  }

  return (
    <MUIDataTable
      title={'Payments'}
      data={TData}
      columns={columns}
      options={options}
    />
  )
}

export default DataTable
