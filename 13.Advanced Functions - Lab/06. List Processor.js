function processor(input) {
    function solution() {
        let arr = [];
        return {
            add(str) {
                arr.push(str)
            },
            remove(str) {
                while (arr.includes(str)) {
                    let index = arr.findIndex(x => x === str)
                    arr.splice(index, 1);
                }
            },
            print() {
                console.log(arr.join(','));
            }
        }
    }
    let parser = solution();

    input.forEach(x => {
        let [command, str] = x.split(' ');
        parser[command](str)
    })
}

processor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
processor(['add pesho', 'add george', 'add peter', 'remove peter','print'])