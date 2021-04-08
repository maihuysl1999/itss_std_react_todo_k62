/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import {useState} from 'react';

function TodoItem( {item} ) {
  const [isBlack, setIsBlack] = useState(true);

  const handleChnageTextColor = (e) => {
    setIsBlack(!isBlack);
    
  }
  return (
    <label className="panel-block">
      <input type="checkbox"
      onchange ="toggleCheck" 
      value={isBlack} onChange={handleChnageTextColor} 
      />
      <div className={!isBlack ? 'has-text-grey-light' : ''}>{item.text}</div>
    </label>
  );
}

export default TodoItem;