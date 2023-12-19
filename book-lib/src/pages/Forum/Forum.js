import BookList from "../../components/BookList/BookList";
import ForumHeader from "../../components/ForumHeader/ForumHeader";
function Forum() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ForumHeader />
        <BookList />
      </div>
    </div>
  );
}

export default Forum;
