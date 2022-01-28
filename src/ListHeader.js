const ListItem = ({item}) => {
  const values = Object.keys(item);
  
  return (
    <thead>
      <tr>
        {values.map(value => (
          <th key={`${values.indexOf(value)}`}>{value}</th>
        ))}
      </tr>
    </thead>
  )
};

export default ListItem;