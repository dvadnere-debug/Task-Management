export default function SearchBar({ text, setText }) {
  //   function searchText({text, setText}) {
  //     return tasks.filter((task) =>
  //       task.title.toLowerCase().includes(`$setText`),
  //     );
  //   }

  return (
    <>
      <input
        type="text"
        value={text}
        placeholder="Enter to search"
        onChange={(e) => setText(e.target.value.toLowerCase())}
        // onClick={searchText}
        style={{
          padding: "8px",
          border: "2px solid black",
          borderRadius: "10px",

          width: "300px",
          marginBottom: "20px",
        }}
      />
    </>
  );
}
//default props
