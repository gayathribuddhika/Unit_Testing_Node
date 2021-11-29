const functions = {
    add: (num1, num2) => num1+ num2,
    isNull: () => null,
    checkvalue: x => x,
    createUser: () => {
        const user = { firstname: "gayathri" }
        user["lastname"] = "buddhika";
        return user;
    }
};

module.exports = functions;