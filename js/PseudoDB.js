class PseudoDB {
    constructor() {
        this.maxIndex = 0;
        this.storage = globalThis.localStorage;
    }

    increaseMaxIndex() {
        this.maxIndex += 1;
    }

    insert(data) {
        this.storage.setItem(this.maxIndex, JSON.stringify(data));
        this.increaseMaxIndex();
    }

    delete(id) {
        this.storage.removeItem(id);
    }

    update(data) {
        if (data.id > this.maxIndex) {
            console.log("Invalid data was received.");
            return false;
        }
        this.storage.setItem(data.id, JSON.stringify(data));
    }

    load(id) {
        if (localStorage.getItem(id) === undefined || null) {
            console.log(`comment id : ${data.id} is not found.`);
            return null;
        }

        // console.log(localStorage);
        return JSON.parse(localStorage.getItem(id));
    }

    // loadAll() {
    //     console.log(Object.entries(this.storage));
    //     console.log(Object.keys(this.storage));
    //     console.log(this.storage);
    //     // for (let i of Object.keys(localStorage)) {
    //     //     console.log(localStorage.getItem(i));
    //     // }
    // }
}

export { PseudoDB };