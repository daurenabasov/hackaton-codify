import { useState } from "react";
import "./PostForm.css";
import { useDispatch } from "react-redux";
import { addPost } from "../../app/store/slices/posts-slice/post-slice";
import { useNavigate } from "react-router-dom";
import ParticlesComponent from "../../app/particles-layot/ParticlesBackround";

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

  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleFileChange = (e) => {
    setFileUrl(e.target.value);
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

    dispatch(addPost(post)).then(() => {
      navigate("/posts");
    });
  };

  return (
    <>
      <ParticlesComponent />
      <div className="post-box">
        <h2>Добавить пост</h2>

        <form onSubmit={onSubmit}>
          <div>
            <label>Название</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="название"
            />
          </div>

          <div>
            <label>Ссылка на картинку</label>
            <input
              type="text"
              value={fileUrl}
              onChange={handleFileChange}
              placeholder="Ссылка"
            />
          </div>

          <div>
            <label>Короткое описание</label>
            <textarea
              value={shortInfo}
              onChange={(e) => setShortInfo(e.target.value)}
              placeholder="Короткое описание"
            />
          </div>

          <div>
            <label>Полное описание</label>
            <textarea
              value={fullInfo}
              onChange={(e) => setFullInfo(e.target.value)}
              placeholder="Полное описание"
            />
          </div>

          <div>
            <label>Количество</label>
            <input
              type="number"
              min={0}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Количество"
            />
          </div>

          <div>
            <label>Сумма остатка</label>
            <input
              type="number"
              min={0}
              value={amountRest}
              onChange={(e) => setAmountRest(e.target.value)}
              placeholder="Сумма остатка"
            />
          </div>

          <div>
            <label>Сумма за сезон</label>
            <input
              type="number"
              min={0}
              value={amountPerSeason}
              onChange={(e) => setAmountPerSeason(e.target.value)}
              placeholder="Сумма за сезон"
            />
          </div>

          <div>
            <label>Сумма человека</label>
            <input
              type="number"
              min={0}
              value={amountOfPerson}
              onChange={(e) => setAmountOfPerson(e.target.value)}
              placeholder="Сумма человека"
            />
          </div>

          <div>
            <label>Категории</label>
            <select value={selectedValue} onChange={handleSelectChange}>
              <option value="1">Стартап</option>
              <option value="2">Экология</option>
              <option value="3">Климат</option>
            </select>
          </div>

          <div>
            <label>Статус</label>
            <input
              className="checkbox"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </div>

          <button type="submit">Добавить</button>
        </form>
      </div>
    </>

  );
};

export default PostForm;
