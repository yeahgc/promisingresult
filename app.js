const solveMath = async () => {
    try {
        let wait = await slowMath.add(6, 2);
        console.log(wait);
        wait = await slowMath.multiply(wait, 2);
        console.log(wait);
        wait = await slowMath.divide(wait, 4);
        console.log(wait);
        wait = await slowMath.subtract(wait, 3);
        console.log(wait);
        wait = await slowMath.add(wait, 98);
        console.log(wait);
        wait = await slowMath.remainder(wait, 2);
        console.log(wait);
        wait = await slowMath.multiply(wait, 50)
        console.log(wait);
        wait = await slowMath.remainder(wait, 40);
        console.log(wait);
        wait = await slowMath.add(wait, 32)
        console.log(`The final result is ${wait}`)
    } catch (error) {
        console.log(error)
    }
}

solveMath();