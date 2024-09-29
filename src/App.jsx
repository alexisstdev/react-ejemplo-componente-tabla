import { Table } from 'table-cda';
import './App.css';
import { moreColumns, moreData } from './constants';

const columns = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Nombre',
    accessor: 'nombre',
  },
  {
    Header: 'Apellido',
    accessor: 'apellido',
  },
  {
    Header: 'Edad',
    accessor: 'edad',
  },
];

const data = [
  {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    id: 1,
  },
  {
    nombre: 'Maria',
    apellido: 'Gomez',
    edad: 25,
    id: 2,
  },
  {
    nombre: 'Pedro',
    apellido: 'Lopez',
    edad: 35,
    id: 3,
  },
];

function App() {
  return (
    <>
      <h1>Componente tabla reutilizable</h1>
      <hr
        style={{
          height: 1,
          marginBlock: '30px',
        }}
      />
      <Table data={moreData} columns={moreColumns} />
    </>
  );
}

export default App;
