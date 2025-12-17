/*
透過Callback 函數來取得非同步的資料 (交辦的事情完成之後才得到的資料):
1. 先定義一個函數 cbf, cbf的參數是非同步工作完成後取得的資料
2. 資料取得之後,會將資料帶入 cbf 函數中執行

確保 遠端資料取得完成之後,才會執行 cbf 函數
*/

console.log("before");

const id =1;
console.log("id:", id);

const gerUser = (id, cbf) => {
    setTimeout(() => {
        console.log(`Get user data of id:${id} from db`);
        cbf( { id: id, name: "John Doe" });
        console.log("after");
    }, 2000 );
};

const cbFn1 = (user)=>{
console.log("user:", user);
}

// async (non-blocking) 交辦
gerUser(id, cbFn1);

