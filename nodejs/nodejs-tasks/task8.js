const fs = require("fs").promises;

async function readFile() {

    try {

        const data = await fs.readFile(
            "data.txt",
            "utf8"
        );

        console.log(data);

    } catch (error) {

        console.log("Error:", error.message);

    }
}

readFile();