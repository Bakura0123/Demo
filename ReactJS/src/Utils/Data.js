let obj = {
    getUserList() {
        return [
            {
                email: "khachuy9667@gmail.com",
                name: "Khac huy1",
                password: "123",
                lastname: "Pham",
                firstname: "Huy"
            },
            {
                email: "khachuy966@gmail.com",
                name: "Bakura",
                password: "123",
                lastname: "Ba",
                firstname: "Ra"
            },
            {
                email: "khachuy9668@gmail.com",
                name: "Obama",
                password: "123",
                lastname: "O",
                firstname: "Ma"
            }
        ]
    },
    checkUser(username, password) {
        let userList = this.getUserList();
        let userInfo = null;
        for (let index in userList) {
            if (userList[index].email == username && userList[index].password == password) {
                userInfo = {
                    email: userList[index].email,
                    name: (userList[index].firstname + " " + userList[index].lastname)
                };
                break;
            }
        }
        return userInfo;
    },

    //lay userinfor thu localstorage
    getUserInfo(){
        let userInfor = window.localStorage.getItem("session");
        if(userInfor != null){
            userInfor = JSON.parse(userInfor);
        }
        return userInfor;
    }
};
module.exports = obj;