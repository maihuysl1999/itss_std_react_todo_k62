import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({value, onChange}) {
  function handleChange(event) {
        onChange(event.target.value);
    }
  return (
    <div className="panel-block">
      <input class="input" type="text" onChange={handleChange}/>
    </div>
  );
}

export default Input;
