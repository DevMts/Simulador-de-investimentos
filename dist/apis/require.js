import https from 'https';
const options = {
    method: 'GET',
    hostname: 'brapi.dev',
    path: '/api/v2/prime-rate?country=brazil&start=01/12/2021&end=01/01/2022&sortBy=date&sortOrder=desc&token=eJGEyu8vVHctULdVdHYzQd',
};
const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk.toString();
    });
    res.on('end', () => {
        console.log(data);
    });
});
