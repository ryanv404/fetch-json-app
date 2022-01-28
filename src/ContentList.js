import ListItem from './ListItem';
import ListHeader from './ListHeader';

const ContentList = ({jsonData}) => {
  return (
    <main>
      {jsonData ? (
        <table className="contentList">
          <ListHeader item={jsonData[0]} />
          <tbody>
            {jsonData.map(item => (
              <ListItem key={item.id} item={item} />
            ))}
          </tbody>
        </table>
        ) : <p style={{marginTop: "40px", marginLeft: "auto", marginRight: "auto"}}>No data to display</p>
      }
    </main>
  )
};

export default ContentList;
