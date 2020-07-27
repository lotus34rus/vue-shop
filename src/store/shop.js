export default {
    state : {
        watches: [
            {
                id: 1,
                title: 'Paul Rich v1',
                price: 3200,
                desc: "Fully descriprion for PRv1",
                img: "img/shop/paul-rich/v1.jpg",
                brand: 'Paul Rich'
            },
            {
                id: 2,
                title: 'Rolex Aquamarine',
                price: 320000,
                desc: "Fully descriprion for Rolex",
                img: "img/shop/rolex/rolex.jpg",
                brand: "Rolex"
            },

            {
                id: 3,
                title: 'Rolex  2',
                price: 3200000,
                desc: "Fully descriprion for Rolex",
                img: "img/shop/rolex/rolex.jpg",
                brand: "Rolex"
            }
        ]
    },

    actions: {
      
    },

    mutations: {

    },
    getters: {
        getAllWathes : (state) => {            
            return state.watches;
        }, 

        getWatchById: state => id => {
            return state.watches.filter(w => w.id == id);
        }
    }
}