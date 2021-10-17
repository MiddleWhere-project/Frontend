// html 코드에 script 부분 넣어놔서 이 파일 필요 없을듯 해요

// insertRow() 는 행(tr)추가, insertCell()은 열(td) 추가
function rowAdd() {
  var objRow;
  objRow = document.all("tblShow").insertRow();

  /*
  var objCell = objRow.insertCell();
  objCell.innerHTML =
    "<li class='item-list-user'> <table> <tr> <td> <img src='img/user.png' alt='사용자 아이콘' /> </td><td id='start_location'> <p> <input type='text' placeholder='탭하여 출발 위치를 입력해주세요'/></p><hr /></td></tr></table></li>";
*/

  // 사용자 아이콘
  var objCell_Icon = objRow.insertCell();
  objCell_Icon.innerHTML = " <img src='img/user.png' alt='사용자 아이콘'/>";

  // 출발 위치 입력창
  var objCell_Start = objRow.insertCell();
  objCell_Start.innerHTML =
    "<input type='text' placeholder='탭하여 출발 위치를 입력해주세요' id='start_location'/>";

  // 삭제 버튼
  var objCell_Del = objRow.insertCell();
  objCell_Del.innerHTML =
    "<button type='button' id='del-button'> <img src='img/del.png' alt='del_btn' /> </button>";
}

function addRow() {
  var objRow;
  objRow = document.all("locations").insertRow();

  // 새 행(Row) 추가
  //const newRow = table.insertRow();

  // 새 행에 Cell 추가
  var newCell1 = objRow.insertCell();
  var newCell2 = objRow.insertCell();

  // Cell에 내용 추가
  newCell1.innerHTML("<td><img src='img/user.png' alt='사용자 아이콘' /></td>");

  newCell2.innerHTML(
    "<td><input type='text' placeholder='탭하여 출발 위치를 입력해주세요' id='start_location' /><hr /></td>"
  );
}
