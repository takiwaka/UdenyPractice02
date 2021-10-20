import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得
  const inputText = document.getElementById("add-text")
    .value;
  document.getElementById("add-text").value = ""; //値初期化
  addIncompleteLow(inputText);
};

const onClickBack = () => {};

const addIncompleteLow = (text) => {
  //li生成
  const li = document.createElement("li");
  li.className = "list-row";

  //div生成
  const div = document.createElement("div");
  div.className = "list-item";
  div.innerText = text;

  //完了button作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容テキスト取得
    const text = addTarget.firstElementChild.innerText;

    //li以下を初期化
    addTarget.textContent = null;

    //div生成
    const div = document.createElement("div");
    div.className = "list-item";
    div.innerText = text;

    //戻すボタン作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //liの子要素に入れ込む
    addTarget.appendChild(div);
    addTarget.appendChild(backButton);

    //完了リストに生成
    document
      .getElementById("complete-list")
      .appendChild(addTarget);
  });

  //削除button作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //liの子要素に書く要素を設定
  li.appendChild(div);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  //未完了のリストに追加
  document
    .getElementById("incomplete-list")
    .appendChild(li);
};

//未完了リストから削除
const deleteFromIncompleteList = (target) => {
  document
    .getElementById("incomplete-list")
    .removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
