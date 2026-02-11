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
        className="border-white border-1"
        // onClick={searchText}
        style={{
          padding: "8px",
        borderWidth: "2px",
          borderRadius: "10px",

          width: "300px",
          marginBottom: "20px",
        }}
      />
    </>
  );
}
//default props
