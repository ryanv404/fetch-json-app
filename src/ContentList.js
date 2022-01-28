const ContentList = ({jsonData}) => {
  return (
    <main>
      {jsonData ? (
        <ul className="contentList">
          {jsonData.map(item => (
            <li key={item.id}>{JSON.stringify(item)}</li>
          ))}
        </ul>
        ) : <p>No data to display</p>
      }
    </main>
  )
};

export default ContentList;
