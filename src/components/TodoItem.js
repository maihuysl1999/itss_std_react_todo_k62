/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import {useState} from 'react';

function TodoItem( {item, onCheck} ) {
  const [isBlack, setIsBlack] = useState(true);

  const handleChangeTextColor = (e) => {
    setIsBlack(!isBlack);
    onCheck(item);
  }
  return (
    <label className="panel-block">
      <input type="checkbox" value={isBlack} onChange={handleChangeTextColor}/>
      <div className={!isBlack ? 'has-text-grey-light' : ''}>{item.text}</div>
    </label>
  );
}

export default TodoItem;