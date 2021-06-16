export class TestUsersStackA {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

export var silverVip = new TestUsersStackA("cuitestapiWEF", "test1234")
export var goldVip = new TestUsersStackA("cuitestapiICO", "test1234")
export var foundersVip = new TestUsersStackA("cuitestapiPMR", "test1234")
export var platinumVip = new TestUsersStackA("cuitestapiQNV", "test1234")
export var discoveryVip = new TestUsersStackA("cuitestapiBWX", "test1234")
export var discoveryNonVip = new TestUsersStackA("cuitestapiMDF", "test1234")
export var nonVip = new TestUsersStackA("cuitestapiTVS", "test1234")
export var invalidUser = new TestUsersStackA("invalid", "test")