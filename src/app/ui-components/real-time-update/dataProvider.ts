export class FakeDataProvider {
    data = 1;
    constructor() {
        setInterval(() => {
            this.data = this.data * 2;
        }, 2000);
    }
}