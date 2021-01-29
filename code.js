const a = 10,
    b = 1;
const getObjectWithPam = (value) => {
    return {
        [`${value}Prop`]: value
    }
};

function loadResultsInDOM(results) {
    document.addEventListener("DOMContentLoaded", function(event) {
        results.forEach((res, index) => {
            const console = document.getElementById(`console${++index}`);
            if (!console) {
                return
            }

            console.innerHTML = res;
        });
    });
}

class Person {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    sayMyName() {
        console.log(this.name)
        return this.name
    }
}

(() => {
        const result1 = `${a} + ${b} = ${a + b}`;
        const result2Object = getObjectWithPam('Exercici2');
        const result2 =
            `{</br>
                ${Object.keys(result2Object)
                .map(key => `&nbsp;&nbsp;${key}: ${result2Object[key]}`)
                .join(',</br>')
                }
            </br>}`;

    const person = new Person('Oscar Casais Lopez');
    const result3 = person.sayMyName()

    console.log(result1);
    console.log(`Ojbect with the value`, result2Object);
    console.log(result3);

    loadResultsInDOM([result1, result2, result3]);
})();