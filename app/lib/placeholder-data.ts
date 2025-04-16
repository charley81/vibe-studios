const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'John Doe',
    email: 'jdoe@vibestudios.com',
    password: '1234',
  },
];

// clients
const clients = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Eminem',
    email: 'marshalmatters@interscope.com',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Mariah Carey',
    email: 'mcarey@gmail.com',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Willie Nelson',
    email: 'willienelson01@gmail.com',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Jay-Z',
    email: 'jayz@theroc.com',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Romeo Santos',
    email: 'romeo@santosrecords.com',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Metallica',
    email: 'joethemanager@virginrecords.com',
  },
];

// bookings
const bookings = [
  {
    client_id: clients[0].id,
    amount: 15795,
    status: 'pending',
    date: '2024-12-06',
  },
  {
    client_id: clients[1].id,
    amount: 20348,
    status: 'pending',
    date: '2024-11-14',
  },
  {
    client_id: clients[4].id,
    amount: 3040,
    status: 'paid',
    date: '2024-10-29',
  },
  {
    client_id: clients[3].id,
    amount: 44800,
    status: 'paid',
    date: '2024-09-10',
  },
  {
    client_id: clients[5].id,
    amount: 34577,
    status: 'paid',
    date: '2024-08-05',
  },
  {
    client_id: clients[2].id,
    amount: 54246,
    status: 'pending',
    date: '2024-07-16',
  },
  {
    client_id: clients[0].id,
    amount: 660,
    status: 'pending',
    date: '2024-06-27',
  },
  {
    client_id: clients[3].id,
    amount: 32545,
    status: 'paid',
    date: '2024-06-09',
  },
  {
    client_id: clients[4].id,
    amount: 1250,
    status: 'paid',
    date: '2024-06-17',
  },
  {
    client_id: clients[5].id,
    amount: 8546,
    status: 'paid',
    date: '2024-06-07',
  },
  {
    client_id: clients[1].id,
    amount: 500,
    status: 'paid',
    date: '2024-08-19',
  },
  {
    client_id: clients[5].id,
    amount: 8945,
    status: 'paid',
    date: '2024-06-03',
  },
  {
    client_id: clients[2].id,
    amount: 1000,
    status: 'paid',
    date: '2024-06-05',
  },
];

// revenue
const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

export { users, clients, bookings, revenue };
