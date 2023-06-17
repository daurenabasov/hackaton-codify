import "./PostForm.css";

const PostForm = () => {
  return (
    <div className="post-box">
      <h2>ADD POST</h2>

      <form>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>

        <div>
          <label>Short description</label>
          <textarea />
        </div>

        <div>
          <label>Full description</label>
          <textarea />
        </div>

        <div>
          <label>Amount</label>
          <input type="number" min={0} />
        </div>

        <div>
          <label>Amount rest</label>
          <input type="number" min={0} />
        </div>

        <div>
          <label>Amount per season</label>
          <input type="number" min={0} />
        </div>

        <div>
          <label>Amount of person</label>
          <input type="number" min={0} />
        </div>

        <div>
          <label>Status</label>
          <input className="checkbox" type="checkbox" />
        </div>

        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default PostForm;
