let BASE = 'https://api.b7web.com.br/devsfood/api';
export default {
    getCategories: async () => {
        const res = await fetch(BASE+'/categories');
        const json = await res.json();
        return json;
    },
    getProducts: async (category,page,search) => {
        let fields= {};
        console.log(category,page,search);
        if(category !== 0){
            fields.category = category;
        }
        if(page > 1){
            fields.page = page;
        }
        if(search !== ''){
            fields.search = search;
        }
        let string  = new URLSearchParams(fields).toString();
        const res = await fetch(BASE +'/products?'+string);
        const json = await res.json();
        return json;
    }
}