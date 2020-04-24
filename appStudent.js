/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
const readlineSync = require('readline-sync');

//List menu
const listMenu = [
  "Create contact",
  "Edit contact",
  "Delete contact",
  "Search contact"
];

//List contacts
let contacts = [
  {name: "Thinh", phone: "09876543"},
  {name: "Hung", phone: "098764823"}
];

//Contructor Contact
function Contact(name, phone) {
  this.name = name;
  this.phone = phone;
}

//Show menu to choose
function menu(){
  console.log("-".repeat(20));
  const index = readlineSync.keyInSelect(listMenu);
  console.log("-".repeat(20));
  switch(index) {
    case 0: createContact(); break;
    case 1: editContact(); break;
    case 2: deleteContact(); break;
    case 3: console.log(searchContact().resultContact); break;
    default: menu();
  }
  //recusive - callback
  menu();
}

//Create contact
function createContact() {
  let name = readlineSync.question("What's your name?: ");
  let phone = readlineSync.question("What's your phone?: ");
  let contact = new Contact(name, phone);
  contacts.push(contact);
  console.log(contacts);
}

//Edit contact
function editContact(name, phone) {
  let resultContact = searchContact().searchContact;
  let index = readlineSync.keyInSelect(resultContact.map(element => element.name), "Choose a name?: ");
  let namer = readlineSync.question("Type a new name:  ");
  let phoner = readlineSync.question("Type a new phone:  ");
  if (namer !== "") resultContact[index].name = namer;
  if (phoner !== "") resultContact[index].phone = phoner;
  console.log(`Updated ${namer}, ${phoner}`);
}

//Delete contact
function deleteContact() {
  let searchContacter = searchContact();
  let {resultContact, indexID} = searchContacter;
  let index = readlineSync.keyInSelect(resultContact.map(element => element.name), "Choose a name?: ");
  let delID = indexID[index];
  contacts = [
    ...contacts.slice(0, delID),
    ...contacts.slice(delID + 1)
  ];

  console.log(contacts)  ;
}

//Search contact
function searchContact() {
  let indexArr = [];
  //choose type search
  let index = readlineSync.keyInSelect(["Search name", "Search phone"]);
  //search name
  const searchName = () => {
    let name = readlineSync.question("Type name:  ");
    return contacts.filter((element, index) => {
      if (element.name.toLowerCase().indexOf(name) !== -1) {
        indexArr.push(index);
        return true;
      }
    });
  };
  //search phone
  const searchPhone = () => {
    let phone = readlineSync.question("Type phone:  ");
    return contacts.filter((element, index) => {
      if (element.phone.indexOf(phone) !== -1) {
        indexArr.push(index);
        return true;
      }
    });
  }

  switch(index) {
    case 0: return {resultContact: searchName(), indexID: indexArr}; break;
    case 1: return {resultContact: searchPhone(), indexID: indexArr}; break;
    default: searchContact();
  }
}

menu();
