import './home.style.css'
import DataTable from '../../components/table'
import DataGraph from '../../components/graph'
import Card from '../../components/card'
import RestroTable from '../../components/restroTable'
import OrderCard from '../../components/ordercard'

export const Status = {
  ACTIVE: 'active',
  OCCUPIED: 'occupied',
  EMPTY: 'empty',
}

const restro = [
  {
    name: 'Deepak',
    number: 'T-01',
    status: Status.ACTIVE,
    size: 4,
  },
  {
    name: 'Ankit',
    number: 'T-02',
    status: Status.EMPTY,
    size: 6,
  },
  {
    name: 'Joe',
    number: 'T-03',
    status: Status.OCCUPIED,
    size: 4,
  },
  {
    name: 'Rakesh',
    number: 'T-04',
    status: Status.EMPTY,
    size: 8,
  },
  {
    name: 'Olivia',
    number: 'T-05',
    status: Status.ACTIVE,
    size: 6,
  },
  {
    name: 'Christopher',
    number: 'T-06',
    status: Status.OCCUPIED,
    size: 12,
  },
  {
    name: 'Sophia',
    number: 'T-07',
    status: Status.EMPTY,
    size: 4,
  },
  {
    name: 'Jacob',
    number: 'T-08',
    status: Status.ACTIVE,
    size: 8,
  },
  {
    name: 'Emma',
    number: 'T-09',
    status: Status.EMPTY,
    size: 6,
  },
  {
    name: 'Matthew',
    number: 'T-10',
    status: Status.ACTIVE,
    size: 4,
  },
  {
    name: 'Isabella',
    number: 'T-11',
    status: Status.OCCUPIED,
    size: 8,
  },
  {
    name: 'Liam',
    number: 'T-12',
    status: Status.EMPTY,
    size: 6,
  },
  {
    name: 'Ava',
    number: 'T-13',
    status: Status.ACTIVE,
    size: 4,
  },
  {
    name: 'David',
    number: 'T-14',
    status: Status.OCCUPIED,
    size: 12,
  },
  {
    name: 'Mia',
    number: 'T-15',
    status: Status.EMPTY,
    size: 6,
  },
  {
    name: 'James',
    number: 'T-16',
    status: Status.ACTIVE,
    size: 8,
  },
  {
    name: 'Sofia',
    number: 'T-17',
    status: Status.EMPTY,
    size: 4,
  },
  {
    name: 'William',
    number: 'T-18',
    status: Status.OCCUPIED,
    size: 6,
  },
  {
    name: 'Victoria',
    number: 'T-19',
    status: Status.EMPTY,
    size: 4,
  },
  {
    name: 'Alexander',
    number: 'T-20',
    status: Status.ACTIVE,
    size: 8,
  },
]

function HomePage() {
  return (
    <div className='homePage'>
      <div className='row'>
        <div className='cardRow'>
          {restro.map((item, key) => (
            <RestroTable
              name={item?.name || ''}
              number={item?.number}
              status={item?.status}
              size={item?.size}
            />
          ))}
        </div>
        <div className='orderColumn'>
          <div className='layouttitle'>Orders</div>
          {restro.map((item, key) => (
            <OrderCard
              name={item?.name || ''}
              number={item?.number}
              status={item?.status}
              size={item?.size}
            />
          ))}
        </div>
      </div>

      <div className='tableRow'>
        <DataTable />
      </div>
      <div className='graphRow'>
        <DataGraph />
      </div>
    </div>
  )
}

export default HomePage
