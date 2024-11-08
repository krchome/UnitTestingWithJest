function fetchData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve('data received');
            } else {
                reject('error occurred');
            }
        }, 1000);
    });
}

module.exports = fetchData;
