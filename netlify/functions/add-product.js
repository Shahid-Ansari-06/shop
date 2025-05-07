const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const data = JSON.parse(event.body);
        const productsPath = path.join(process.cwd(), 'src', 'products.json');

        // Read existing products
        let products = [];
        if (fs.existsSync(productsPath)) {
            products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
        }

        // Add new product
        const newProduct = {
            id: products.length + 1,
            title: data.title,
            description: data.description,
            price: parseFloat(data.price),
            image: data.image,
            additionalImages: data.additionalImages || [],
            createdAt: new Date().toISOString()
        };

        products.push(newProduct);

        // Save back to file
        fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, product: newProduct })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
