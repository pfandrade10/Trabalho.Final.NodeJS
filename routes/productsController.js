let products = {
    items: [
        {
            id: 1,
            name: 'Product 1',
            description: 'Product1 description',
            price: 19.00
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Product2 description',
            price: 19.00
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Product3 description',
            price: 19.00
        },
        {
            id: 4,
            name: 'Product 4',
            description: 'Product4 description',
            price: 19.00
        },
    ]
}

var selectedProduct;

module.exports = {
    get(_, res) {
        
        res.json({products});
    },
    
    getById(req,res) {
        
        var id = req.params.id;

        if (!id) {
            res.json({ error: 'Should receive an id' })
        }

        for (let index = 0; index < products.items.length; index++) {

            if (products.items[index].id == (id))
            {
                res.json(products.items[index])
                break;
            }
        }
        
    },
    
    create(req,res){
        
        if(!req.body){
            res.json({error: 'Erro ao adicionar produto! Produto não encontrado'});
        }
        
        if(req.params.description.lenght > 10){
            res.json({erro:'descrição do produto deve ter no máximo 10 caracteres'});
        }
        
        if(req.params.price <= 0){
            res.json({erro:'Preço do produto não pode ser 0'})
        }
        
        products.items.push(req.body);
        
        res.json({success:'produto adicionado com sucesso'})
    }
};
