const ListItem = ({item}) => {
  const values = Object.values(item);

  return ( 
    <tr>
      {values.map(value => (
        <td key={`${item.id}-${values.indexOf(value)}`}>{typeof value === 'object' ? JSON.stringify(value) : value}</td>
      ))}
    </tr>
  )
};

export default ListItem;