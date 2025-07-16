const h2 = document.querySelector('h2');
const btn = document.querySelector('button');

forLoop = () => {
    for (let i = 1; i <= 10; i++) {
      h2.innerHTML+=i;
    }
}
whileLoop = () => {
    let i = 1;
    while (i <= 10) {
      h2.innerHTML+=i;
      i++;
    } 
}
doWhileLoop = () => {
     let i = 1;
    do {
      h2.innerHTML+=i;
      i++;
    } while (i <= 10);
}
ifRecursiveLoop = () => {
    let i = 1;
    count = () => {
    if (i > 10) {
        return 
        }
    h2.innerHTML+=i; 
    i++; 
    count();
    } 
    return count();
}
switchRecursiveLoop = () => {
    let i = 1;
    count = () => {
        switch (i) {
            default:
                h2.innerHTML+=i;
                i++;
                count();
                break;
            case 10:
                h2.innerHTML+=i;
                break;
        }
    }
    return count();
}
forEachLoop = () => {
    const nums = [1,2,3,4,5,6,7,8,9,10];
    i = 0;
    nums.forEach(() => {
        h2.innerHTML+=nums[i];
        i++;
    })
}
forEachAddArray = () => {
    let nums = [3,7,19,23,4,9,2];
    let sum = 0;
    let i = 0;
    nums.forEach(() => {
    sum+=nums[i];
    i++;
    })
    h2.innerHTML+=sum;
}
forAddArray = () => {
    let nums = [3,7,19,23,4,9,2];
    let sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    h2.innerHTML+=sum;
}
newReversedArray = () => {
    let nums = [3,7,19,23,4,9,2];
    let numsReversed = [];
    for (i = nums.length - 1; i >= 0; i--) {
        numsReversed.push(nums[i]);
    }
    h2.innerHTML+=numsReversed;
}

btn.addEventListener("click", forLoop);