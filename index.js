const fs = require('fs');

const _path = './data/data.json';

const appendToJSONArray = (json, data, endpoint) => {
    const parsedJSON = JSON.parse(json.toString());

    if (!parsedJSON[endpoint]) {
        parsedJSON[endpoint] = [];
    }

    parsedJSON[endpoint].push(data);

    fs.writeFile(_path, JSON.stringify({
        ...parsedJSON,
        [endpoint]: parsedJSON[endpoint]
    }), (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`${endpoint}: data added successfully`)
    })
}

if (fs.existsSync(_path)) {
    fs.readFile(_path, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        appendToJSONArray(
            data.toString(),
            {
                name: 'John',
                id: Math.random().toString(36).slice(2, 8)
            },
            'users'
        );

        // appendToJSONArray(
        //     data.toString(),
        //     {
        //         name: 'Keyboard',
        //         id: Math.random().toString(36).slice(2, 8)
        //     },
        //     'products'
        // );
    })
}