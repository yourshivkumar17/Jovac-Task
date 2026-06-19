let promise = new Promise((resolve, reject) => {

    let success = false;

    if (success) {
        resolve("Data Mil Gaya");
    } else {
        reject("Error Aa Gayi");
    }
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Kaam Khatam");
    });
