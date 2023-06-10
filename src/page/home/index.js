import './home.style.css';
import DataTable from '../../components/table';
import DataGraph from '../../components/graph';
import Card from '../../components/card';

function HomePage() {
  return (
    <div className="homePage">
      <div className="cardRow">
        <Card
          data={2000000}
          title={'Total Users'}
          text={'Users Subscribe till now.'}
        />
        <Card
          data={1500000}
          title={'Average Salary'}
          text={'Average Salary for Employees.'}
        />
        <Card
          data={235}
          title={'Total Projects'}
          text={'Projects Completed till now.'}
        />
        <Card
          data={37}
          title={'Total Business'}
          text={'Business Acquired till now.'}
        />
      </div>

      <div className="graphRow">
        <div className="graphColumn">
          <DataGraph />
        </div>
        <div className="graphColumn">
          <DataGraph />
        </div>
      </div>
      <div className="tableRow">
        <DataTable />
      </div>
    </div>
  );
}

export default HomePage;
