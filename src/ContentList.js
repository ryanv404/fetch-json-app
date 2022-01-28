import ListItem from './ListItem';

const ContentList = ({jsonData}) => {
  return (
    <main>
      {jsonData ? (
        <ul className="contentList">
          {jsonData.map(item => (
            <ListItem key={item.id} item={item} />
          ))}
        </ul>
        ) : <p>No data to display</p>
      }
    </main>
  )
};

export default ContentList;
