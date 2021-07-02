class HW23 {
    taskMap1() {
        let arr1 = [1, 2, 3, 4, 5];
        let arr2 = ['a', 'sd', 'asd', 'dff'];
        let arr3 = [true, false];
        let map = new Map([[arr1, 'arr1'], [arr2, 'arr2'], [arr3, 'arr3']]);
        console.log('taskMap1', map);
        return map;
    }
    taskMap2() {
        let map = this.taskMap1();
        for(let elem of map) {
            console.log('taskMap2', elem);
        }
        return map;
    }
    taskMap3() {
        let map = this.taskMap1();
        for(let elem of map.keys()) {
            console.log('taskMap3', elem);
        }
    }
    taskMap4() {
        let map = this.taskMap1();
        for(let elem of map.values()) {
            console.log('taskMap4', elem);
        }
    }
    taskMap5() {
        let map = this.taskMap1();
        let size = map.size;
        console.log('taskMap5', size);
    }

    taskSet1() {
        let numArr = [1,2,3,4,5];
        let set = new Set();
        for(let elem of numArr) {
            set.add(elem);
        }
        console.log('taskSet1', set);
        return set;
    }
    taskSet2() {
        let numArr = [1,2,3,4,5];
        let set = new Set();
        for(let elem of numArr) {
            if(elem % 2 === 0) {
                set.add(elem);
            }
        }
        console.log('taskSet2', set);
        return set;
    }
    taskSet3() {
        let set = this.taskSet1();
        let sum = 0;
        for(let elem of set) {
            sum += elem;
        }
        console.log('taskSet3', sum);
    }
}

let hw23 = new HW23();
hw23.taskMap1();
hw23.taskMap2();
hw23.taskMap3();
hw23.taskMap4();
hw23.taskMap5();
hw23.taskSet1();
hw23.taskSet2();
hw23.taskSet3();