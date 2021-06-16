export class TestUsersStackB {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

export var silverVip = new TestUsersStackB("cuistackb210", "test1234")
export var bronzeVip = new TestUsersStackB("cuistackb003", "test1234")
export var goldVip = new TestUsersStackB("cuistackb006", "test1234")
export var foundersVip = new TestUsersStackB("cuistackb010", "test1234")
export var platinumVip = new TestUsersStackB("cuistackb206", "test1234")
export var discoveryVip = new TestUsersStackB("cuistackb100", "test1234")
export var discoveryNonVip = new TestUsersStackB("cuistackb105", "test1234")
export var clubGo = new TestUsersStackB("Clubgostackb1", "test1234")
export var nonVip = new TestUsersStackB("cuistackb019", "test1234")
export var invalidUser = new TestUsersStackB("invalid", "test")