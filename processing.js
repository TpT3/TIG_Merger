const sample = [3, 627471, [["ss4g99xs8", "Name", 0, [
    ["0"], [], [], [], [], [], [], [], [], [], [], [], [], []
]]]]

let Algorythm = function () {
    this.mergeMain = (name, inputParts) => {
        let result = sample;
        const parts = [];

        //input
        result[2][0][1] = name;

        inputParts.forEach(current => {

            result[0] = current[0];
            result[1] = current[1] + 1;
            result[2][0][0] = current[2][0][0];
            result[2][0][2] = current[2][0][2];
            result[2][0][3][0] = current[2][0][3][0];

            current[2][0][3].shift();
            parts.push(current[2][0][3]);
        });

        return JSON.stringify(this.sortParts(parts, result));

    }

    this.sortParts = (partsS, resultS) => {

        const sorted = [];
        for (let i = 0; i < 13; i++) sorted.push([]);

        //sort
        partsS.forEach(part => {
            for (let i = 0; i < part.length; i++) {
                sorted[i] = sorted[i].concat(part[i]);
            }
        });

        //fill
        for (let i = 0; i < sorted.length; i++) {
            resultS[2][0][3][i + 1] = sorted[i];
        }

        return resultS;
    }
}

let m = new Algorythm();