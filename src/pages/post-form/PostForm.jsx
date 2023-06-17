import { useState } from "react";
import "./PostForm.css";
import { useDispatch } from "react-redux";
import { addPost } from "../../app/store/slices/posts-slice/post-slice";

const PostForm = () => {
  const [fileUrl, setFileUrl] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [title, setTitle] = useState("");
  const [shortInfo, setShortInfo] = useState("");
  const [fullInfo, setFullInfo] = useState("");
  const [amount, setAmount] = useState(0);
  const [amountRest, setAmountRest] = useState(0);
  const [amountPerSeason, setAmountPerSeason] = useState(0);
  const [amountOfPerson, setAmountOfPerson] = useState(0);

  const dispatch = useDispatch();

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const linkFile = URL.createObjectURL(file).split("").slice(5, 501).join("");

    setFileUrl(linkFile);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: title,
      short_info: shortInfo,
      status: isChecked,
      full_info: fullInfo,
      business_plan_file: fileUrl,
      amount: +amount,
      amount_rest: +amountRest,
      amount_per_season: +amountPerSeason,
      amount_of_person: +amountOfPerson,
      category_id: +selectedValue,
      user_profile_id: 1,
    };

    dispatch(addPost(post));
  };

  return (
    <div className="post-box">
      <h2>ADD POST</h2>

      <form onSubmit={onSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Image</label>
          <input type="file" onChange={handleFileChange} />
        </div>

        <div>
          <label>Short description</label>
          <textarea
            value={shortInfo}
            onChange={(e) => setShortInfo(e.target.value)}
          />
        </div>

        <div>
          <label>Full description</label>
          <textarea
            value={fullInfo}
            onChange={(e) => setFullInfo(e.target.value)}
          />
        </div>

        <div>
          <label>Amount</label>
          <input
            type="number"
            min={0}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <label>Amount rest</label>
          <input
            type="number"
            min={0}
            value={amountRest}
            onChange={(e) => setAmountRest(e.target.value)}
          />
        </div>

        <div>
          <label>Amount per season</label>
          <input
            type="number"
            min={0}
            value={amountPerSeason}
            onChange={(e) => setAmountPerSeason(e.target.value)}
          />
        </div>

        <div>
          <label>Amount of person</label>
          <input
            type="number"
            min={0}
            value={amountOfPerson}
            onChange={(e) => setAmountOfPerson(e.target.value)}
          />
        </div>

        <div>
          <label>Category</label>
          <select value={selectedValue} onChange={handleSelectChange}>
            <option value="1">Стартап</option>
            <option value="2">Экология</option>
            <option value="3">Климат</option>
          </select>
        </div>

        <div>
          <label>Status</label>
          <input
            className="checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>

        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default PostForm;
