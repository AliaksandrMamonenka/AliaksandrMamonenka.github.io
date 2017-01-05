export class FakeDataProvider {
    data = 1;

    constructor() {
        setInterval(() => {
            this.data = this.data * 2;
            if (this.data >= 100000000000000) {
                this.data = 2;
            }
        }, 2000);
    }
}